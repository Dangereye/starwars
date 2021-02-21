import React from "react";

const Message = ({ text, role }) => {
  return (
    <div className={`message ${role ? role : ""}`}>
      <div className="container">{text}</div>
    </div>
  );
};

export default Message;
