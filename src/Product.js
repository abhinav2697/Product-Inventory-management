import React from 'react';
import './Product.css';


import { connect } from "react-redux";

import * as reducerActions from './reducerActions'


function Product(props) {
    const addToBasket = () =>{
        const item = {
            id: props.id,
            ProductName: props.ProductName,
            Description: props.Description,
            Manufacturer: props.Manufacturer,
            Price: props.Price,
            Quantity: props.Quantity
        }
    props.addToBasket(item)    
    }
        return (
            <div className="product">
                
                <img  alt="" />
    
                <div className="product__info">
                    <p className="product__title">Name:{props.ProductName}</p>
                    <p className="product__description">Desc:{props.Description}</p>
                    <p className="product__price">Price:
                        <small> ‎₹ </small>
                        <strong>{props.Price}</strong> 
                    </p>
                    <p className="product__manufacturer"><small>Manufacturer:{props.Manufacturer}</small></p>
                    <p className="product__quantity"><small>Quantity:{props.Quantity}</small></p>
                
                </div>

               
                <button onClick={addToBasket}>Add to basket</button>
                
            </div>
        )
}


const componentActions  = (dispatch) =>{
    return {
        addToBasket: (productDetails) => dispatch(reducerActions.pushToBasket(productDetails))
    }
}

export default connect(null,componentActions)(Product);
