import React from "react";
import { Form } from "components/molecules";
import LOGIN_INPUTS from "./inputs";

let LoginForm = props => {
  const { handleSubmit } = props;

  return <Form inputs={LOGIN_INPUTS} handleSubmit={handleSubmit} />;
};

LoginForm.defaultProps = {};

/**
 * LoginFormProps
 * @typedef {Object} LoginFormProps
 */
LoginForm.propTypes = {};

export default LoginForm;
