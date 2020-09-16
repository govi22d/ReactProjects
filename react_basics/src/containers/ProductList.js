import React from "react";
import { Product } from "../components/Product";
import Axios from 'axios';

export class ProductList extends React.Component {
    state = {pList:[]};
    componentDidMount() {
        this.getData();
    }

    getData() {
        const endPoint = "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
        Axios.get(endPoint)
        .then((res) => {
            console.log("success", res);
            this.setState({pList: res.data});
        })
        .catch(err => console.log("error", err))
    }

    render() {
        return (
            <div>
            <h3>Product List</h3>
            <div className="row">
                {
                    this.state.pList.map(val=> <Product 
                        pData= {val} 
                        key={val.productId} 
                        code = {this.props.selectedCurrency}/>)
                }
            </div>
            
            </div>
        );
    }
}