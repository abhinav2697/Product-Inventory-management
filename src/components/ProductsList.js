import React from 'react';
import Product from './Product'
import {connect} from "react-redux";

 function ProductsList(props) {
     const product=props.allProducts.map((eachProduct)=>(
         <Product eachProduct={eachProduct} key={eachProduct.id}/>
     ));
        return (
            <div>
                <table className="productTable" border="1">
                    <thead>
                        <tr>
                    
                            <th>ProductName</th>
                            <th>ProductDescription</th>
                            <th>Manufacturer</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {product}
                </table>
            </div>
        );
}

const mapDataToStore = (state) => {
    return {
      allProducts: state.allProducts,
    };
  };
  
  export default connect(mapDataToStore,null)(ProductsList);
  