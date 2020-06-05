import { REST_API_ACTION } from "./RestApiTypes";

export default function apiActionCreater({
  inputUrl = "",
  inputParams = {},
  method = "GET",
  apiDomain = "",
  data = null,
  accessToken = null,
  onSuccess = () => { },
  onFailure = () => { },
  label = "",
  headerOverride = null
}) {
  let encodedParams = { ...inputParams };
  for (const key in encodedParams) {
    if (
      encodedParams.hasOwnProperty(key) &&
      (typeof encodedParams[key] === "string" ||
        encodedParams[key] instanceof String)
    ) {
      encodedParams[key] = encodedParams[key].split(" ").join("+");
      //console.log("After Processing Region Query Param: " + queryParams[key]);
    }
  }

  let queryParams = "";
  Object.keys(encodedParams).map(key => {
    if ("" === queryParams) {
      queryParams = "?";
    } else {
      queryParams += "&";
    }
    queryParams += key + "=" + encodedParams[key];
    return queryParams;
  });

  let url = inputUrl + queryParams;
  console.log("Making REST API Call on URL: " + url);
  return {
    type: REST_API_ACTION,
    payload: {
      url,
      method,
      apiDomain,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headerOverride
    }
  };
}
