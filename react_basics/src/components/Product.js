import React from "react";

export class Product extends React.Component {
    _renderStock(stock) {
         if (stock) { 
             return <button>Add to Cart</button>; 
            } 
            return <span>Out of Stock</span>; 
        }

    render() {
        //"./image.jpg" //local images
        const {pData, wishList, code} = this.props;
        return (
            <div className="container">
                <img src={pData.productImage} alt=""></img>
        <h3>{pData.productId} {pData.productName} {pData.productPrice} {code}</h3>
                <button>Add to {wishList ? 'Wishlist' : 'Cart'}</button>
                {this._renderStock(pData.productStock)}
                </div>
        );
    }
}