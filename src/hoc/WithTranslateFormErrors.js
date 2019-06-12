import PropTypes from 'prop-types';
import React from 'react';

import useTranslateFormErrors from '../hooks/use-translate-form-errors';

const WithTranslateFormErrors = ({ form,  children }) => {
  const {errors, touched, setFieldTouched} = form;
  useTranslateFormErrors(errors, touched, setFieldTouched);
  return <>{children}</>;
};

WithTranslateFormErrors.propTypes = {
  form: PropTypes.object
};

export default WithTranslateFormErrors;
