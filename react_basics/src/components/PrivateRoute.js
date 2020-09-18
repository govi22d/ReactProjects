import React from "react"; 
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux"; 
 
 function PrivateRoute({ component: RoutedComponent,isAuthenticated, ...rest }) {
      return ( 
      <Route {...rest} 
        render = {({ location }) => isAuthenticated ? (<RoutedComponent /> ) : ( 
            <Redirect to={{ pathname: "/login", state: { from: location.pathname }, }} /> 
        ) } /> ); } 
      
      const mapStoreDataToProps = (storeData) => { 
          return { isAuthenticated: !!storeData.userSession.user, }; };
 export default connect(mapStoreDataToProps)(PrivateRoute);