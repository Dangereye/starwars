import React from "react";

const DetailsGroup = ({ name, value, conditional }) => {
  return (
    <div className="details-group">
      <span className="key">{name}</span>
      <span className="value">
        {value}
        {conditional}
      </span>
    </div>
  );
};

export default DetailsGroup;
