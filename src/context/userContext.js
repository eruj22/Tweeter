import axios from "axios";
import React, { useContext, useReducer } from "react";
import reducer from "../reducers/userReducer";
import { getUserData } from "../utils/helpers";
import { authHeader } from "../utils/auth-header";

const initialState = {};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = getUserData();

  const updateUser = (name, description) => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_USER}/${user._id}`,
      data: {
        name,
        description,
      },
      headers: authHeader(),
    })
      .then((res) => {
        dispatch({ type: "UPDATE_USER", payload: res.data.user });
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider value={{ ...state, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
