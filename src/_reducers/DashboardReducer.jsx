import {
    SET_CUSTOMER_DETAILS,
    SET_MENU
  } from "../_actions/types";

import{
    REST_API_START,
    REST_API_END
} from "../_actions/RestApiTypes"

  const initialState = {
    apiLoadingStatus: 0, //No API is Loading
    customer: [],
    menu: [],
    errorDetails: null
  };
  
  export default function (state = initialState, action) {
  
    switch (action.type) {
      case SET_CUSTOMER_DETAILS:
        return {
          ...state,
          customer: action.payload
        };
        break;
        case SET_MENU:
        return {
          ...state,
          menu: action.payload
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

  export function getCustomer(state) {
    return state.dashboard.customer
  }
  export function getMenu(state) {
    return state.dashboard.menu
  }