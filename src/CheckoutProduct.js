import React from 'react';
import './CheckoutProduct.css';
import { connect } from "react-redux";
import * as reducerActions from './reducerActions'

function CheckoutProduct(props) {
    // console.log(id, title,description,manufacturer, price,quantity);
    const removeFromBasket = () => {
        // remove item from basket ...
        props.removeFromBasket(props.id)
    }
    
    return (
        <div className="checkoutProduct">
         

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">Name:{props.ProductName}</p>
                 <p className="checkProduct__description">Des:{props.ProductDescription}</p> 
                <p className="checkoutProduct__price">Price:
                    <small> ‎₹ </small>
                    <strong>{props.Price}</strong> 
                </p>
                <p className="checkProduct__manufacturer"><small>Manufacturer:{props.Manufacturer}</small></p>
                <p className="checkProduct__quantity"><small>Quantity:{props.Quantity}</small></p>

                
            
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}


const componentActions = (dispatch) =>{
    return {
            removeFromBasket: (productDetails) => dispatch(reducerActions.popFromBasket(productDetails))
    }
}

export default connect(null,componentActions)(CheckoutProduct);
