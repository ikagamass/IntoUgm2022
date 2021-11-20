import { BUY_TESTING } from "./testingAction";

const initialState = {
  numOftesting: 10,
};

const testingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_TESTING:
      return {
        ...state,
        numOftesting: state.numOftesting - 1,
      };

    default:
      return state;
  }
};

export default testingReducer;
