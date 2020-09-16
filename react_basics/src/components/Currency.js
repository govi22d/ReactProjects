import React from 'react';
export class Currency extends React.Component {
    
    render() {
        const currencies = ['USD','EUR','INR', 'CAD', 'GBP'];
        return (
            <select onChange={(event) => this.props.currencyChange(event.target.value)}>
                {
                    currencies.map(val => <option key={val}>{val}</option>)
                }
            </select>
        );
    }
} 