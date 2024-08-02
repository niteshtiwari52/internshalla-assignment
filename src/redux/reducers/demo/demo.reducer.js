// type
import { DEMO, RESET } from "./demo.type";

// initial State
const initialState = {
  demoData: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMO:
      return {
        ...state,
        ...action.payload,
      };

    case RESET:
      return {};

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
