import PropTypes from 'prop-types';
import React from 'react';

import useTranslateFormErrors from '../hooks/use-translate-form-errors';

const WithTranslateFormErrors = ({ form, children }) => {
  const { errors, touched, setFieldTouched } = form;

  useTranslateFormErrors(errors, touched, setFieldTouched);

  return <>{children}</>;
};

WithTranslateFormErrors.propTypes = {
  children: PropTypes.node,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    setFieldTouched: PropTypes.func.isRequired
  }).isRequired
};

export default WithTranslateFormErrors;
