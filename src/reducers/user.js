import * as t from "../actions/user/login/types";

const userInitialState = {
  user: null,
  error: null
};

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case t.LOGIN_SUCCESS:
      return { error: null, user: action.payload };
    case t.LOGIN_FAIL:
      return { error: action.payload, user: null };
    default:
      return state;
  }
};

export default user;
