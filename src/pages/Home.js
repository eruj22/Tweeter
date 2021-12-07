import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

function Home() {
  const { logout } = useAuthContext();

  return (
    <div>
      <h1>home</h1>
      <Link to="/" onClick={logout}>
        logout
      </Link>
    </div>
  );
}

export default Home;
