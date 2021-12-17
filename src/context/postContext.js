import axios from "axios";
import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/postReducer";
import { authHeader } from "../utils/auth-header";

const initialState = {
  posts: [],
};

const PostContext = React.createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [againFetchPosts, setAgainFetchPosts] = useState(false);

  const createPost = (content) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_API_POST,
      data: {
        ...content,
      },
      headers: authHeader(),
    })
      .then((res) => {
        setAgainFetchPosts(!againFetchPosts);
      })
      .catch((error) => console.log(error));
  };

  const getPosts = () => {
    axios({
      method: "get",
      url: process.env.REACT_APP_API_POST,
      headers: authHeader(),
    })
      .then((res) => {
        dispatch({ type: "GET_POSTS", payload: res.data.posts });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPosts();
  }, [againFetchPosts]);

  return (
    <PostContext.Provider value={{ ...state, createPost, getPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
