import React from "react";
import { Link } from "react-router-dom";

function LinkElement({ to, icon, style, children }) {
  return (
    <Link className="link" to={to} style={style}>
      {icon}
      <p className="link__text">{children}</p>
    </Link>
  );
}

export default LinkElement;
