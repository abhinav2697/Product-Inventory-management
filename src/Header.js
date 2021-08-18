import React ,{useState,useEffect}from 'react';
import './Header.css';
import { Link ,useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import * as ProductActions from '../src/actions/ProductActions'

import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



export function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchTerm,setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    function fetchAllProducts(){
        props.getProducts()
      }
      useEffect(() => {
        fetchAllProducts();
      },[]);
    
    const handleChange = event => {
        const searchedTerm = event.target.value;
        setSearchTerm(searchedTerm)
        if(!searchedTerm){
            console.log('No Search Term')
        }
        const searchProducts = props.products.filter((product)=> product.ProductName == searchedTerm)
        //console.log(searchProducts)
        if(searchProducts.length != 0){
        props.setFilteredProducts(true,searchProducts);
        }
    };
   
    
    


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let user=localStorage.getItem('user-info')
  const history=useHistory();
  function logout(){
      props.logout();
      setTimeout(() => {
        history.push("/login");
        }, 500); 
  }
       
    return (
        <nav className="header">
            <div className="header__right">
                <MenuIcon className="header__menu"/>
            </div>
                <Link to="/">
                    <img 
                        className="header__logo" 
                        src="https://cdn.shippify.co/dash/users/img/users-shippify-logo.svg"
                        alt=""
                    />
                </Link>
                <Link to="/products" className="header__pro">
                    <h4 className="header__title">Products</h4>
                </Link>
                
                
                
            <div className="header__search">
            {/* <SearchIcon className="header__searchIcon" /> */}
            <Autocomplete className="header__searchInput"
            
                options={props.products.map((product) => product.ProductName)}
                renderInput={(products) => (
                <TextField {...products}  type="text"  value={searchTerm} 
                onChange={handleChange} label="What are you looking for?" margin="normal" variant="outlined" />
                )}
                />
                {/* <input 
                    type="text" 
                    className="header__searchInput"
                    placeholder="What are you looking for?"   
                    value={searchTerm} 
                    onChange={handleChange}
                /> */}
                 
                
                    
                
            </div>

            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                    <LocalShippingIcon/>
                    </div>
                </Link>
                    {
                        props.isLoggedIn ? (
                            <div  className="header__optionProfile">
                            <Button aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                            <PersonOutlineIcon></PersonOutlineIcon>
                            </Button>
                        <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                             >
                            <MenuItem onClick={handleClose}>
                                <Link to="/admin">
                                    Admin
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link onClick={logout}>Logout</Link>
                            </MenuItem>
                        </Menu>
                        </div>
                        ) : (
                            <Link to="/login" className="header__link">
                                <span className="header__login">
                                    Login
                                </span>
                            </Link>
                        )
                    }
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basektCount">
                            {props.basket?.length}
                        </span>
                    </div>
                </Link>
                
                
                
            </div>
        </nav>
    )
}

const getDataFromStore = (state) =>{
return {
    basket: state.userReducer.basket,
    isLoggedIn: state.productReducer.isLoggedIn,
    products: state.productReducer.allProducts
}
}

const mapReducerToStore = (dispatch) => {
    return {
      logout: () =>
        dispatch(ProductActions.logout()),
        getProducts: () => {
            dispatch(ProductActions.getAllProducts());
          },
          setFilteredProducts:(searchDetails,searchProducts)=>{
              dispatch(ProductActions.Search(searchDetails,searchProducts));
          }
    };
  };

export default connect(getDataFromStore,mapReducerToStore)(Header);
