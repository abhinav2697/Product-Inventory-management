import React ,{useEffect} from 'react';
import ProductsList from './ProductsList';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import * as ProductActions from "../actions/ProductActions";



function AllProductsPage(props) {
    const{getProducts}=props;
    useEffect(() => {
        getProducts();
    },[getProducts]);
       return (
           <div>
            
               <h1>Products List-Using Redux</h1>
               <ProductsList/>
               <br/>
               <Link to='/AddProduct' >Add Product</Link>
               
               
           </div>
       );
}
const mapReducerToStore = (dispatch) => {
    return {
      getProducts: () => {
        dispatch(ProductActions.getAllProducts());
      },
    };
  };
  
  export default connect(null, mapReducerToStore)(AllProductsPage);
