import React from "react";
import {Formik,Form,Field} from 'formik';
import * as yup from 'yup';
import '../CSS/AddProduct.css'
import {Link} from 'react-router-dom'

import {useHistory} from 'react-router-dom';
import {v4 as uuId} from 'uuid';
import {connect} from "react-redux";
import * as ProductActions from '../actions/ProductActions'
 
const validateSchema = yup.object().shape({
    ProductName: yup.string().required('Product Name is Required'),
    ProductDescription:yup.string().required('Product Description is required'),
    Manufacturer:yup.string().required('Manfacturer is Required'),
    Quantity: yup.number().required('Quantity is Required'),
    Price: yup.number().required('Price is Required'),
 
})
 
export function AddProduct(props){
    const ProductId=uuId();
    let history=useHistory();
    const addProductForm = async(values)=>{
        const data={
            id:ProductId,
            ProductName:values.ProductName,
            ProductDescription:values.ProductDescription,
            Manufacturer:values.Manufacturer,
            Quantity:values.Quantity,
            Price:values.Price
        }
        props.addProduct(data);
       setTimeout(() => {
        history.push("/products");
        }, 500); 
    };


    return(
        <div className='addproduct'> 
            <Link to='/'>
                <img
                    className="addproduct__logo"
                    src="https://cdn.shippify.co/dash/users/img/users-shippify-logo.svg"
                    alt=""
                />
            </Link>

        <div className='addproduct__container'>
    <Formik
    initialValues ={{
        ProductName: '',
        ProductDescription:'',
        Manufacturer:'',
        Quantity:'',
        Price: '',
    }}
    
    validationSchema={validateSchema}
    onSubmit={(values)=> addProductForm(values)}
    
    >
        {({errors,touched})=>(
            <Form > 
                <h2>Add Product</h2>
                <Field name='ProductName' placeholder='Enter Product Name' type='text' /><br/>
                {errors.ProductName && touched.ProductName ? <div style ={{color:'red'}}>{errors.ProductName}</div> : null}
                <Field name='ProductDescription' placeholder='Enter Product Description' type='text' /><br/>
                {errors.ProductDescription && touched.ProductDescription ? <div style ={{color:'red'}}>{errors.ProductDescription}</div> : null}
                <Field name='Manufacturer' placeholder='Enter Manufacturer Name' type='text' /><br/>
                {errors.Manufacturer && touched.Manufacturer? <div style ={{color:'red'}}>{errors.Manufacturer}</div> : null}
                <Field name='Quantity' placeholder='Enter Quantity' type='number'  /><br/>
                {errors.Quantity && touched.Quantity ? <div style ={{color:'red'}}>{errors.Quantity}</div> : null}
                <Field name='Price' placeholder='Enter Product Price' type='number'  /><br/>
                {errors.Price && touched.Price ? <div style ={{color:'red'}}>{errors.Price}</div> : null}
                <button type='submit' class='addproduct__submitButton'> ADD PRODUCT</button>
            </Form>
        )}
    </Formik>
    </div>
    </div>
    )
 
}
 

const mapReducerToStore = (dispatch) => {
    return {
      addProduct: (productDetails) =>
        dispatch(ProductActions.addProduct(productDetails)),
    };
  };
  
  export default connect(null, mapReducerToStore)(AddProduct);
  
