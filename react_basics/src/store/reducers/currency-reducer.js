import CurrencyActions from "../actions/currency-actions"; 

// reducer(store_data, action) // state : initialized 
function currencyReducer(storeData = "INR", action) { 
    switch (action.type) { 
        case CurrencyActions.actionTypes.CHANGE_CURRENCY: 
            console.log(action.code+"reducer");
            return action.code; 
        default: 
            return storeData; // current state 
    } 
} 

export default currencyReducer;
