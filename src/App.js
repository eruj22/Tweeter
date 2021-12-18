import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/hero";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Explore from "./pages/explore";
import Bookmarks from "./pages/bookmarks";
import Navigation from "./components/Navigation";
import Profile from "./pages/user-profile";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/customTheme";
import "./style/main.scss";
import Home from "./pages/home";
import { Navigate } from "react-router";
import Tweets from "./pages/user-profile/Tweets";
import TweetsReplies from "./pages/user-profile/TweetsReplies";
import Likes from "./pages/user-profile/Likes";

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
                <Navigation />
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Navigation />
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <PrivateRoute>
                <Navigation />
                <Bookmarks />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <Navigation />
                <Profile />
              </PrivateRoute>
            }
          >
            <Route index element={<Tweets />} />
            <Route path="replies" element={<TweetsReplies />} />
            <Route path="likes" element={<Likes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
