import React from "react"; import { connect } from "react-redux"; 
import UserActions from "../store/actions/user-actions"; 
import { NavLink } from "react-router-dom"; 

function LoginButtons(props) { 
if (props.isLoggedIn) { 
    return ( 
    <button className="btn btn-outline-dark" 
            onClick={() => props.signout()}> Logout </button> ); 
} 
return ( <NavLink to={"/login"} className="btn btn-outline-dark"> Login </NavLink> ); }


const mapStoreDataToProps = (storeDta) => {
    return {
        isLoggedIn: !!storeDta.userSession.user,
    };
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        signout: () => dispatch(UserActions.logOut()), 
    };
 };

export default connect(mapStoreDataToProps, mapDispatchToProps)(LoginButtons); 