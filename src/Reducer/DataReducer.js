export const ActionTypes = {
  INITIAL_SET: "INITIAL_SET",
};
export const initialState = {};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET: {
      result = {
        ...state,
        snacks: action.payload.snacks,
      };
      break;
    }
  }
  return result;
}
