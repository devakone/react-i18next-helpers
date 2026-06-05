import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const translateI18nTokensInHtmlElement = (i18n, htmlElement) => {
  const i18nTokenNodes = htmlElement.querySelectorAll('[data-i18n]');
  for (let i = 0; i < i18nTokenNodes.length; i++) {
    i18nTokenNodes[i].innerHTML = i18n.t(i18nTokenNodes[i].getAttribute('data-i18n'));
  }
};

const useTranslateHtmlElement = html => {
  const { i18n } = useTranslation();
  const [node, setRef] = useState(null);

  useEffect(() => {
    const translateIfNodeRendered = node => {
      if (node) {
        translateI18nTokensInHtmlElement(i18n, node);
      }
    };
    const handleLanguageChanged = () => {
      translateIfNodeRendered(node);
    };

    translateIfNodeRendered(node);
    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [html, i18n, node]);

  return [setRef];
};

export default useTranslateHtmlElement;
