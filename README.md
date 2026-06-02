# react-i18next-helpers

A small set of compatibility helpers for apps that use React, Formik, i18next, and react-i18next.

## Modern usage guidance

These helpers are for edge cases where translations live outside normal React rendering.

For most React UI, prefer calling `t(...)` during render or using `Trans` from `react-i18next`. For most Formik validation, prefer storing translation keys and values in form errors, then translating those errors during render. That approach re-renders naturally when the active language changes.

Use this package when an existing app stores already-translated Formik error strings, or when sanitized dynamic HTML contains `data-i18n` tokens that React does not render directly.

## Installation

```sh
npm install react-i18next-helpers
```

Install the peer dependencies in your app:

```sh
npm install formik i18next react react-i18next
```

## Translate Formik errors after language changes

Formik validation errors can stay in the previous language after `i18n.changeLanguage()` runs if validation stores translated strings instead of translation keys. `useTranslateFormErrors` re-touches fields that already have errors and have been touched, causing Formik to validate them again.

Use this helper for legacy or compatibility flows. In new code, prefer rendering errors from keys:

```jsx
{formik.errors.name && <div>{t(formik.errors.name)}</div>}
```

```jsx
import { Formik } from 'formik';
import { useTranslateFormErrors } from 'react-i18next-helpers';

const ContactForm = formik => {
  useTranslateFormErrors(formik.errors, formik.touched, formik.setFieldTouched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name && <div>{formik.errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const Example = () => (
  <Formik initialValues={{ name: '' }} onSubmit={values => console.log(values)}>
    {formik => <ContactForm {...formik} />}
  </Formik>
);
```

You can also use `WithTranslateFormErrors` when you want a wrapper component:

```jsx
import { Formik } from 'formik';
import { WithTranslateFormErrors } from 'react-i18next-helpers';

const Example = () => (
  <Formik initialValues={{ name: '' }} onSubmit={values => console.log(values)}>
    {formik => (
      <WithTranslateFormErrors form={formik}>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && <div>{formik.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      </WithTranslateFormErrors>
    )}
  </Formik>
);
```

## Translate dynamic HTML

`useTranslateHtmlElement` translates elements inside dynamic HTML that use a `data-i18n` attribute. This is intended for CMS or backend-provided HTML that React does not own directly.

For normal React content, prefer `t(...)` or `Trans`. Sanitize untrusted HTML before rendering it.

```jsx
import DOMPurify from 'dompurify';
import { useTranslateHtmlElement } from 'react-i18next-helpers';

const SafeHtml = ({ html }) => {
  const [ref] = useTranslateHtmlElement(html);
  const safeHtml = DOMPurify.sanitize(html);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: safeHtml }} />;
};
```

```html
<span data-i18n="profile.greeting"></span>
```
