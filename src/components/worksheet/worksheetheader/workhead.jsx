import React from "react";
import "./workhead.css";

import { Plus, Funnel, Search } from "lucide-react";

function WorkHead() {
  return (
    <div className="worksheet-header">

      {/* Worksheet Title */}
      <h2 className="worksheet-title">
        Worksheet
      </h2>

      {/* Header Actions */}
      <div className="worksheet-header-actions">

        {/* Add */}
        <button
          className="header-action add-action"
          data-tooltip="+Create new worksheet"
        >
          <Plus size={18} strokeWidth={2} />
        </button>

        {/* Filter */}
        <button
          className="header-action filter-action"
          data-tooltip="Filter"
        >
          <Funnel size={16} strokeWidth={2} />
        </button>

        {/* Search */}
        <button
          className="header-action search-action"
          data-tooltip="Search"
        >
          <Search size={16} strokeWidth={2} />
        </button>

      </div>

    </div>
  );
}

export default WorkHead;