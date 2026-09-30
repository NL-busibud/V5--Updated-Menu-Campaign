import React, { useState } from "react";
import "./rightmaincontent.css";

import MainContentHead from "./maincontentheader/maincontenthead";
import Data from "./maincontentdata/data.jsx";
import QuickAccess from "./QuickAccess/QuickAccess";

function RightMainContent({ refreshContent }) {
  const [showComponents, setShowComponents] = useState(true);

  React.useEffect(() => {
    if (refreshContent === 0) return;

    setShowComponents(false);

    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [refreshContent]);

  return (
    <div className="right-main-content">
      {!showComponents ? (
        <div className="content-loader">
          <img src="/loading.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          <MainContentHead />
          <Data />
          <QuickAccess />
        </>
      )}
    </div>
  );
}

export default RightMainContent;