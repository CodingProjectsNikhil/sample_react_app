import {
    SET_STATE_LIST,
    SET_DISTRICT_LIST
  } from "../_actions/types";

import{
    REST_API_START,
    REST_API_END
} from "../_actions/RestApiTypes"

  const initialState = {
    apiLoadingStatus: 0, //No API is Loading
    states: [],
    district: [],
    errorDetails: null,
    isLoadingData: false
  };
  
  export default function (state = initialState, action) {
  
    switch (action.type) {
      case SET_STATE_LIST:
        return {
          ...state,
          states: action.payload
        };
        break;
        case SET_DISTRICT_LIST:
        return {
          ...state,
          district: action.payload
        };
        break;
        case REST_API_START:
        return {
          ...state,
          isLoadingData: true
        };
      break;
    case REST_API_END:
        return {
          ...state,
          isLoadingData: false
        };
      break;
      default:
        return state;
  
    }
  }

  export function getStates(state) {
    return state.surveyRequest.states
  }
  export function getDistrict(state) {
    return state.surveyRequest.district
  }