export const DFP_ENVIRONMENT_DEV = "dev";
export const DFP_ENVIRONMENT_PROD = "prod";
export const APP_ENVIRONMENT = DFP_ENVIRONMENT_DEV;



export const LOCALHOST = "http://127.0.0.1:8080/services/v1"
export const CUSTOMER = "/customer"
export const MENU = "/menu"
export const BASE_URL = LOCALHOST
export const STATE = "/state"
export const DISTRICT = "/state/?state="
//TEST_LOGIN_LOGOUT_SEPT16 export const ROOT_URL = "172.30.120.54"

// export const BASE_URL_DEV = "https://dfpapi-dev." + ROOT_URL + "/dfp/v1/";
// export const BASE_URL_PROD = "https://dfpapi-prod." + ROOT_URL + "/dfp/v1/";
//export const BASE_URL_PROD = "https://dfp.prod.us.walmart.net/dfp/v1/";
//export const BASE_URL_PROD = "http://172.30.121.123:8080/dfp/v1/";

//TEST_LOGIN_LOGOUT_SEPT16 export const BASE_URL = "http://172.30.120.54:8080/dfp/v1/"; 
export const APP_ACCESS_TOKEN_STRING = "";

//1. Filter Urls
export const URL_FILTER_BASE = BASE_URL + "filter/";
export const URL_FILTER_DC_TYPES = URL_FILTER_BASE + "dctypes";
export const URL_FILTER_REGION_LIST = URL_FILTER_BASE + "allregionlist";
export const URL_FILTER_DC_CHAMBER_LIST = URL_FILTER_BASE + "dcbyregion";
export const URL_FILTER_DEPT_CAT_LIST = URL_FILTER_BASE + "distcentres";

const URL_COMP_FLOW = "flow/";
const URL_COMP_BREACH = "breach/";
const URL_COMP_MERCHANT = "merchant/";
const URL_COMP_ACCURACY = "accuracy/";

//2. System Flow Url
export const URL_SYSTEM_FLOW = BASE_URL + URL_COMP_FLOW + "systemflow";

//3. Breach Url
export const URL_BREACH_DC_LIST = BASE_URL + URL_COMP_BREACH + "systembreach";
export const URL_ADJUSTED_BREACH_DC_LIST = BASE_URL + URL_COMP_BREACH + "adjustedbreach";

export const URL_BREACH_CHAMBER_LIST = BASE_URL + URL_COMP_BREACH + "breachdcchamber"; //ToDo_HC: Remove Temp Url
export const URL_BREACH_CATEGORY_LIST = BASE_URL + URL_COMP_BREACH + "breachcategory"; //ToDo_HC: Remove Temp Url
export const URL_BREACH_ITEM_LIST = BASE_URL + URL_COMP_BREACH + "breachitem";

//4. Merchent Input VIEW URLS:
export const URL_GET_MERCHANT_INPUT = BASE_URL + URL_COMP_MERCHANT;
export const URL_POST_MERCHANT_INPUT = BASE_URL + URL_COMP_MERCHANT;

//5. Adjusted Flow Urls
export const URL_ADJUSTED_FLOW_DETAILS = BASE_URL + URL_COMP_FLOW + "adjustedflow";
export const URL_ADJUSTED_FLOW_CATEGORY_DETAILS = BASE_URL + URL_COMP_FLOW + "adjustedflow/topcategories";
export const URL_ADJUSTED_FLOW_ITEM_DETAILS = BASE_URL + URL_COMP_FLOW + "adjustedflow/topitems";

//6. Smoothened Flow Urls
export const URL_SMOOTHENED_DETAILS = BASE_URL + URL_COMP_FLOW + "smoothenedflow";
export const URL_SMOOTHENED_CATEGORY_DETAILS = BASE_URL + URL_COMP_FLOW + "smoothenedflow/topcategories";
export const URL_SMOOTHENED_ITEM_DETAILS = BASE_URL + URL_COMP_FLOW + "smoothenedflow/topitems";

//7. Accuracry Tracker Urls
export const URL_ACCURACY_TRACKING_DETAILS = BASE_URL + URL_COMP_ACCURACY + "accuracy";

//URL Query Parameters
export const URL_PARM_FILTER_DC_NETWROK_TYPE = "dcNetwork";
export const URL_PARM_FILTER_REGION_NAME = "regionName";
export const URL_PARM_FILTER_DC_ID = "dcId";
export const URL_PARM_FILTER_CHAMBER = "chamberName";
export const URL_PARM_FILTER_START_DATE = "startDate";
export const URL_PARM_FILTER_TIME_FRAME_WEEKS = "numWeek";
export const URL_PARM_FILTER_DEPARTMENT_ID = "deptId";
export const URL_PARM_FILTER_CATEGORY_ID = "categoryId";
export const URL_PARM_FILTER_FLOW_TYPE = "flowType"; //TodDo - Check exact value
export const URL_PARM_FILTER_TIME_FREQUENCY = "frequency";

export const URL_PARM_IS_TOTAL_COUNT_NEEDED = "isTotalCountNeeded";


export const DEFAULT_PAGE_SIZE = 80; //100; //Set it to 80 once API supports Pagination // 12;

