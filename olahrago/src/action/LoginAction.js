export function setUsername(username) {
    return {
        type: "SET_NAME",
        payload: username
    }
}

export function setPassword(password) {
    return {
        type: "SET_PASSWORD",
        payload: password
    }
}