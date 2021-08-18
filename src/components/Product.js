import React from 'react'
import { useHistory } from 'react-router-dom'
import {connect} from "react-redux";
import * as ProductActions from  '../actions/ProductActions';
function Product(props) {
    let history=useHistory();
    const viewProduct=()=>{
        alert(`Are you sure want to view the details?`)
        props.getProductName(props.eachProduct.ProductName)
        history.push(`/ProductView/${props.eachProduct.ProductName}`);
    };
       return (
           <tbody>
               <tr>
                    <td onClick={viewProduct} style={{textDecoration:'underline'}}>
                    {props.eachProduct.ProductName}
                   </td>
                   <td>
                       {props.eachProduct.ProductDescription}
                   </td>
                   <td>
                       {props.eachProduct.Manufacturer}
                   </td>
                   <td>
                       {props.eachProduct.Quantity}
                   </td>
                   <td>
                       Rs.{props.eachProduct.Price}
                   </td>
                </tr>
            </tbody>   
       );
}

const componentActions = (dispatch) =>{
    return {
      getProductName: (ProductName) => 
      dispatch(ProductActions.getProductName(ProductName))
    }
  }
  
export default connect(null,componentActions)(Product);
  
