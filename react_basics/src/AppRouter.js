import React from 'react';
import { Route, Switch } from 'react-router';
import { ProductList } from './containers/ProductList';
import { Demo } from './Demo';
import { ErrorPage } from './components/ErrorPage';
import { Checkout } from './containers/Checkout';

export function AppRouter(props) {
    return (
        <div>
            <Switch>
                <Route path={"/"} component={Demo} exact={true}/>
                <Route path={"/products"} component={ProductList} />
                <Route path={"/checkout"} component={Checkout} />
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    );
}