import React from "react";

/**
 * To access our global store we need to import the hook useSelector
 * import useDispatch because we will be dispatching an action to apply for a loan
 */
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  // useSelector allows us to access our state from the store
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const dispatch = useDispatch();

  function applyLoanHandle() {
    dispatch({ type: "APPLY" });
  }

  /**
   * In order to use our loan button we will create another reducer.
   * In the store create a new file loanReducer.js
   */
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance: ${balance}</h1>
      <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
      <button onClick={applyLoanHandle} disabled={loan ? true : false}>
        {loan ? "Loan Applied" : "Apply for Loan"}
      </button>
    </div>
  );
}

export default HomePage;
