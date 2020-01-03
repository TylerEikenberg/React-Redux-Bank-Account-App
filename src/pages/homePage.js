import React from "react";

/**
 * To access our global store we need to import the hook useSelector
 */
import { useSelector } from "react-redux";

function homePage() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Home Page</h1>
    </div>
  );
}

export default homePage;
