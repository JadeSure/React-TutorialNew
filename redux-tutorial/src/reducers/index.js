import { combineReducers } from "redux";
import { user } from './user'
import { repos } from './repos'
import { emojies } from './emojies'

export default combineReducers(
    {
        user,
        repos,
        emojies
    }
)

