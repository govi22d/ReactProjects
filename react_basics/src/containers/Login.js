import React, {Component} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import UserActions from '../store/actions/user-actions';
import { Redirect } from 'react-router';

class Login extends Component {
    state = {email:"", password:""};

    async doLogin(e) { 
        e.preventDefault(); 
        try { 
            const { email, password } = this.state; 
            const apiKey = "AIzaSyDyyTr3qgy3UAifxK2Rk-2F1WrsPFNq-D0"; 
            const endPoint = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + apiKey; 
            const res = await Axios.post(endPoint, { 
                email, 
                password, 
                returnSecureToken: true, 
            });
            
            console.log("success", res.data); 
            this.props.signinSuccess(res.data);
        } catch (e) { 
            console.log("error", e.response); 
            this.props.signinError(e.response.data.error.message);
        }
    }

    render () {
        if (this.props.isLoggedIn) {
            let lastPage = "/";
            if(this.props.location.state && this.props.location.state.from) {
                lastPage = this.props.location.state.from;
            }
            return <Redirect to={lastPage} />
        }
        return (
            <form onSubmit={(e) => this.doLogin(e)}>
                <small className="text-danger">{this.props.errorMessage}</small>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" 
                    className="form-control"
                    onChange={(e) => {this.setState({email: e.target.value})}}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control"
                    onChange={(e) => {this.setState({password: e.target.value})}}></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        );
    }
}

const mapStoreDataToProps = (storeDta) => {
    return {
        isLoggedIn: !!storeDta.userSession.user,
        errorMessage: storeDta.userSession.error
    };
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        signinSuccess: (user) => dispatch(UserActions.loginSuccess(user)), 
        signinError: (error) => dispatch(UserActions.loginError(error)), 
    };
 };

export default connect(mapStoreDataToProps, mapDispatchToProps)(Login); 