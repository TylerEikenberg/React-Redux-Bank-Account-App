import React from "react";
/**
 * we need to import useSelector
 * we need to import useDispatch because we need to dispatch an action
 */
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "./../actions/balanceActions";

function WithdrawPage() {
  // get balance from state
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const loading = useSelector(state => state.balanceReducer.loading);
  // create dispatch using useDispatch()
  const dispatch = useDispatch();

  // we need to dispatch the action type and payload
  function onWithdrawHandle() {
    dispatch(balanceActions.withdrawAsync());
  }
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Balance: ${balance}</h1>}
      <button onClick={onWithdrawHandle}>Withdraw</button>
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
    </div>
  );
}

export default WithdrawPage;
