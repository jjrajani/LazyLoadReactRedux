import React from "react";
import { LoginForm } from "components/organisms";

class LoginPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default LoginPage;
