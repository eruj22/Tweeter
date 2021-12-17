import React from "react";
import Button from "@mui/material/Button";

function ButtonElement({ icon, color = "#222", text, onClick }) {
  return (
    <Button
      className="button"
      variant="text"
      onClick={onClick}
      style={{ color }}
    >
      {icon}
      {text}
    </Button>
  );
}

export default ButtonElement;
