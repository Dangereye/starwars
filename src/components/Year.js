import React from "react";

const Year = ({ date }) => {
  const y = new Date(date);
  return <span>{y.getFullYear()}</span>;
};

export default Year;
