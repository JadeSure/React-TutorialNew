
import { fetchRepos } from "../api/repo-api"


export const loadRepos = () => {
    const callback = (dispatch) => {
        dispatch(loadReposRequested);
        fetchRepos()
            .then(res => dispatch(loadReposSuccess(res)))
            .catch(err => dispatch(loadReposFailed(err)))
    }
    return callback
}


const loadReposRequested = () => ({
    type: "REQUESTED"
})

const loadReposSuccess = (res) => ({
    type: "SUCCESS",
    data: { repos: res.data || [] }
})

const loadReposFailed = (err) => ({
    type: "FAILED",
    data: { err }
})