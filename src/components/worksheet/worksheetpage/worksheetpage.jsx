import React, { useState } from "react";
import "./worksheetpage.css";

import WorkHead from "../worksheetheader/workhead";
import Tabs from "../worksheettabs/tabs";
import WorksheetList from "../worksheetdata/worksheetlist/worksheetlist";
import CompaignPage from "../worksheetdata/compaignlist/compaignpage/compaignpage";

function WorksheetPage({ onWorksheetNameChange }) {
  const [activeTab, setActiveTab] = useState("worksheet");

  return (
    <div className="worksheet-page">
      <WorkHead />

      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "worksheet" && <WorksheetList />}

      {activeTab === "campaign" && <CompaignPage onWorksheetNameChange={onWorksheetNameChange} />}
    </div>
  );
}

export default WorksheetPage;