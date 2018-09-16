import * as Action from "../const/Const"

const loginReducer = (state = {
    username: null,
    password: null,
    isLoading: false,
    message: null,
    response: {}
}, action) => {
    switch (action.type) {
        case Action.SET_USERNAME:
            state = {
                ...state,
                username: action.payload
            }
            break;
        case Action.SET_PASSWORD:
            state = {
                ...state,
                password: action.payload
            }
            break;
        case Action.SERVICE_FAIL:
            state = {
                ...state,
                message: action.payload,
                isLoading: false
            }
            break;
        case Action.SERVICE_PENDING:
            state = {
                ...state,
                isLoading: true
            }
            break;
        case Action.SERVICE_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                response: action.payload,
                message: action.payload.message
            }
            break;
        case Action.SERVICE_LOAD:
            state = {
                ...state,
                password: null,
                isLoading: true,
                response: action.payload
            }
            break;
    }
    return state;
}

export default loginReducer;