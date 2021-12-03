import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/customTheme";
import "./style/main.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
