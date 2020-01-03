/**
 * we're moving our actions from the depositPage into its own actions file
 */

export function loading() {
  return {
    type: "LOADING"
  };
}

export function deposit() {
  return { type: "DEPOSIT", payload: 10 };
}

// depositAsync returns another function with dspatch as an arg
// call deposit inside another dispatch
export function depositAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(deposit());
    }, 1000);
  };
}
