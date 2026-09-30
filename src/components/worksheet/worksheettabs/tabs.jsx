import React from "react";
import "./tabs.css";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="worksheet-tabs">
      <div className="tabs-container">

        <button
          className={`tab-button ${
            activeTab === "worksheet" ? "active" : ""
          }`}
          onClick={() => setActiveTab("worksheet")}
        >
          Worksheet List
        </button>

        <button
          className={`tab-button1 ${
            activeTab === "campaign" ? "active" : ""
          }`}
          onClick={() => setActiveTab("campaign")}
        >
          All campaigns analytics
        </button>

      </div>
    </div>
  );
}

export default Tabs;