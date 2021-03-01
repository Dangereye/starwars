import React from "react";

const CommaSeparatedNumber = ({ number, credits, unit }) => {
  return (
    <>
      {number === "indefinite" ? (
        <span className="value">{number}</span>
      ) : number === "0" ? (
        <span className="value">unknown</span>
      ) : number === "unknown" ? (
        <span className="value">unknown</span>
      ) : (
        <span className="value">
          {parseInt(number).toLocaleString("en")}
          {credits && "c"}
          {unit && unit}
        </span>
      )}
    </>
  );
};

export default CommaSeparatedNumber;
