import * as Action from "../const/Const";
import axios from "axios";

export function setUsername(username) {
    return {
        type: Action.SET_USERNAME,
        payload: username
    }
}

export function setPassword(password) {
    return {
        type: Action.SET_PASSWORD,
        payload: password
    }
}

export function servicePending() {
    return {
        type: Action.SERVICE_PENDING
    }
}

export function serviceError(error) {
    return {
        type: Action.SERVICE_ERROR,
        payload: error
    }
}

export function serviceSuccess(data) {
    return {
        type: Action.SERVICE_SUCCESS,
        payload: data
    }
}

export function serviceLogin(username, password) {
    servicePending();
    axios.post("localhost:5000/api/Auth/logih", {
        data: {
            username: username,
            password: password
        }
    }).then(
        function(resp) {
            console.log(resp);
            // serviceSuccess(response.data);
        }
    ).catch(error => serviceError(error));
}