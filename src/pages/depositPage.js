import React from "react";
/**
 * we need to import useSelector
 * we need to import useDispatch because we need to dispatch an action
 */
import { useSelector, useDispatch } from "react-redux";

// import actions
import * as balanceActions from "./../actions/balanceActions";

function DepositPage() {
  // get balance from state
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const loading = useSelector(state => state.balanceReducer.loading);
  // create dispatch using useDispatch()
  const dispatch = useDispatch();

  // we need to dispatch the depositAsync action we imported from our balanceActions
  function onDepositHandle() {
    dispatch(balanceActions.depositAsync());
  }
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Balance: ${balance}</h1>}

      <button onClick={onDepositHandle}>Deposit</button>
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
    </div>
  );
}

export default DepositPage;
