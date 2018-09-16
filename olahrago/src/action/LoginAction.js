import * as Action from "../const/Const";
import axios from "axios";

export function ActionSetUsername(username) {
    return {
        type: Action.SET_USERNAME,
        payload: username
    }
}

export function ActionSetPassword(password) {
    return {
        type: Action.SET_PASSWORD,
        payload: password
    }
}

export function ServicePending() {
    return {
        type: Action.SERVICE_PENDING
    }
}

export function ServiceError(error) {
    return {
        type: Action.SERVICE_ERROR,
        payload: error
    }
}

export function ServiceSuccess(data) {
    return {
        type: Action.SERVICE_SUCCESS,
        payload: data
    }
}

export function ServiceLogin(username, password) {

    return (dispatch) => {
        axios({
                method: "POST",
                url: "http://10.0.2.2:5555/api/auth/login",
                data: {
                    Username: username,
                    Password: password
                },
                responseType: "json"
            })
            .then((result) => {
                if (result.status == 200) {
                    dispatch(ServiceSuccess(result.data));
                }
            })
            .catch((error) => {
                dispatch(ServiceError(error));
            });
    }
}