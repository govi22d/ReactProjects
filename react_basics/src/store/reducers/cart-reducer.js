const { default: CartActions } = require("../actions/cart-actions");

export function cartReducer(storeData=[], action) {
    switch (action.type) {
        case CartActions.actionTypes.ADD_TO_CART:
            return [...storeData, [{...action.product, qty:1}]];
        case CartActions.actionTypes.REMOVE_ITEM:
            return storeData.filter((p)=> p.productId !== action.id)
        default:
            return storeData;
    }
}