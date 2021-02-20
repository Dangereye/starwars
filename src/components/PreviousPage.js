import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import { BsCaretLeftFill } from "react-icons/bs";

const PreviousPage = () => {
  const history = useHistory();
  return (
    <div style={{ backgroundColor: "#f5f4f4" }}>
      <div className="container">
        <Button
          onClick={() => history.goBack()}
          iconStart={<BsCaretLeftFill />}
          text="Back"
          css="btn-back btn-small"
        />
      </div>
    </div>
  );
};

export default PreviousPage;
