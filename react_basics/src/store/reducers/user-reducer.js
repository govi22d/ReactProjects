import UserActions from '../actions/user-actions';

const initialState = {user:null, error:null};
function UserReducer (storeData = initialState, action) {
    switch (action.type) {
        case UserActions.actionTypes.LOGIN_SUCCESS:
            return {error:null, user: action.user}
        case UserActions.actionTypes.LOGIN_ERROR:
            return {error:action.error, user: null}
        default:
            storeData = initialState;
            return storeData;
    }
} 

export default UserReducer;

