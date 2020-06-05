import {
    FETCH_STATE_LIST,
    SET_STATE_LIST,
    FETCH_DISTRICT_LIST,
    SET_DISTRICT_LIST
  } from "./types";
  import { STATE,
    DISTRICT,
    BASE_URL
   } from "./URLs";
  
import apiActionCreater from "./RestApiActionCreater";

export function fetchStates() {
    return apiActionCreater({
        label: FETCH_STATE_LIST,
        inputUrl: BASE_URL + STATE,
        method: "GET",
        onSuccess: setStateList,
        onFailure: error =>
          handleApiFailed(
            FETCH_STATE_LIST,
            error
          )
    });
  }

  export function fetchDistricts(param) {
    return apiActionCreater({
        label: FETCH_DISTRICT_LIST,
        inputUrl: BASE_URL + DISTRICT + param,
        method: "GET",
        onSuccess: setDistrictList,
        inputParams : null,
        onFailure: error =>
          handleApiFailed(
            FETCH_DISTRICT_LIST,
            error
          )
    });
  }
  
  function setStateList(data) {
    return {
      type: SET_STATE_LIST,
      payload: data
    };
  }
  function setDistrictList(data) {
    return {
      type: SET_DISTRICT_LIST,
      payload: data
    };
  }
  function handleApiFailed(apiName, error) {
    console.log("Error occurred in fetching the Accuracy Tracking details!!");
    return {
      type: apiName,
      payload: {
        errorDetails: error
      }
    };
  }