import React from "react";
import "./worksheet04.css";

function Worksheet04({ onBack }) {
  const conversationData = [
    {
      username: "John",
      email: "John@gmail.com",
    },
    {
      username: "John1",
      email: "Johndoe@gmail.com",
    },
    {
      username: "user name",
      email: "Username@gmail.com",
    },
    {
      username: "Doe",
      email: "Doe@gmail.com",
    },
    {
      username: "John",
      email: "John@gmail.com",
    },
    {
      username: "John1",
      email: "Johndoe@gmail.com",
    },
    {
      username: "user name",
      email: "Username@gmail.com",
    },
  ];

  return (
    <div className="worksheet-detail">

      {/* Detail Header */}
      <div className="worksheet-detail-header">
        <button
          className="worksheet-back-button"
          onClick={onBack}
        >
          <span>‹</span>
          Back
        </button>

        <div className="worksheet-detail-title">
          UNTITLED WORKSHEET 04
        </div>
      </div>

         {/* Opened Header */}
        <div className="worksheet-opened-header">
          <span>Opened</span>
          <span>17</span>
        </div>

        {/* Conversation Data */}
        <div className="conversation-list">
          {conversationData.map((item, index) => (
            <div className="conversation-item" key={index}>

              <div className="conversation-info">
                User name:{" "}
                <span>{item.username}</span>
              </div>

              <div className="conversation-info">
                Email:{" "}
                <span>{item.email}</span>
              </div>

              <button className="conversation-button">
                View conversation
              </button>

            </div>
          ))}
        </div>

    </div>
  );
}

export default Worksheet04;