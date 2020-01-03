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

export function withdraw() {
  return { type: "WITHDRAW", payload: 10 };
}

// depositAsync returns another function with dspatch as an arg
// call deposit inside another dispatch

// redux thunk
// before dispatching an action you catch the action and do something with it, then once something is succesful you can dispatch the action
export function depositAsync() {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 1000);
  };
}

export function withdrawAsync() {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(withdraw());
    }, 1000);
  };
}
