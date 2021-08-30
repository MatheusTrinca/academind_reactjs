import React from 'react';
import { ErrorMessage, useField } from 'formik';

function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  //console.log(field, meta, props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default TextInput;
