import React from "react";
/**
 * we need to import useSelector
 * we need to import useDispatch because we need to dispatch an action
 */
import { useSelector, useDispatch } from "react-redux";

function WithdrawPage() {
  // get balance from state
  const balance = useSelector(state => state.balance);
  // create dispatch using useDispatch()
  const dispatch = useDispatch();

  // we need to dispatch the action type and payload
  function onWithdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance ${balance}</h1>
      <button onClick={onWithdrawHandle}>Withdraw</button>
    </div>
  );
}

export default WithdrawPage;
