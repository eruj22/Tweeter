import React from "react";

function Button({ onClick, text, icon }) {
  return (
    <button className="button" onClick={onClick}>
      <img src={icon} alt="" />
      <p className="button__text">{text}</p>
    </button>
  );
}

export default Button;
