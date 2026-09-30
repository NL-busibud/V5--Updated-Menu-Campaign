import React from "react";
import "./QuickAccess.css";
import { BsFileEarmarkText } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";

function QuickAccess() {
  return (
    <div className="quick-access">

      <div className="quick-access-title">
        Quick access:
      </div>

      <button className="quick-access-button use-cases">
        <BsFileEarmarkText size={20} style={{ marginRight: '8px' }}/>
        Use Cases
      </button>

      <button className="quick-access-button send-communication">
        <MdOutlineMarkEmailUnread size={20}/>
        Send Communication
      </button>

      <button className="quick-access-button enrichment">
        <IoSparklesSharp size={20} style={{ marginRight: '8px' }} />
        Enrichment
      </button>

      <button className="quick-collapse">
        <FaChevronUp  size={20}/>
      </button>

      <div className="quick-sparkle sparkle-left">
        ✦
      </div>

      <div className="quick-sparkle sparkle-right">
        ✦
      </div>

    </div>
  );
}

export default QuickAccess;