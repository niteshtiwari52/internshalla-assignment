import axios from "axios";
import { DEMO, RESET } from "./demo.type";
const API_BASE_URL = "http://localhost:4000";

export const demoAction = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://www.themealdb.com/api/json/v1/1/categories.php`,
    });
    // console.log(response);
    return dispatch({ type: DEMO, payload: { ...response.data } });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const restDemoData = () => async (dispatch) => {
  try {
    return dispatch({ type: RESET, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
