import React from "react";
// import PropTypes from 'prop-types';

// import ./style.scss

/**
 * TextInput
 * @param {TextInputProps} props
 */
const TextInput = ({
  input,
  label,
  placeholder,
  name,
  type,
  meta: { touched, error, warning }
}) => {
  console.log("props", props);
  return (
    <div className={"TextInput"}>
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
};

TextInput.defaultProps = {};

/**
 * TextInputProps
 * @typedef {Object} TextInputProps
 */
TextInput.propTypes = {};

export default TextInput;
