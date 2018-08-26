import { createStore } from "redux";

import loginReducer from "../reducer/LoginReducer.js";

export default createStore(loginReducer);