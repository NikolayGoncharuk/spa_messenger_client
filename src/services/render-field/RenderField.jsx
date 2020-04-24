import React from 'react';
import { Input, Checkbox, FormHelperText } from '@material-ui/core';

export const renderInput = (props) => {
  debugger
  const { input, meta, helperText, ...other } = props;
  const hasError = meta.touched && meta.error;
  return (
    <React.Fragment>
      <Input
        {...input}
        {...other}
        error={hasError ? true : false}
      />
      <FormHelperText>{hasError ? meta.error : helperText}</FormHelperText>
    </React.Fragment>
  );
};

export const renderCheckbox = (props) => {
  const { input, meta, ...other } = props;
  return (
    <Checkbox
      {...input}
      {...other}
    />
  );
};