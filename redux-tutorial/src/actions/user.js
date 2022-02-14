export const changeUserName = ({ username }) => {
    return {
        type: 'CHANGE_USERNAME',
        username
    };
}

export const changeStatus = ({ status }) => {
    return {
        type: 'CHANGE_STATUS',
        status
    };
}