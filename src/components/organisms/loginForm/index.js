import Login from "./ui-component";
import { reduxForm } from "redux-form";
import {
  default as loginFormValidator,
  loginFormWarnings
} from "utils/form/validators/login-form.validator.js";
import { loginUser } from "actions/user/login";

export default reduxForm({
  // a unique name for the form
  form: "login",
  validate: loginFormValidator,
  warn: loginFormWarnings,
  onSubmitSuccess: async (a, dispatch, form) => {
    const {
      values: { username, password }
    } = form;

    await dispatch(loginUser({ username, password }));
  }
})(Login);
