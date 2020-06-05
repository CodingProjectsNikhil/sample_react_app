import axios from "axios";
import { REST_API_ACTION } from "../_actions/RestApiTypes";
import { accessDenied, apiError, apiStart, apiEnd } from "../_actions/RestApiActions";


const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== REST_API_ACTION) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
  
  
  // axios default configs
  axios.defaults.baseURL = url || "";
  axios.defaults.headers.common["Content-Type"]="application/json";
  // axios.defaults.headers.common["Authorization"] = `Bearer${token}`;


  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers: headers,
      data: data
      // headers,
      // [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
   .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
   });
};

export default apiMiddleware;