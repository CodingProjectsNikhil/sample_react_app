import {
    FETCH_CUSTOMER_DETAILS,
    SET_CUSTOMER_DETAILS,
    SET_MENU,
    FETCH_MENU
  } from "./types";
import apiActionCreater from "./RestApiActionCreater";
import { CUSTOMER,
  MENU,
  BASE_URL
 } from "./URLs";

export function fetchCustomerDetailsAction() {
    return apiActionCreater({
        label: FETCH_CUSTOMER_DETAILS,
        inputUrl: BASE_URL + CUSTOMER,
        method: "GET",
        onSuccess: setCustomerDetails,
        onFailure: error =>
          handleApiFailed(
            FETCH_CUSTOMER_DETAILS,
            error
          )
    });
  }

  export function fetchMenuAction(param) {
    return apiActionCreater({
        label: FETCH_MENU,
        inputUrl: BASE_URL + MENU,
        method: "GET",
        onSuccess: setMenu,
        inputParams : param,
        onFailure: error =>
          handleApiFailed(
            FETCH_MENU,
            error
          )
    });
  }
  
  function setCustomerDetails(data) {
    return {
      type: SET_CUSTOMER_DETAILS,
      payload: data
    };
  }
  function setMenu(data) {
    return {
      type: SET_MENU,
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