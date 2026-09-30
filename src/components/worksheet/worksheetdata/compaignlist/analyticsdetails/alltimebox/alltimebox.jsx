import React from "react";
import "./alltimebox.css";

function AllTimeBox() {
  const analyticsData = [
    {
      title: "Open percentage",
      value: "68%",
    },
    {
      title: "Opened",
      value: "500",
    },
    {
      title: "Unsubscribed",
      value: "250",
    },
    {
      title: "Bounced",
      value: "200",
    },
  ];

  return (
    <div className="all-time-box">
      {analyticsData.map((item) => (
        <div className="analytics-box" key={item.title}>
          <div className="analytics-box-title">
            {item.title}
          </div>

          <div className="analytics-box-value">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTimeBox;