import React from 'react';
import CurrencyActions from '../store/actions/currency-actions';
import {connect} from 'react-redux';

class Currency extends React.Component {
    
    render() {
        const currencies = ['USD','EUR','INR', 'CAD', 'GBP'];
        return (
            <select onChange={(event) => {
                this.props.currencyChange(event.target.value)
                }}>
                {
                    currencies.map(val => <option key={val}>{val}</option>)
                }
            </select>
        );
    }
} 

const mapDispatchToProps = (dispatch) => { 
    return { currencyChange: (code) => dispatch(CurrencyActions.updateCurrency(code)) }; 
};

export default connect(null, mapDispatchToProps)(Currency);