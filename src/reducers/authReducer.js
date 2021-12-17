const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "REGISTER_SUCCESS") {
    localStorage.setItem("user", JSON.stringify(payload));

    return {
      ...state,
      registerFailure: false,
      user: payload,
      registerErrorMessage: "",
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
    localStorage.setItem("user", JSON.stringify(payload));

    return {
      ...state,
      loginFailure: false,
      user: payload,
      loginErrorMessage: "",
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
      loginFailure: true,
      registerFailure: true,
    };
  }

  return { ...state };
};

export default reducer;
