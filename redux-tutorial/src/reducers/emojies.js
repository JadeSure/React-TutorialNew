const initialState = {
    emojies: {},
    err: null
}

export const emojies = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_EMOJIES_SUCCESS":
            return {
                ...state,
                emojies: action.data,

            }
        case "LOAD_EMOJIES_FAILED":
            return {
                ...state,
                emojies: {},
                err: action.err,
            }
        default:
            return state
    }
}