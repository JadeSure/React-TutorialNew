const initialState = {
    username: 'Jackie',
    status: true,
    gender: 'female'
}


export const user = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_USERNAME":
            return {
                ...state,
                username: action.username
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}