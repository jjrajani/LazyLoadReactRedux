export const validateUsername = username => {
  if (!username) {
    return "Required";
  } else if (username.length < 8) {
    return "Must be at least 8 characters";
  }
};

export const validatePassword = password => {
  if (!password) {
    return "Required";
  } else if (password.length < 10) {
    return "Must be 10 characters or more";
  } else if (!/\d/.test(password)) {
    return "Must contain at least 1 number";
  }
  // else if (!/[!@#$%^&*]/.test(password)) {
  //   return "Must contain at least 1 special character";
  // }
};
