import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AllProductsPage from './components/AllProductsPage';
import About from './components/About'
//import {Link } from 'react-router-dom'
import AddProduct from './components/AddProduct';
//import ProductView from './components/ProductView';
import Header from '../src/Header'
import Login from './Login'
import Home from './Home'
import Signup from './SignUp';
import Footer from './Footer'
import './App.css';
import Products from './Products';
import Checkout from './Checkout'
import Admin from '../src/components/Admin';


export function App() {
  return (
      <Router>
        <div class Name="app">
          <Switch>
          <Route path="/Checkout">
            <Header/>
            <Checkout />            
          </Route>

          <Route path="/login">
            <Header/>
            <Login/>
          </Route>
          <Route path="/SignUp">
            <Header/>
            <Signup/>
            
          </Route>
          <Route exact path="/about">
          <About/>
        </Route>
        <Route path="/products">
            <Header/>
            <Products/>
            <Footer/>
          </Route>

          <Route path="/Admin">
            <Header/>
            <Admin/>
            <Footer/>
          </Route>
          
        <Route exact path="/AddProduct">
          <Header/>
          <AddProduct/>
          <Footer/>
        </Route>

        
        <Route exact path="/AllProductsPage">
          <AllProductsPage/>
        </Route>
        <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        
          </Switch>
          </div>
          </Router> 
      //  {/* <Link to="/">About</Link>&emsp;  */}
      // <Link to="/products">Products</Link>&nbsp; 
      //  {/* <Route exact path="/" component={About} ></Route>  */}
      //  <Route exact path="/products" component={AllProductsPage}></Route> 
      // <Route exact path="/AddProduct" component={AddProduct}></Route>
      // <Route exact path="/ProductView/:ProductName" component={ProductView}>
        // {/* </Route>  */}
        
      
     


  
  );
}

export default App;
