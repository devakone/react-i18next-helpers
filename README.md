# react-i18next-helpers
A set of helper hooks and components to use with i18next, react-i18next and Formik; i18next makes translating a breeze in apps, and using the react-i18next opens up the API for most React Applications. However, there are blind spots like with any other libraries. These helpers are here to help you cover these blind spots.

## Using Formik and translating errors
If you use Formik and you have errors rendered on the screen, you will notice that if you change the current language, your errors remain in the language they were before the translation. This library gives you a hook you can use to make sure that when the i18n language changes, your form errors are also translated.

### Render Example 

This example is based on using the `render` method for rendering a Formik form

```

...
<Formik component={ContactForm} />;
...

import useTranslateFormErrors from '../../hooks/use-translate-form-errors';

const ContactForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldTouched
}) => {
  
 useTranslateFormErrors(errors, touched, setFieldTouched);

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      name="name"
    />
    {errors.name && <div>{errors.name}</div>}
    <button type="submit">Submit</button>
  </form>
);

}

```

Just passing the `errors`, `touched`, and `setFieldTouched` FormikProps to the hook in your render method ensures that your errors will get translated if the language changes.

### HOC Example 

```
<Formik
  render={({ handleSubmit, handleChange, handleBlur, setFieldTouched, values, errors, touched }) => (
    <WithTranslateFormErrors errors={errors} touched={touched} setFieldTouched={setFieldTouched}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name="name"
        />
        {errors.name &&
          <div>
            {errors.name}
          </div>}
        <button type="submit">Submit</button>
      </form>
    </WithTranslateFormErrors>
  )}
/>

import PropTypes from 'prop-types';
import React, { useEffect }  from 'react';
import { useTranslation } from 'react-i18next';

const useTranslateFormErrors = (errors, touched, setFieldTouched) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.on('languageChanged', lng => {
      Object.keys(errors).forEach(fieldName => {
        if (Object.keys(touched).includes(fieldName)) {
          setFieldTouched(fieldName);
        }
      });
    });
    return () => {
      i18n.off('languageChanged', lng => {});
    };
  }, [errors]);
};


const WithTranslateFormErrors = ({ errors, touched, setFieldTouched,  children }) => {
  useTranslateFormErrors(errors, touched, setFieldTouched);
  return <>{children}</>;
};

WithTranslateFormErrors.propTypes = {
  form: PropTypes.object
};

export default WithTranslateFormErrors;


```



Just passing the `errors`, `touched`, and `setFieldTouched` FormikProps to the HOC in your render method ensures that your errors will get translated if the language changes.

## Translating raw or dynamic HTML

If you're ever in need of translating HTML you're adding dynamically to your app, and to keep content in that HTML translated, you can use the `useTranslateHtmlElement` hook.

```

import dompurify from 'dompurify';
import useTranslateHtmlElement from './use-translate-html-element';
// Our safe HTML rendering component
// From https://dev.to/jam3/how-to-prevent-xss-attacks-when-using-dangerouslysetinnerhtml-in-react-1464

function SafeHTMLComponent() {
  // title is dynamic HTML
  const title = response.from.backend.title;
  // sanitizer will sanitize the HTML
  const sanitizer = dompurify.sanitize;
  const safeTitle = sanitizer(title);
  const [ref] = useTranslateHtmlElement(safeTitle);
  return
  
  import React, { useEffect, useState } from 'react';
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
  const translateIfNodeRendered = node => {
    if (node) {
      translateI18nTokensInHtmlElement(i18n, node);
    }
  };
  useEffect(() => {
    translateIfNodeRendered(node);

    i18n.on('languageChanged', lng => {
      translateIfNodeRendered(node);
    });
    return () => {
      i18n.off('languageChanged', lng => {});
    };
  }, [html]);
  return [setRef];
};

export default useTranslateHtmlElement;

```




The example is self explanatory. 