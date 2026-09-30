import React from "react";
import "./rightsecmain.css";

import RightHead from "../Rightsectionheader/righthead";
import RightMainContent from "../Rightmaincontent/rightmaincontent";

function RightSecMain({ worksheetName, refreshContent }) {
  return (
    <div className="right-sec-main">
      <RightHead worksheetName={worksheetName} />

       <RightMainContent refreshContent={refreshContent} />
    </div>
  );
}

export default RightSecMain;