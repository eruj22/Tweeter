const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "UPDATE_USER") {
    localStorage.setItem("user", JSON.stringify(payload));

    return { ...state, user: payload };
  }

  return { ...state };
};

export default reducer;
