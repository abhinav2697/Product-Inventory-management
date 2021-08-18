import constants from '../actions/actionTypes';

const initailState = {
    allProducts: [],
    ProductName: '',
    isLoggedIn: false, // convert this to true after logging in. and to false after logout.
    productDetail: {},
    isSearched:false,
    Searcheddata:[]
  };
  
const ProductReducer =  (state = initailState, action) => {
    switch (action.type) {
      case constants.productTypes.GET_ALL_PRODUCTS:
        return {
          ...state,
          allProducts: action.allProducts,
        };
        case constants.productTypes.VIEW_PRODUCT_CONTENT:
            return {
              ...state,
              ProductName: action.ProductName
            }
        case 'LOGIN':
          return {
            ...state,
            isLoggedIn: action.loggedIn
          }
          case 'PRODUCT_DETAIL':
            return {
              ...state,
              productDetail: action.productDetail
            }
          case 'SEARCH':
            return{
              ...state,
              isSearched:action.searchDetails,
              Searcheddata:action.searchProducts
            }
      default:
        return state;
    }
  };
  
  export default ProductReducer;
  