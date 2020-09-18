
const actionTypes = {
    LOGIN_SUCCESS: '[User] Login success',
    LOGIN_ERROR:'[User], Login error',
    LOGOUT:'[User], Logout'
}

const loginSuccess = (user) => {
    return {
        type:actionTypes.LOGIN_SUCCESS, user
    };
}

const loginError = (error) => {
    return {
        type:actionTypes.LOGIN_ERROR, error
    };
}

const logout = () => {
    return {
        type:actionTypes.LOGOUT
    };
}

const UserActions = {loginSuccess, loginError, logout, actionTypes};

export default UserActions;