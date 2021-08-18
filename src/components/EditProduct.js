import React,{useEffect} from 'react'
import {Formik,Form,Field} from 'formik';
import * as yup from 'yup';
import '../CSS/EditProduct.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import * as ProductActions from '../actions/ProductActions'


const validateSchema = yup.object().shape({
    ProductName: yup.string().required('Product Name is Required'),
    ProductDescription:yup.string().required('Product Description is required'),
    Manufacturer:yup.string().required('Manfacturer is Required'),
    Quantity: yup.number().required('Quantity is Required'),
    Price: yup.number().required('Price is Required'),
 
})

export function EditProduct(props) {
    useEffect(()=> console.log(props),[])
    const editProductForm = async(values)=>{
        const data={
            id:props.productDetail.id,
            ProductName:values.ProductName,
            ProductDescription:values.ProductDescription,
            Manufacturer:values.Manufacturer,
            Quantity:values.Quantity,
            Price:values.Price
        }
        props.editProduct(data);
        setTimeout(() => {
        props.handleClose();
            
        }, 500);
    };
    return (
        <div className='editproduct'>
             <Link to='/'>
                <img
                    className="editproduct__logo"
                    src="https://cdn.shippify.co/dash/users/img/users-shippify-logo.svg"
                    alt={""}
                />
            </Link>
        <div className='editproduct__container'>
    <Formik
    initialValues ={{
        ProductName: `${props.productDetail.ProductName}`,
        ProductDescription:`${props.productDetail.ProductDescription}`,
        Manufacturer:`${props.productDetail.Manufacturer}`,
        Quantity:`${props.productDetail.Quantity}`,
        Price: `${props.productDetail.Price}`,
    }}
    
    validationSchema={validateSchema}
    onSubmit={(values)=> editProductForm(values)}
    >
    {({errors,touched})=>(
        <Form > 
            {/* <h2>Edit Product</h2> */}
            Product Name:
            <Field name='ProductName' placeholder='Enter Product Name' type='text'  /><br/>
            {errors.ProductName && touched.ProductName ? <div style ={{color:'red'}}>{errors.ProductName}</div> : null}
            Product Description:
            <Field name='ProductDescription' placeholder='Enter Product Description' type='text' /><br/>
            {errors.ProductDescription && touched.ProductDescription ? <div style ={{color:'red'}}>{errors.ProductDescription}</div> : null}
            Manufacturer:
            <Field name='Manufacturer' placeholder='Enter Manufacturer Name' type='text' /><br/>
            {errors.Manufacturer && touched.Manufacturer? <div style ={{color:'red'}}>{errors.Manufacturer}</div> : null}
            Quantity:
            <Field name='Quantity' placeholder='Enter Quantity' type='number'  /><br/>
            {errors.Quantity && touched.Quantity ? <div style ={{color:'red'}}>{errors.Quantity}</div> : null}
            Price:
            <Field name='Price' placeholder='Enter Product Price' type='number'  /><br/>
            {errors.Price && touched.Price ? <div style ={{color:'red'}}>{errors.Price}</div> : null}
            <button type='submit' class='editproduct__submitButton'> Submit</button>
        </Form>
    )}
</Formik>
</div>
</div>
)

}

const getDataFromStore = (state) =>{
    return {
        productDetail: state.productReducer.productDetail
    }
}

const mapReducerToStore = (dispatch) => {
return {
  editProduct: (editproductDetails) =>
    dispatch(ProductActions.editProduct(editproductDetails)),
};
};

export default connect(getDataFromStore, mapReducerToStore)(EditProduct);