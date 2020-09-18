import React from 'react';
import { Route, Switch } from 'react-router';
import { ProductList } from './containers/ProductList';
import { Demo } from './Demo';
import { ErrorPage } from './components/ErrorPage';
import { Checkout } from './containers/Checkout';
import Login  from './containers/Login';
import PrivateRoute from './components/PrivateRoute'

export function AppRouter(props) {
    return (
        <div>
            <Switch>
                <PrivateRoute path={"/"} component={Demo} exact={true}/>
                <Route path={"/products"} component={ProductList} />
                <PrivateRoute path={"/checkout"} component={Checkout} />
                <Route path={"/login"} component={Login} />
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    );
}