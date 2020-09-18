import React from "react";
import Column from "./Column";
import { ImageWithFallback } from "./ImageWithFallback";

export class Product extends React.Component {
    _renderStock(stock, wishlist) { 
        if (stock) { 
            return ( 
                <button className="btn btn-primary btn-sm btn-block" 
                        onClick={(e) => {e.preventDefault();this.props.btnClick();}} > 
                    <i className="fab fa-opencart"></i> Add to{" "} {wishlist ? "Wishlist" : "Cart"} 
                </button>
            );
            }
        
            return ( 
                <button className="btn btn-danger btn-block btn-sm" disabled>
                <i className="fas fa-ban"></i> Out of Stock 
                </button>
            ); 
    }
    
    render() { 
        const { pData, wishlist, code } = this.props; 
        return ( 
            <Column size={4}> 
                <div className="py-2 px-2 my-2 text-center shadow rounded"> 
                {/* <i class="fas fa-heart wishlist shadow"></i> */} 
                <ImageWithFallback source={pData.productImage} /> 
                <div className="mt-4"> <h4>{pData.productName}</h4> 
                <h5> {code} {Number(pData.productPrice).toFixed(2)} </h5> 
                {/* <button>Add to {wishlist ? "Wishlist" : "Cart"}</button> */} 
                {this._renderStock(pData.productStock, wishlist)} </div> 
            </div> 
            </Column> 
        ); 
    }
}