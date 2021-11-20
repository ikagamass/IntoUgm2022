import { combineReducers } from "redux";
import testingReducer from "./testing/testingReducer";

const rootReducer = combineReducers({
  testing: testingReducer,
});

export default rootReducer;
