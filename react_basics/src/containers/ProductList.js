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
        let image = "https://rukminim1.flixcart.com/image/800/960/jxf05u80/shoe/h/z/v/cg-284-9-campus-blu-sky-original-imafhvqmczxzayhx.jpeg?q=50";
        const pList = [{
            productId : 1001,
            productName : "P-1",
            productImage : image,
            productPrice: "12",
            productStock: false
        }, 
        {
            productId : 1002,
            productName : "P-2",
            productImage : image,
            productPrice: "13",
            productStock: true
        }];

        return (
            <div>
                {
                    this.state.pList.map(val=> <Product 
                        pData= {val} 
                        key={val.productId} 
                        code = {this.props.selectedCurrency}/>)
                }
            </div>
        );
    }
}