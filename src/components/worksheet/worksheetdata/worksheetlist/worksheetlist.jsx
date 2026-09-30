import React, { useState } from "react";
import "./worksheetlist.css";

function WorksheetList() {
  const [openSections, setOpenSections] = useState({
    today: true,
    yesterday: true,
    thisWeek: false,
    thisMonth: false,
    older: false,
  });

  const [selectedWorksheet, setSelectedWorksheet] = useState(
    "Untitled Worksheet 06"
  );

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const worksheetSections = [
    {
      id: "today",
      title: "TODAY",
      count: 1,
      worksheets: ["Default Worksheet"],
    },
    {
      id: "yesterday",
      title: "YESTERDAY",
      count: 8,
      worksheets: [
        "Untitled Worksheet 04",
        "Untitled Worksheet 05",
        "Untitled Worksheet 06",
        "Untitled Worksheet 05",
        "Untitled Worksheet 03",
        "Untitled Worksheet 05",
        "Untitled Worksheet 03",
        "Untitled Worksheet 05",
      ],
    },
    {
      id: "thisWeek",
      title: "THIS WEEK",
      count: 1,
      worksheets: [],
    },
    {
      id: "thisMonth",
      title: "THIS MONTH",
      count: 5,
      worksheets: [],
    },
    {
      id: "older",
      title: "OLDER",
      count: 123,
      worksheets: [],
    },
  ];

  return (
    <div className="worksheet-list">

      {/* Heading */}
      <div className="worksheet-list-heading">
        WORKSHEET LIST
      </div>

      {/* Sections */}
      <div className="worksheet-sections">

        {worksheetSections.map((section) => (
          <div className="worksheet-section" key={section.id}>

            {/* Section Header */}
            <button
              className="worksheet-section-header"
              onClick={() => toggleSection(section.id)}
            >
              <div className="section-title">
                <span className="clock-icon">◷</span>
                <span>{section.title}</span>
              </div>

              <div className="section-right">
                <span className="section-count">
                  {section.count}
                </span>

                <span className="section-arrow">
                  {openSections[section.id] ? "⌃" : "⌄"}
                </span>
              </div>
            </button>

            {/* Worksheet Items */}
            {openSections[section.id] &&
              section.worksheets.length > 0 && (
                <div className="worksheet-items">

                  <div className="worksheet-connection-line"></div>

                  {section.worksheets.map((worksheet, index) => (
                    <button
                      key={`${worksheet}-${index}`}
                      className={`worksheet-item ${
                        selectedWorksheet === worksheet
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedWorksheet(worksheet)
                      }
                    >
                      {worksheet}
                    </button>
                  ))}

                </div>
              )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default WorksheetList;