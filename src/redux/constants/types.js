//Log in
export const LOGIN_SAGA = 'LOGIN_SAGA';
export const USER_LOGIN_SAGA = 'USER_LOGIN_SAGA';

// Socket send message to server
export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_COMMENT_SOCKET_HANDLER = "ADD_COMMENT_SOCKET_HANDLER";
export const UPDATE_COMMENT_SOCKET_HANDLER = "UPDATE_COMMENT_SOCKET_HANDLER";
export const LIKE_POST_SOCKET_HANDLER = "LIKE_POST_SOCKTE_HANDLER";
export const ADD_FRIEND_SOCKET_HANDLER = "ADD_FRIEND_SOCKET_HANDLER";
export const ACCEPT_FRIEND_REQUEST_SOCKET_HANDLER = "ACCEPT_FRIEND_REQUEST_SOCKET_HANDLER";
export const CANCEL_FRIEND_REQUEST_SOCKET_HANDLER = "CANCEL_FRIEND_REQUEST_SOCKET_HANDLER";
export const DELETE_FRIEND_REQUEST_SOCKET_HANDLER = "DELETE_FRIEND_REQUEST_SOCKET_HANDLER";

// Socket receive message from server
export const MESSAGE_NOTIFICATION_RECEIVED = "MESSAGE_NOTIFICATION_RECEIVED";
export const ADD_COMMENT_MESSAGE_FROM_SERVER = "ADD_COMMENT_MESSAGE_FROM_SERVER";
export const ADD_COMMENT_NOTIFICATION_MESSAGE_FROM_SERVER = "ADD_COMMENT_NOTIFICATION_MESSAGE_FROM_SERVER";
export const UPDATE_COMMENT_MESSAGE_FROM_SERVER = "UPDATE_COMMENT_MESSAGE_FROM_SERVER";
export const LIKE_POST_MESSAGE_FROM_SERVER = "LIKE_POST_MESSAGE_FROM_SERVER";
export const LIKE_POST_NOTIFICATION_MESSAGE_FROM_SERVER = "LIKE_POST_NOTIFICATION_MESSAGE_FROM_SERVER";
export const ADD_FRIEND_MESSAGE_FROM_SERVER = "ADD_FRIEND_MESSAGE_FROM_SERVER";
export const ACCEPT_FRIEND_MESSAGE_FROM_SERVER = "ACCEPT_FRIEND_MESSAGE_FROM_SERVER";
export const CANCEL_FRIEND_REQUEST_MESSAGE_FROM_SERVER = "CANCEL_FRIEND_REQUEST_MESSAGE_FROM_SERVER";
export const DELETE_FRIEND_REQUEST_MESSAGE_FROM_SERVER = "DELETE_FRIEND_REQUEST_MESSAGE_FROM_SERVER";
export const ADD_FRIEND_NOTIFICATION_MESSAGE_FROM_SERVER = "ADD_FRIEND_NOTIFICATION_MESSAGE_FROM_SERVER";
export const ACCEPT_FRIEND_NOTIFICATION_MESSAGE_FROM_SERVER = "ACCEPT_FRIEND_NOTIFICATION_MESSAGE_FROM_SERVER";

// Socket dispatch message to Saga
export const ADD_COMMENT_MESSAGE_SAGA = "ADD_COMMENT_MESSAGE_SAGA";
export const UPDATE_COMMENT_MESSAGE_SAGA = "UPDATE_COMMENT_MESSAGE_SAGA";
export const ADD_FRIEND_REQUEST_MESSAGE_SAGA = "ADD_FRIEND_REQUEST_MESSAGE_SAGA";
export const ACCEPT_FRIEND_REQUEST_MESSAGE_SAGA = "ACCEPT_FRIEND_REQUEST_MESSAGE_SAGA";
export const CANCEL_FRIEND_REQUEST_MESSAGE_SAGA = "CANCEL_FRIEND_REQUEST_MESSAGE_SAGA";
export const DELETE_FRIEND_REQUEST_MESSAGE_SAGA = "DELETE_FRIEND_REQUEST_MESSAGE_SAGA";

