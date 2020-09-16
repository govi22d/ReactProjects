import React from 'react';
import './App.css';
import { Demo } from './Demo';
import {ProductList} from './containers/ProductList';
import { Currency } from './components/Currency';
import { Checkout } from './containers/Checkout';

class App extends React.Component {
state = {currencyChange:"INR"};
  
render() {
   let currencyCode = this.state.currencyChange;
   return (
    <div className="App">
      <Currency currencyChange={code=> {
        console.log("In App", code);
        this.setState({currencyChange: code});
        }} />
      <Demo />
      <Checkout />
      <ProductList selectedCurrency={currencyCode}/>
      
    </div>
  );
}
}
export default App;
