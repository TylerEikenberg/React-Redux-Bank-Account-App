import React from "react";
/**
 * we need to import useSelector
 * we need to import useDispatch because we need to dispatch an action
 */
import { useSelector, useDispatch } from "react-redux";

function DepositPage() {
  // get balance from state
  const balance = useSelector(state => state.balanceReducer.balance);
  // create dispatch using useDispatch()
  const dispatch = useDispatch();

  // we need to dispatch the action type and payload
  function onDepositHandle() {
    dispatch({ type: "DEPOSIT", payload: 10 });
  }
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance ${balance}</h1>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
}

export default DepositPage;