// Message reducer
export const REDUCER_MESSAGE_RECEIVED = "REDUCER_MESSAGE_RECEIVED";
export const REDUCER_LIKE_POST_RECEIVED = "REDUCER_LIKE_POST_RECEIVED";

//Socket Init
export const SOCKET_INIT = 'SOCKET_INIT';
export const SOCKET_DISCONNECT = 'SOCKET_DISCONNECT';

//Sign up
export const SIGN_UP_SAGA = 'SIGN_UP_SAGA';
export const DISPLAY_SIGN_UP_MODAL = 'DISPLAY_SIGN_UP_MODAL';
export const HIDE_SIGN_UP_MODAL = 'HIDE_SIGN_UP_MODAL';

//User profile
export const GET_LOGIN_USER_PROFILE_SAGA = 'GET_LOGIN_USER_PROFILE_SAGA';
export const GET_LOGIN_USER_PROFILE = 'GET_LOGIN_USER_PROFILE';
export const GET_PROFILE_DETAIL_BY_USER_ID_SAGA = 'GET_PROFILE_DETAIL_BY_USER_ID_SAGA';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_FRIEND_PROFILE = 'GET_FRIEND_PROFILE';
export const UPDATE_PROFILE_SAGA = 'UPDATE_PROFILE_SAGA';
export const UPDATE_AVATAR_SAGA = 'UPDATE_AVATAR_SAGA';
export const SET_IS_RELOAD_WALL = 'SET_IS_RELOAD_WALL';

//City
export const GET_CITY_LIST_SAGA = 'GET_CITY_LIST_SAGA';
export const GET_CITY_LIST = 'GET_CITY_LIST';

//School
export const GET_SCHOOL_LIST_SAGA = 'GET_SCHOOL_LIST_SAGA';
export const GET_SCHOOL_LIST = 'GET_SCHOOL_LIST';

//College
export const GET_COLLEGE_LIST_SAGA = 'GET_COLLEGE_LIST_SAGA';
export const GET_COLLEGE_LIST = 'GET_COLLEGE_LIST';

//Workplace
export const GET_WORKPLACE_LIST_SAGA = 'GET_WORKPLACE_LIST_SAGA';
export const GET_WORKPLACE_LIST = 'GET_WORKPLACE_LIST';

//Post
export const DISPLAY_CREATE_POST_MODAL = 'DISPLAY_CREATE_POST_MODAL';
export const HIDE_CREATE_POST_MODAL = 'HIDE_CREATE_POST_MODAL';
export const CREATE_POST_SAGA = 'CREATE_POST_SAGA';
export const GET_POST_LIST_WALL_SAGA = 'GET_POST_LIST_WALL_SAGA';
export const GET_POST_LIST_NEWSFEED_SAGA = 'GET_POST_LIST_NEWSFEED_SAGA';
export const GET_POST_LIST_WALL = 'GET_POST_LIST_WALL';
export const GET_POST_LIST_NEWSFEED = 'GET_POST_LIST_NEWSFEED';
export const UPDATE_LIKES_SAGA = 'UPDATE_LIKES_SAGA';
export const GET_POST_DETAIL_BY_ID_SAGA = 'GET_POST_DETAIL_BY_ID_SAGA';
export const GET_POST_DETAIL_BY_ID = 'GET_POST_DETAIL_BY_ID';
export const SET_IS_RELOAD_NEWS_FEED_POST = 'SET_IS_RELOAD_NEWS_FEED_POST';

//Photo
export const DISPLAY_VIEW_PHOTO_MODAL = 'DISPLAY_VIEW_PHOTO_MODAL';
export const HIDE_VIEW_PHOTO_MODAL = 'HIDE_VIEW_PHOTO_MODAL';
export const DISPLAY_UPLOAD_IMAGE_MODAL = 'DISPLAY_UPLOAD_IMAGE_MODAL';
export const HIDE_UPLOAD_IMAGE_MODAL = 'HIDE_UPLOAD_IMAGE_MODAL';
export const GET_PHOTO_LIST_BY_USER_ID_SAGA = 'GET_PHOTO_LIST_BY_USER_ID_SAGA';
export const GET_PHOTO_LIST_BY_USER_ID = 'GET_PHOTO_LIST_BY_USER_ID';
export const SET_DELETED_PHOTO_ID = 'SET_DELETED_PHOTO_ID';
export const DELETE_PHOTO_SAGA = 'DELETE_PHOTO_SAGA';

