import React from 'react';
import './App.css';
import { Demo } from './Demo';
import Currency from './components/Currency';
import { Checkout } from './containers/Checkout';
import { ThemeSwitch } from './components/ThemeSwitch';
import { ThemeContext } from './context';
import { AppRouter } from './AppRouter';
import {BrowserRouter} from 'react-router-dom';
import { Header } from './containers/Header';
import LoginButtons from './components/LoginButtons';

class App extends React.Component {
state = { theme:"light"};
  
render() {
   //let currencyCode = this.state.currencyChange;
   return (
     <BrowserRouter>
      <div className="App">
        <Header>
          <ThemeSwitch changeTheme={(theme) => this.setState({theme})}/>
           <Currency 
          //  currencyChange = {
          //   (code) => { this.setState({currencyChange: code});
          //     console.log(code); }} 
              />
          <LoginButtons></LoginButtons>
        </Header>
        
        {/* <Checkout />  */}
        <ThemeContext.Provider value = {this.state.theme}>
          {/* <ProductList selectedCurrency={currencyCode}/> */}
          <AppRouter />
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
