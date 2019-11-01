import { validateUsername, validatePassword } from "utils/form/validators";

const loginFormValidator = values => {
  let errors = {};
  errors["username"] = validateUsername(values.username);
  errors["password"] = validatePassword(values.password);

  return errors;
};

export const loginFormWarnings = values => {
  const warnings = {};
  if (!values.username || (values.username && values.username.length < 10)) {
    warnings.username = "better pick a good one";
  }
  return warnings;
};

export default loginFormValidator;
