import React, { useEffect, useState } from "react";
import "./compaignpage.css";

import AnalyticsHeader from "../analyticsheader/analyticsheader";
import FilterBar from "../filterbar/filterbar";

import ReplyPercentage from "../analyticsdetails/replypercentage/replypercentage";
import AllTimeBox from "../analyticsdetails/alltimebox/alltimebox";
import DaysStepsBoxes from "../analyticsdetails/daysstepsboxes/daysstepsboxes";
import OpenData from "../analyticsdetails/daysstepsboxes/opendata";
import Worksheet04 from "../analyticsdetails/daysstepsboxes/worksheet04";

function CompaignPage({ onWorksheetNameChange }) {
  const [selectedFilter, setSelectedFilter] = useState("All time");
  const [showOpenedData, setShowOpenedData] = useState(false);
  const [selectedWorksheet, setSelectedWorksheet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const campaignCount =
    selectedFilter === "Last 30 days" ? 600 : 1200;

  const handleFilterChange = (filter) => {
    setFilterLoading(true);

    setTimeout(() => {
      setSelectedFilter(filter);
      setShowOpenedData(false);
      setFilterLoading(false);
    }, 1000);
  };


  if (loading) {
    return (
      <div className="compaign-page campaign-loading">
        <img src="/loading.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="compaign-page">

      {!selectedWorksheet && (
        <AnalyticsHeader
          campaignCount={campaignCount}
          showOpened={showOpenedData}
          onBack={() => {
            setShowOpenedData(false);
            setSelectedWorksheet(null);
          }}
        />
      )}

      {selectedWorksheet ? (
        <Worksheet04
          onBack={() => setSelectedWorksheet(null)}
        />
      ) : (
        <>
          {!showOpenedData && (
            <>
              <FilterBar
                selectedFilter={selectedFilter}
                setSelectedFilter={handleFilterChange}
              />

              {filterLoading ? (
                <div className="filter-loading">
                  <img src="/loading.gif" alt="Loading..." />
                </div>
              ) : (
                <div className="analytics-details">

                  <ReplyPercentage />

                  {selectedFilter === "All time" && (
                    <AllTimeBox />
                  )}

                  {selectedFilter === "Last 30 days" && (
                    <DaysStepsBoxes
                      onOpenData={() => setShowOpenedData(true)}
                    />
                  )}

                </div>
              )}
            </>
          )}

          {showOpenedData && (
            <OpenData
              onWorksheetClick={() =>
                setSelectedWorksheet("UNTITLED WORKSHEET 04")
              }
              onWorksheetNameChange={onWorksheetNameChange}
            />
          )}
        </>
      )}
    </div>
  );
}

export default CompaignPage;