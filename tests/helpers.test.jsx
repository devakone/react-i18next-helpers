import React from 'react';
import { createRequire } from 'module';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, waitFor } from '@testing-library/react';

import * as srcExports from '../src';
import useTranslateFormErrors from '../src/hooks/use-translate-form-errors';
import useTranslateHtmlElement from '../src/hooks/use-translate-html-element';

const reactI18nextState = vi.hoisted(() => ({
  i18n: null
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: reactI18nextState.i18n
  })
}));

const require = createRequire(import.meta.url);

const createI18n = () => ({
  on: vi.fn(),
  off: vi.fn(),
  t: vi.fn(key => `translated:${key}`)
});

const getLastHandler = (i18n, eventName) => {
  const eventCalls = i18n.on.mock.calls.filter(([event]) => event === eventName);
  return eventCalls[eventCalls.length - 1][1];
};

const FormErrorsProbe = ({ errors, touched, setFieldTouched }) => {
  useTranslateFormErrors(errors, touched, setFieldTouched);
  return null;
};

const HtmlProbe = ({ html }) => {
  const [setRef] = useTranslateHtmlElement(html);
  return <div ref={setRef} dangerouslySetInnerHTML={{ __html: html }} />;
};

beforeEach(() => {
  reactI18nextState.i18n = createI18n();
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('public exports', () => {
  it('exports the expected helpers from src and dist', () => {
    const expectedExports = [
      'WithTranslateFormErrors',
      'useTranslateFormErrors',
      'useTranslateHtmlElement'
    ];

    expect(Object.keys(srcExports).sort()).toEqual(expectedExports);
    expect(Object.keys(require('../dist')).sort()).toEqual(expectedExports);
  });
});

describe('useTranslateFormErrors', () => {
  it('revalidates only touched fields with errors when the language changes', () => {
    const setFieldTouched = vi.fn();
    const errors = {
      email: 'errors.email',
      password: 'errors.password'
    };
    const touched = {
      email: true,
      name: true
    };

    render(
      <FormErrorsProbe
        errors={errors}
        touched={touched}
        setFieldTouched={setFieldTouched}
      />
    );

    getLastHandler(reactI18nextState.i18n, 'languageChanged')();

    expect(setFieldTouched).toHaveBeenCalledTimes(1);
    expect(setFieldTouched).toHaveBeenCalledWith('email', true, true);
  });

  it('unregisters the same languageChanged handler that it registered', () => {
    const { unmount } = render(
      <FormErrorsProbe
        errors={{ email: 'errors.email' }}
        touched={{ email: true }}
        setFieldTouched={vi.fn()}
      />
    );
    const handler = getLastHandler(reactI18nextState.i18n, 'languageChanged');

    unmount();

    expect(reactI18nextState.i18n.off).toHaveBeenCalledWith('languageChanged', handler);
  });
});

describe('useTranslateHtmlElement', () => {
  it('translates data-i18n nodes when rendered', async () => {
    const html = '<span data-i18n="fields.email">Email</span><span>Unchanged</span>';
    const { container } = render(<HtmlProbe html={html} />);

    await waitFor(() => {
      expect(container.querySelector('[data-i18n="fields.email"]').innerHTML).toBe(
        'translated:fields.email'
      );
    });
    expect(container.textContent).toContain('Unchanged');
  });

  it('cleans up the active languageChanged listener on unmount', async () => {
    const { unmount } = render(
      <HtmlProbe html='<span data-i18n="fields.email">Email</span>' />
    );

    await waitFor(() => {
      expect(reactI18nextState.i18n.t).toHaveBeenCalledWith('fields.email');
    });
    const handler = getLastHandler(reactI18nextState.i18n, 'languageChanged');

    unmount();

    expect(reactI18nextState.i18n.off).toHaveBeenLastCalledWith('languageChanged', handler);
  });
});
