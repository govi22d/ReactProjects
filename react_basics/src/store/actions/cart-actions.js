const actionTypes = {
    ADD_TO_CART : "[Cart] Add to Cart",
    REMOVE_ITEM: "[Cart] Remove item"
}

export const addToCart = (product) => {
    return {type: actionTypes.ADD_TO_CART, product}
}

export const removeItem = (id) => {
    return {type: actionTypes.REMOVE_ITEM, id}
}

const CartActions = {addToCart, removeItem, actionTypes};

export default CartActions;