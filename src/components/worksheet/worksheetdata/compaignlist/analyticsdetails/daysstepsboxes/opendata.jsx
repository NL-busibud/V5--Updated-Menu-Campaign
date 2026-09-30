import React, { useState } from "react";
import "./opendata.css";

function OpenData({
    onWorksheetClick,
    onWorksheetNameChange,
}) {
    const [search, setSearch] = useState("");

    const openedData = [
        {
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "John",
            email: "John@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 15",
            sent: "124",
            username: "Doe",
            email: "Doe@gmail.com",
        },
        {
            id: "worksheet04-third",
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "John 1",
            email: "John@gmail.com",
        },
        {
            worksheet: "Sale campaign 01",
            sent: "124",
            username: "Doe",
            email: "Doe@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "John",
            email: "John@gmail.com",
        },
        {
            worksheet: "Sale campaign 01",
            sent: "124",
            username: "Doe",
            email: "Doe@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 15",
            sent: "124",
            username: "John 1",
            email: "John@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "Doe",
            email: "Doe@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 15",
            sent: "124",
            username: "John",
            email: "John@gmail.com",
        },
        {
            worksheet: "Sale Campaign 01",
            sent: "124",
            username: "Doe",
            email: "Doe@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "John 1",
            email: "John@gmail.com",
        },
        {
            id: "worksheet04-first",
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "John1",
            email: "John@gmail.com",
        },
        {
            worksheet: "Sale campaign 01",
            sent: "124",
            username: "John1 doe",
            email: "Doe@gmail.com",
        },
        {
            worksheet: "Untitled Worksheet 04",
            sent: "124",
            username: "John1John D",
            email: "John@gmail.com",
        },
    ];

    const filteredData = openedData.filter((item, index) => {
        if (index >= openedData.length - 3) {
            return search.toLowerCase() === "john1";
        }

        return `${item.worksheet} ${item.username} ${item.email}`
            .toLowerCase()
            .includes(search.toLowerCase());
    });

    return (
        <div className="open-data">

            <div className="opened-data-box">

                {/* Header */}
                <div className="opened-data-header">
                    <span>Opened</span>
                    <span>500</span>
                </div>

                {/* Search */}
                <div className="opened-search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search by name, email or campaign"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Data */}
                <div className="opened-data-list">

                    {filteredData.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="opened-data-item"
                            onClick={() => {
                                if (item.id === "worksheet04-third") {
                                    onWorksheetNameChange();
                                }

                                if (item.id === "worksheet04-first") {
                                    onWorksheetClick();
                                }
                            }}
                        >
                            <div className="opened-item-top">
                                <span
                                    className={`opened-campaign ${item.id === "worksheet04-third"
                                            ? "worksheet04-name-clickable"
                                            : item.id === "worksheet04-first"
                                                ? "worksheet04-clickable"
                                                : ""
                                        }`}
                                >
                                    {item.id === "worksheet04-third" ? (
                                        <>
                                            <span className="campaign-default">
                                                {item.worksheet}
                                            </span>

                                            <span className="campaign-hover">
                                                Untitled Worksheet 04
                                            </span>
                                        </>
                                    ) : (
                                        item.worksheet
                                    )}
                                </span>

                                <span className="opened-sent">
                                    Sent: {item.sent}
                                </span>
                            </div>

                            <div className="opened-user">
                                User name: <span>{item.username}</span>
                            </div>

                            <div className="opened-user">
                                Email: <span>{item.email}</span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default OpenData;