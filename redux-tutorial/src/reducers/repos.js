const initialState = {
    loading: false,
    repos: []
}


export const repos = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED':
            return {
                ...state,
                loading: true
            }
        case "SUCCESS":
            // console.log(action.data.repos);
            return {
                ...state,
                loading: false,
                repos: action.data.repos
            }
        case "FAIL":
            return {
                ...state,
                laoding: false,
            }
        default:
            return state
    }
}