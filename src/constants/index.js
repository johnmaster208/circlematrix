// constants/index.js
import keyMirror from "keymirror";

export const APP_CONSTANTS = { 
  unSelectedFillColor: '#ddd',
  userSelectedFillColor: '#214699',
  socketSelectedFillColor: '#7ab3e2'
}

export const ACTION=keyMirror({
    SELECT_CIRCLE: null,
    UNSELECT_CIRCLE: null,
    SOCKET_CIRCLE_SELECTED: null,
    SOCKET_CIRCLE_UNSELECTED: null,
    GET_OCCUPIED_CIRCLES: null,
    APPLICATION_ACTIVITY_FILTER: null,
    PUT_OCCUPIED_CIRCLES: null,
    GET_SOCKET_ID: null,
    GET_SOCKET_CONNECTIONS: null,
    SHOW_MODAL_ALERT: null,
    HIDE_MODAL_ALERT: null
});

export const MODAL=keyMirror({
    TUTORIAL: null,
    ALERT_NO_CIRCLES_REMAINING: null,
    ALERT_OCCUPIED_CIRCLE: null
});

export const STRINGS={
    email: "TSYSDevelopersSupport@tsys.com",
    APPERROR: "Whoops! We’re unable to load TSYS developers. Please try again later.",
    APPLOADING: "TSYS Developers is Loading"
};
  
