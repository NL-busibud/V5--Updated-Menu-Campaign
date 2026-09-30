import React, { useState } from "react";
import "./maincontenthead.css";
import { FaSortAmountDown } from "react-icons/fa";

function MainContentHead() {
    const [showSearch, setShowSearch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showAction, setShowAction] = useState(false);

    const handleSearchClick = () => {
        setShowSearch((prev) => !prev);
        setShowFilter(false);
        setShowAction(false);
    };

    const handleFilterClick = () => {
        setShowFilter((prev) => !prev);
        setShowSearch(false);
        setShowAction(false);
    };

    const handleActionClick = () => {
        setShowAction((prev) => !prev);
        setShowSearch(false);
        setShowFilter(false);
    };

    return (
        <div className="main-content-head">

            <div className="main-content-left">
                <button className="lead-settings">
                    Lead generation settings
                </button>

                <div className="table-info">
                    <span>Columns: 0/0</span>
                    <span>Rows: 0/0</span>
                </div>
            </div>

            <div className="main-content-actions">

                {/* SEARCH */}
                <div className="action-wrapper search-wrapper">
                    {showSearch ? (
                        <div className="search-expanded">
                            <span>⌕</span>

                            <input
                                type="text"
                                placeholder="Search"
                                autoFocus
                            />

                            <button
                                className="search-close"
                                onClick={handleSearchClick}
                            >
                                ×
                            </button>
                        </div>
                    ) : (
                        <button
                            className="icon-button search-button"
                            onClick={handleSearchClick}
                        >
                            ⌕
                            <span className="tooltip">Search</span>
                        </button>
                    )}
                </div>

                {/* FILTER */}
                <div className="action-wrapper">
                    <button
                        className={`icon-button filter-button ${showFilter ? "active" : ""
                            }`}
                        onClick={handleFilterClick}
                    >
                        {/* ☷ */}
                        <FaSortAmountDown size={14} />
                        <span className="tooltip">Sort by</span>
                    </button>

                    {showFilter && (
                        <div className="filter-dropdown1">
                            <select defaultValue="">
                                <option value="" disabled>
                                    Select field
                                </option>
                            </select>

                            <select defaultValue="">
                                <option value="" disabled>
                                    Select field
                                </option>
                            </select>
                        </div>
                    )}
                </div>

                {/* ACTION */}
                <div className="action-wrapper">
                    <button
                        className={`action-button ${showAction ? "active" : ""
                            }`}
                        onClick={handleActionClick}
                    >
                        Action <span>▼</span>
                    </button>

                    {showAction && (
                        <div className="action-dropdown">

                            <div className="action-option add-row-option">
                                <span className="normal-option">
                                    Add row
                                </span>

                                <span className="hover-option delete-campaign">
                                    Delete campaign
                                </span>
                            </div>

                            <div className="action-option pause-option">
                                <span className="normal-option">
                                    Import csv
                                </span>

                                <span className="hover-option">
                                    Pause campaign
                                </span>
                            </div>

                            <div className="action-option pause-option">
                                <span className="normal-option">
                                    Export csv
                                </span>

                                <span className="hover-option">
                                    Pause campaign
                                </span>
                            </div>

                        </div>
                    )}
                </div>

                <button className="save-button">
                    Save use case
                </button>

            </div>

        </div>
    );
}

export default MainContentHead;