//Comment
export const CREATE_COMMENT_SAGA = 'CREATE_COMMENT_SAGA';
export const GET_COMMENT_LIST_BY_POST_ID_SAGA = 'GET_COMMENT_LIST_BY_POST_ID_SAGA';
export const GET_COMMENT_LIST = 'GET_COMMENT_LIST';
export const SET_DELETED_COMMENT_ID = 'SET_DELETED_COMMENT_ID';
export const DELETE_COMMENT_SAGA = 'DELETE_COMMENT_SAGA';
export const UPDATE_COMMENT_SAGA = 'UPDATE_COMMENT_SAGA';

//Confirm delete
export const DISPLAY_CONFIRM_DELETE_MODAL = 'DISPLAY_CONFIRM_DELETE_MODAL';
export const HIDE_CONFIRM_DELETE_MODAL = 'HIDE_CONFIRM_DELETE_MODAL';
export const SET_MODAL_TYPE = 'SET_MODAL_TYPE';

//Relationship
export const GET_SUGGESTIONS_LIST_SAGA = 'GET_SUGGESTIONS_LIST_SAGA';
export const GET_SUGGESTIONS_LIST = 'GET_SUGGESTIONS_LIST';
export const GET_FRIEND_LIST_SAGA = 'GET_FRIEND_LIST_SAGA';
export const GET_FRIEND_LIST = 'GET_FRIEND_LIST';
export const GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA = 'GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA';
export const GET_RECEIVED_FRIEND_REQUEST_LIST = 'GET_RECEIVED_FRIEND_REQUEST_LIST';
export const ACCEPT_FRIEND_REQUEST_SAGA = 'ACCEPT_FRIEND_REQUEST_SAGA';
export const DELETE_FRIEND_REQUEST_SAGA = 'DELETE_FRIEND_REQUEST_SAGA';
export const CREATE_FRIEND_REQUEST_SAGA = 'CREATE_FRIEND_REQUEST_SAGA';
export const GET_RELATIONSHIP_WITH_CURRENT_USER_SAGA = 'GET_RELATIONSHIP_WITH_CURRENT_USER_SAGA';
export const GET_RELATIONSHIP_WITH_CURRENT_USER = 'GET_RELATIONSHIP_WITH_CURRENT_USER';
export const CANCEL_FRIEND_REQUEST_SAGA = 'CANCEL_FRIEND_REQUEST_SAGA';

//Notification
export const REDUCER_COMMENT_NOTIFICATION = 'REDUCER_COMMENT_NOTIFICATION';
export const REDUCER_LIKE_POST_NOTIFICATION = 'REDUCER_LIKE_POST_NOTIFICATION';
export const REDUCER_UPDATE_LIST_NOTIFICATION = 'REDUCER_UPDATE_LIST_NOTIFICATION';
export const REDUCER_ADD_FRIEND_REQUEST_NOTIFICATION = 'REDUCER_ADD_FRIEND_REQUEST_NOTIFICATION';
export const REDUCER_ACCEPT_FRIEND_REQUEST_NOTIFICATION = 'REDUCER_ACCEPT_FRIEND_REQUEST_NOTIFICATION';
export const REDUCER_READ_NOTIFICATION = 'REDUCER_READ_NOTIFICATION';
export const CREATE_NOTIFICATION_SAGA = 'CREATE_NOTIFICATION_SAGA';
export const GET_NOTIFICATION_LIST_BY_RECEIVER_ID_SAGA = 'GET_NOTIFICATION_LIST_BY_RECEIVER_ID_SAGA';
export const REDUCER_GET_NOTIFICATION_LIST = 'REDUCER_GET_NOTIFICATION_LIST';

