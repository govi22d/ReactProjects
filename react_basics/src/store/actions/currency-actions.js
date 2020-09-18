
const actionTypes = { 
    CHANGE_CURRENCY: "[Currency] Change Currency"
}; 

const updateCurrency = (code) => {
    console.log(code); 
    return { 
        type: actionTypes.CHANGE_CURRENCY, // mandate/required code, // extra payload 
        code,
    }; 
}; 
    
const CurrencyActions = { 
    updateCurrency, 
    actionTypes 
};

export default CurrencyActions;