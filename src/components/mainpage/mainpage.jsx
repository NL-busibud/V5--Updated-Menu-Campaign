import React, { useState } from "react";
import "./mainpage.css";

import Sidebar from "../leftsidebar/sidebar";
import WorksheetPage from "../worksheet/worksheetpage/worksheetpage";
import RightSecPage from "../Rightsection/Rightsectionmain/rightsecmain";

function MainPage() {
  const [worksheetName, setWorksheetName] = useState(
    "UNTITLED WORKSHEET 06"
  );

  const [refreshContent, setRefreshContent] = useState(0);

  const handleWorksheetNameChange = () => {
    setWorksheetName("");
    setTimeout(() => {
      setWorksheetName("Untitled Worksheet 04");
    }, 1000);

      setRefreshContent((prev) => prev + 1);

    setShowRightContent(false);

    setTimeout(() => {
      setShowRightContent(true);
    }, 1000);
  };

  return (
    <div className="main-page">
      <Sidebar />

      <WorksheetPage
        onWorksheetNameChange={handleWorksheetNameChange}
      />

      <RightSecPage
        worksheetName={worksheetName}
        refreshContent={refreshContent}
      />
    </div>
  );
}

export default MainPage;