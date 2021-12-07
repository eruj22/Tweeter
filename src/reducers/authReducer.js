const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "REGISTER_SUCCESS") {
    return {
      ...state,
      registerFailure: false,
      user: payload,
    };
  }

  if (type === "REGISTER_FAILURE") {
    return {
      ...state,
      registerFailure: true,
      registerErrorMessage: payload,
    };
  }

  if (type === "LOGIN_SUCCESS") {
    return {
      ...state,
      loginFailure: false,
      user: payload,
    };
  }

  if (type === "LOGIN_FAILURE") {
    return {
      ...state,
      loginFailure: true,
      loginErrorMessage: payload,
    };
  }

  if (type === "LOGOUT") {
    return {
      ...state,
      registerErrorMessage: "",
      loginErrorMessage: "",
      loginFailure: true,
      registerFailure: true,
    };
  }

  return { ...state };
};

export default reducer;
