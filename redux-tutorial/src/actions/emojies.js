import { fetchEmojies } from "../api/emjoies-api"

export const loadEmojies = () => {
    return (dispatch) => {
        fetchEmojies()
            .then(res => dispatch(loadEmjoiesSuccess(res)))
            .catch(err => dispatch(loadEmjoiesError(err)))
    }
}


const loadEmjoiesSuccess = (res) => {

    return {
        type: "LOAD_EMOJIES_SUCCESS",
        data: res
    }
}

const loadEmjoiesError = (err) => ({
    type: "LOAD_EMOJIES_FAILED",
    data: err
})