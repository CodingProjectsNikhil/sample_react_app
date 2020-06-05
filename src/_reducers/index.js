import { combineReducers } from "redux";
import filtefirstrReducer from "./firstReducer";
import AppReducer from "./AppReducer";
import DashboardReducer from "./DashboardReducer";
import SurveyRequestFormReducer from "./SurveyRequestFormReducer";

export default combineReducers({
  dashboard: DashboardReducer,
  surveyRequest: SurveyRequestFormReducer
});
