import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { PostProvider } from "./context/postContext";
import { UserProvider } from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
