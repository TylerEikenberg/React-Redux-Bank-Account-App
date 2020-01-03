import React from "react";

/**
 * To access our global store we need to import the hook useSelector
 */
import { useSelector } from "react-redux";

function HomePage() {
  // useSelector allows us to access our state from the store
  const balance = useSelector(state => state.balance);
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance: {balance}</h1>
    </div>
  );
}

export default HomePage;
