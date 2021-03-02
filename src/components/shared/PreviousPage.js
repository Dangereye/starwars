import React from "react";
import { useHistory } from "react-router-dom";
import { BsCaretLeftFill } from "react-icons/bs";

const PreviousPage = () => {
  const history = useHistory();
  return (
    <div className="previous-page">
      <div className="container">
        <button className=" btn-back" onClick={() => history.goBack()}>
          <BsCaretLeftFill />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default PreviousPage;
