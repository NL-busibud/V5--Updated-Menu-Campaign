import React from "react";
import "./daysstepsboxes.css";
import { ArrowRight } from "lucide-react";

function DaysStepsBoxes({ onOpenData }) {
  const analyticsData = [
    {
      title: "Opened",
      value: "500",
      view: true,
      action: onOpenData,
    },
    {
      title: "Open percentage",
      value: "68%",
      view: false,
    },
    {
      title: "Sent",
      value: "200",
      view: true,
    },
    {
      title: "Replied",
      value: "250",
      view: true,
    },
    {
      title: "Bounced",
      value: "250",
      view: true,
    },
    {
      title: "Website visited",
      value: "200",
      view: true,
    },
    {
      title: "Unsubscribed",
      value: "250",
      view: true,
    },
  ];

  return (
    <div className="days-steps">
      {analyticsData.map((item) => (
        <div className="days-step-box" key={item.title}>

          <div className="days-step-title">
            {item.title}
          </div>

          <div className="days-step-bottom">

            <span className="days-step-value">
              {item.value}
            </span>

            {item.view && (
              <button
                className="days-view-button"
                onClick={item.action}
              >
                View
                <ArrowRight size={11} strokeWidth={2} />
              </button>
            )}

          </div>

        </div>
      ))}
    </div>
  );
}

export default DaysStepsBoxes;