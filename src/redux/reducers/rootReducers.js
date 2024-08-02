import { combineReducers } from "redux";

// reducers or storage units
import demo from "./demo/demo.reducer";

const rootReducer = combineReducers({
  demo,
});

export default rootReducer;
