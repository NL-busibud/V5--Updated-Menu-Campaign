import React from "react";
import "./analyticsheader.css";

function AnalyticsHeader({
  campaignCount,
  showOpened,
  onBack,
}) {
  return (
    <div
      className="analytics-header"
      onClick={onBack}
      style={{ cursor: "pointer" }}
    >
      <h2>
        ALL CAMPAIGNS ANALYTICS ({campaignCount})

        {showOpened && (
          <>
            <span className="analytics-breadcrumb">›</span>
            <span className="opened-breadcrumb">OPENED</span>
          </>
        )}
      </h2>

      {!showOpened && (
        <p>Combined performance across all campaigns</p>
      )}
    </div>
  );
}

export default AnalyticsHeader;