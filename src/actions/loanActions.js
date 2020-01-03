/**
 * we're moving our actions from the depositPage into its own actions file
 */

export function apply() {
  return { type: "APPLY" };
}

export function applyAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(apply());
    }, 1000);
  };
}
