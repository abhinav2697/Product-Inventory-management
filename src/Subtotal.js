import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';


import { connect } from "react-redux";

export function Subtotal(props) {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({props.basket.length} item): <strong>{` ${value}`} </strong>
                        </p>
                        
                    </>
                )}
                decimalScale={2}
                value={props.basketAmount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"‎₹"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

const getDataFromStore = (state) =>{
    return {
        basket: state.userReducer.basket,
        basketAmount: state.userReducer.basketAmount,
    }
}

export default connect(getDataFromStore,null)(Subtotal);
