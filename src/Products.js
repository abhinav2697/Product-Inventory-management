import React ,{useState,useEffect}from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import proData from './proData';
import { connect } from "react-redux";
import './Products.css';
import Product from './Product';
import * as ProductActions from "../src/actions/ProductActions";
import Card from '@material-ui/core/Card';




function Products(props) {
    const [openDialog,setOpenDialog] = useState(false)

    function fetchAllProducts(){
        props.getProducts()
        console.log(props)
      }
      useEffect(() => {
        fetchAllProducts();
      },[]);
     
    
   
    return (
        <div className="products">
            <h1 className="products__banner">What's new in the Shippify range?</h1> 
            <div className="products__paraph">
                <h3 className="products__paraphTitle">See the new products per category</h3>
                <p className="products__paraphDetail">
                    At Shippify, we're always innovating. That's why we're proud to 
                    present our new furniture, home accessories,electronics and more. The new products 
                    are convenient and give your interior a fresh new look. Get 
                    inspired by this season's ideas and looks.</p>
            </div>

          
            <div className="products__recommd">
                <h3 className="products__paraphTitle">Recommended products</h3>
                <button>See all new products</button>
            </div>
            {
              props.search ? (
                <div className="products__row">
                {props.searchedProduct.map(product=>(
                <Card  style={{height:'400px'}} >
                <Product 
                    ProductName={product.ProductName}
                    Description={product.ProductDescription}
                    Manufacturer={product.Manufacturer}
                    Price={product.Price}
                    Quantity={product.Quantity}
                />
                 </Card> 
                
                 ))}
                 </div>

              ):(
                <div className="products__row">
            {props.products.map(product => (
                <Card  style={{height:'400px'}} key={product.id}>
                <Product 
                    ProductName={product.ProductName}
                    Description={product.ProductDescription}
                    Manufacturer={product.Manufacturer}
                    Price={product.Price}
                    Quantity={product.Quantity}
                />
                
                 </Card> 
                 ))}
                </div>

              )
            }
            
           

            <div className="products__nowRow">
                <div className="products__new">
                    <h3 className="products__paraphTitle">A breath of fresh air for your interior</h3>
                    <p>Shoo away the stale with new products in fresh tones.</p>
                </div>
                
                <div className="products__gridRoot">
                    <GridList cellHeight={360} cols={3} >
                        {proData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1} className="products__gridTile">
                                <img src={tile.img} alt={tile.title} className="MuiGridListTile-root products__gridImg" />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

const getDataFromStore = (state) => {
    return {
      products: state.productReducer.allProducts,
      search:state.productReducer.isSearched,
      searchedProduct:state.productReducer.Searcheddata
      
    }
  }
  

const mapReducerToStore = (dispatch) => {
    return {
      getSearched:()=>{
        dispatch(ProductActions.Search());
      },
     
      getProducts: () => {
        dispatch(ProductActions.getAllProducts());
      },
    };
  };

  export default connect(getDataFromStore, mapReducerToStore)(Products);

