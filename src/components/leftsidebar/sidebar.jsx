import React from "react";
import "./sidebar.css";
import logoGif from "../../assets/image/saufter-DdmW4F6G.gif";

import {
  Grid3X3,
} from "lucide-react";

import { IoVolumeMedium } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return (
    <aside className="left-sidebar">

      {/* Top Logo */}
      <div className="sidebar-logo">
        <img src={logoGif} alt="Logo" />
      </div>

      {/* Navigation Icons */}
      <div className="sidebar-navigation">

        <button className="sidebar-icon active">
          <Grid3X3 size={16} strokeWidth={2} />
        </button>

        <button className="sidebar-icon volume">
          <IoVolumeMedium size={24} strokeWidth={2} />
        </button>

        <button className="sidebar-icon">
          <IoMdSettings size={23} strokeWidth={2} />
        </button>

      </div>

      <div className="profile-section">
        <div className="profile-divider"></div>

        <div className="profile-avatar">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
          />
          <span className="online-dot"></span>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;