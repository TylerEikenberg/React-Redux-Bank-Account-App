/**
 * - 1. Create initial state
 *
 * - 2. Create and export reducer
 */

const initialState = {
  balance: 0,
  loading: false
};

/**
 * Reducer will take the action and the current state,
 * Based on the action it will modify the state
 */

function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      // this is returning a copy of the state with the payload added to it
      return { balance: state.balance + action.payload, loading: false };
    case "WITHDRAW":
      // this is returning a copy of the state with the payload subtracted from it
      return { balance: state.balance - action.payload, loading: false };
    case "LOADING":
      // this is returning a copy of the current state and setting loading to true
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default balanceReducer;

/**
 * Next, go to index.js
 */
