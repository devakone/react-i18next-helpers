import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useTranslateFormErrors = (errors, touched, setFieldTouched) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleLanguageChanged = () => {
      Object.keys(errors).forEach(fieldName => {
        if (Object.keys(touched).includes(fieldName)) {
          setFieldTouched(fieldName, true, true);
        }
      });
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [errors, i18n, setFieldTouched, touched]);
};

export default useTranslateFormErrors;
