import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
function ProductView(props) {
    return (
        <div>
            <h1>Product Details</h1>
            <h3>Product Name:{props.ProductName}</h3>
            <Link to={`/products`}>Back</Link>
        </div>
    );
}


const componentProps = (state) => {
    return {
      ProductName: state.ProductName,
    }
  }
  
  
  export default connect(componentProps,null)(ProductView);