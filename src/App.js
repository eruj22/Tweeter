import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./hero";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Explore from "./explore";
import Bookmarks from "./bookmarks";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/customTheme";
import "./style/main.scss";
import Home from "./home";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");

  return auth ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <PrivateRoute>
                <Bookmarks />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
