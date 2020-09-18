
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

const logOut = () => {
    return {
        type:actionTypes.LOGOUT
    };
}

const UserActions = {loginSuccess, loginError, logOut, actionTypes};

export default UserActions;