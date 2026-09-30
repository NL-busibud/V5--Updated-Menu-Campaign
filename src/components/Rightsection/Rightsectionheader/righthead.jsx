import React from "react";
import "./righthead.css";
import { IoSparklesSharp } from "react-icons/io5";

function RightHead({ worksheetName }) {
  return (
    <div className="right-head">

      <div className="right-head-left">
        <span className="flow-overview">
          FLOW OVERVIEW
        </span>

        <span className="right-head-arrow">
          ›
        </span>

        <span className="worksheet-name">
          {worksheetName}
        </span>
      </div>

      <div className="available-credits">
        <IoSparklesSharp size={15} />
        Available Credits 78
      </div>

    </div>
  );
}

export default RightHead;