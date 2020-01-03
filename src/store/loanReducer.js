/**
 * - 1. Create initial state
 *
 * - 2. Create and export reducer
 */

const initialState = {
  loan: false,
  loading: false
};

/**
 * Reducer will take the action and the current state,
 * Based on the action it will modify the state
 */

function loanReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY":
      return { loan: true, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default loanReducer;
