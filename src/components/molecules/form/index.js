import React from "react";
// import PropTypes from 'prop-types';
import { Field } from "redux-form";
import { TextInput } from "components/molecules";

// import ./style.scss
const renderField = ({
  input,
  label,
  placeholder,
  name,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <div>
      <input
        {...input}
        name={name}
        placeholder={placeholder}
        type={type}
        autoComplete="new-password"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderFieldType = {
  text: renderField,
  password: renderField
};
/**
 * Form
 * @param {FormProps} props
 */
const Form = ({ handleSubmit, inputs, onSubmitSuccess }) => {
  return (
    <form
      onSubmit={handleSubmit}
      onSubmitSuccess={onSubmitSuccess}
      autoComplete="new-password"
    >
      <input type="hidden" value="" />
      {inputs.map(input => {
        const { name, placeholder, type } = input;
        return (
          <div key={input.name}>
            <Field
              placeholder={placeholder}
              name={name}
              component={renderFieldType[type]}
              type={type}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

Form.defaultProps = {};

/**
 * FormProps
 * @typedef {Object} FormProps
 */
Form.propTypes = {};

export default Form;
