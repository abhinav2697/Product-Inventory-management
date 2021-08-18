import constants from "./actionTypes";
import axios from "axios";


const setAllProducts = (allProducts) => {
  return {
    type: constants.productTypes.GET_ALL_PRODUCTS,
    allProducts,
  };
};

export const getAllProducts = () => {
  return async (dispatch)  => {
      const response = await axios.get('http://localhost:4000/products');
      dispatch(setAllProducts(response.data));
  };
};


export const addProduct = (productDetails) =>{
  return async (dispatch) => {
    const headers =  {
      "Content-Type":" application/json"
    }
    await axios.post("http://localhost:4000/products",productDetails,{headers});
  }
}

const setProductName = (ProductName) =>{
  return {
    type: constants.productTypes.VIEW_PRODUCT_CONTENT,
    ProductName,
  }
}

export const getProductName = (ProductName) =>{
  return async (dispatch) =>{
      const url = `http://localhost:4000/products?ProductName=${ProductName}`;
      const response = await axios.get(url);
      dispatch(setProductName(response.data[0].ProductName));
  }
}

export const editProduct = (editproductDetails) =>{
  return async (dispatch) => {
    const headers =  {
      "Accept":'application/json',
      "Content-Type":" application/json"
    }
    await axios.put(`http://localhost:4000/products/${editproductDetails.id}`, editproductDetails,{headers});
  }
}

export const deleteProduct = (id) =>{
  return async (dispatch) => {
    const headers =  {
      "Content-Type":" application/json"
    }
    await axios.delete(`http://localhost:4000/products/${id}`)
  }
}




const setLoginUser = (loggedIn) =>{
  return {
    type: 'LOGIN',
    loggedIn,
  }
}

export const addLogin = (loginDetails) =>{
  return async (dispatch) => {
    const headers =  {
      "Content-Type":" application/json"
    }
    const response = await axios.get(`http://localhost:4000/users?email=${loginDetails.email}`)
      if(response.data[0].password==loginDetails.password){
          dispatch(setLoginUser(true))
     }
     
    }
  }

export const logout = () =>{
  return async (dispatch) =>{
    dispatch(setLoginUser(false))
  }
}



export const addSignUp = (signupDetails) =>{
  return async (dispatch) => {
     const headers =  {
      "Content-Type":" application/json"
    }
    //console.log(signupDetails)
    const response=await axios.post(`http://localhost:4000/users`,signupDetails);
    localStorage.setItem("user-info",signupDetails.email)
  }
}


const setSearched = (searchDetails,searchProducts) =>{
  return {
    type: 'SEARCH',
    searchDetails,
    searchProducts

  }
}

export const Search=(searchDetails,searchProducts)=>{
  return async(dispatch)=>{
   console.log(searchDetails,searchProducts);
   dispatch(setSearched(searchDetails,searchProducts));
  }
}

const setProductDetail = (productDetail) =>{
  return {
    type:'PRODUCT_DETAIL',
    productDetail
  }
}

export const getProductDetail = (productId) =>{
  return async (dispatch) =>{
    const response = await axios.get(`http://localhost:4000/products?id=${productId}`);
    dispatch(setProductDetail(response.data[0]))
  }
}