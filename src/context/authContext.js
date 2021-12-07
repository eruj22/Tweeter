import React, { useContext, useReducer } from "react";
import reducer from "../reducers/authReducer";
import axios from "axios";

const initialState = {
  loginFailure: true,
  loginErrorMessage: "",
  registerErrorMessage: "",
  registerFailure: true,
  user: [],
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (user) => {
    await axios
      .post("http://localhost:5000/api/v1/auth/login", {
        ...user,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.msg });
      });
  };

  const register = async (user) => {
    axios
      .post("http://localhost:5000/api/v1/auth/register", {
        ...user,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.user });
      })
      .catch((error) => {
        dispatch({
          type: "REGISTER_FAILURE",
          payload: error.response.data.msg,
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
