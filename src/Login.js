import React from 'react';
import './Login.css'
import { Formik, Form,Field } from 'formik';
import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup';
import {connect} from "react-redux";
import * as ProductActions from '../src/actions/ProductActions'


const validateSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
})


export function Login(props){
    let history=useHistory();
    const addLoginForm = async(values)=>{
        const data={
           email:values.email,
           password:values.password
        }
        props.addLogin(data);
       setTimeout(() => {
        history.push("/products");
        }, 500); 
    }

  return (
      <div className='login'>
          <Link to='/'>
          <img  className="login__logo"
                src="https://cdn.shippify.co/dash/users/img/users-shippify-logo.svg"
                alt=""
            />
            </Link>
            <div className='login__container'>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validateSchema}
      onSubmit={(values)=> addLoginForm(values)}
    >
      {({errors,touched})=>(
        <React.Fragment>
            <Form > 
                <h2>Login Form</h2>
                <Field name='email' placeholder='Enter Email' type='email' /><br/>
                {errors.email && touched.email? <div style ={{color:'red'}}>{errors.email}</div> : null}
                <Field name='password' placeholder='Enter Password' type='password'  /><br/>
                {errors.password && touched.password ? <div style ={{color:'red'}}>{errors.password}</div> : null}
                <button type='submit' class='login__signInButton'>Login</button>
                <a href="/SignUp">Do not have the account?  Register Here</a>
            </Form>
            </React.Fragment>
        )}
    
    </Formik>
    </div>
    </div>
    
  )
}

const mapReducerToStore = (dispatch) => {
    return {
      addLogin: (loginDetails) =>
        dispatch(ProductActions.addLogin(loginDetails)),
    };
  };
  
export default connect(null, mapReducerToStore)(Login);