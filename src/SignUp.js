import React from 'react';
import './SignUp.css'
import {Formik,Form,Field} from 'formik';
import * as yup from 'yup';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import {v4 as uuId} from 'uuid';
import {connect} from "react-redux";
import * as ProductActions from '../src/actions/ProductActions'

const validateSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
  firstname: yup.string().required('First Name is Required'),
  lastname: yup.string().required('Last Name is Required'),
  location: yup.string().required('Location is Required'),
  mobilenumber: yup.number().required('Mobile Number is Required'),

})
export function SignUp(props){
  const emailId=uuId();
  let history=useHistory();
  const addSignUpForm = async(values)=>{
      const data={
          id:emailId,
          email:values.email,
          password:values.password,
          firstname:values.firstname,
          location:values.location,
          mobilenumber:values.mobilenumber
      }
      props.addSignUp(data);
     setTimeout(() => {
      history.push("/login");
      }, 500); 
  }

  
  return (
      <div className='signup'> 
            <Link to='/'>
                <img
                    className="signup__logo"
                    src="https://cdn.shippify.co/dash/users/img/users-shippify-logo.svg"
                />
            </Link>

          <div className='signup__container'>
          <Formik
    initialValues ={{
      email:'',
      password:'',
      firstname:'',
      location:'',
      mobilenumber:'',
    }}
    
    validationSchema={validateSchema}
    onSubmit={(values)=> addSignUpForm(values)}
    
    >
        {({errors,touched})=>(
            <Form > 
                <h2>Sign Up</h2>
                <Field name='email' placeholder='Enter Email' type='email' /><br/>
                {errors.email && touched.email ? <div style ={{color:'red'}}>{errors.email}</div> : null}
                <Field name='password' placeholder='Enter Password' type='password' /><br/>
                {errors.password && touched.password ? <div style ={{color:'red'}}>{errors.password}</div> : null}
                <Field name='firstname' placeholder='Enter First Name' type='text' /><br/>
                {errors.firstname && touched.firstname ? <div style ={{color:'red'}}>{errors.firstname}</div> : null}
                <Field name='lastname' placeholder='Enter Last Name' type='text' /><br/>
                {errors.lastname && touched.lastname ? <div style ={{color:'red'}}>{errors.lastname}</div> : null}
                <Field name='location' placeholder='Enter Location' type='text'  /><br/>
                {errors.location && touched.location? <div style ={{color:'red'}}>{errors.location}</div> : null}
                <Field name='mobilenumber' placeholder='Enter Mobile Number' type='number'  /><br/>
                {errors.mobilenumber && touched.mobilenumber ? <div style ={{color:'red'}}>{errors.mobilenumber}</div> : null}
                <button type='submit' class='signup__registerButton'> SignUp</button>
                <a href="/Login">already have an account?  login here </a>
            </Form>
        )}
    </Formik>
    </div>
    </div>
    )
 
}


const mapReducerToStore = (dispatch) => {
  return {
    addSignUp: (signupDetails) =>
      dispatch(ProductActions.addSignUp(signupDetails)),
  };
};

export default connect(null, mapReducerToStore)(SignUp);
