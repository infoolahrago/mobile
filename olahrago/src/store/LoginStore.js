import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"

import loginReducer from "../reducer/LoginReducer.js";

export default createStore(loginReducer, applyMiddleware(thunk));