import React from "react";
import { Link } from "react-router-dom";

const Button = ({ iconStart, iconEnd, text, css, path }) => {
  return (
    <Link to={path} className={`btn ${css ? css : ""}`}>
      {iconStart ? iconStart : null}
      <span>{text}</span>
      {iconEnd ? iconEnd : null}
    </Link>
  );
};

export default Button;
