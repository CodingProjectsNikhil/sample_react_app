import {
  REST_API_START,
  REST_API_END,
  REST_API_ACCESS_DENIED,
  REST_API_ERROR
} from "./RestApiTypes";

export const apiStart = (label) => ({
  type: REST_API_START ,
  payload: label
});

export const apiEnd = (label) => ({
  type: REST_API_END ,
  payload: label
});

export const accessDenied = (url) => ({
  type: REST_API_ACCESS_DENIED ,
  payload: {
    url
  }
});

export const apiError = (error) => ({
  type: REST_API_ERROR ,
  payload: { error }
});
