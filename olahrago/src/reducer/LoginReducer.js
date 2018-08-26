const loginReducer = (state = {
    username: null,
    password: null
}, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            state = {
                ...state,
                username: action.payload
            }
            break;
        case "SET_PASSWORD":
            state = {
                ...state,
                password: action.payload
            }
            break;
    }
    return state;
}

export default loginReducer;