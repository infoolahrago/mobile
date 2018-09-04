import * as Action from "../const/Const"

const loginReducer = (state = {
    username: null,
    password: null,
    isLoading: false,
    message: null,
    data: {}
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
        case Action.SERVICE_ERROR:
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
                data: payload.data
            }
    }
    return state;
}

export default loginReducer;