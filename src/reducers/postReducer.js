const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "GET_POSTS") {
    return { ...state, posts: payload };
  }

  return { ...state };
};

export default reducer;
