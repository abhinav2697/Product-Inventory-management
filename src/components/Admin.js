import React, {useEffect,useState} from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import '../CSS/ProductsCard.css'
import * as ProductActions from '../actions/ProductActions'

import { connect } from "react-redux";
import EditProduct from './EditProduct'


import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';


 const Admin= (props) => {
  const [openDialog,setOpenDialog] = useState(false)
  let history=useHistory();
  function fetchAllProducts(){
    props.getAllProducts()
  }
  useEffect(() => {
    fetchAllProducts();
  },[]);
  const allProducts = props.products.map((eachProduct) => <div>
       {eachProduct.ProductName}
  </div>)
  const handleClickOpen = (productId) => {
    props.getProductDetail(productId)
    setTimeout(() => {
    setOpenDialog(true);
    }, 500);

};

const handleEditClose = () =>{
  props.getAllProducts();

  setOpenDialog(false)
}

function handleClickDelete(id){
    alert("are you sure want to delete this product");
    fetch(`http://localhost:4000/products/${id}`,{
      method:'DELETE'
    }).then((result)=>{
        result.json().then((response)=>{
          console.warn(response)
          props.getAllProducts();
        })
    })
   
}
console.warn(props.products)
  return (
    <div>
      <Link to="/AddProduct">
        <Button className="create__btn" variant="primary" type='submit'>
       ADD Product
        </Button>
      </Link>

      <Paper className="paper" elevation={1} variant="outlined" square>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>ProductName</TableCell>
            <TableCell align="right">ProductDescription</TableCell>
            <TableCell align="right">Manufacturer</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map(product => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.ProductName}
              </TableCell>
              <TableCell align="right">{product.ProductDescription}</TableCell>
              <TableCell align="right">{product.Manufacturer}</TableCell>
              <TableCell align="right">{product.Quantity}</TableCell>
              <TableCell align="right">{product.Price}</TableCell>
              <TableCell>
                  <EditIcon style={{color:'#F9AA33'}} onClick={() => handleClickOpen(product.id)}  edit='true'></EditIcon>
              <DeleteIcon style={{color:'#4169E1'}} onClick={()=>handleClickDelete(product.id)}></DeleteIcon>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  <Dialog open={openDialog} onClose={handleEditClose} aria-labelledby="form-dialog-title" fullWidth={true}>
        <DialogTitle id="form-dialog-title"><h2>Edit Product</h2></DialogTitle>
         <EditProduct handleClose={handleEditClose}/>
      </Dialog>
    </div>
  );
}


const getDataFromStore = (state) => {
  return {
    products: state.productReducer.allProducts
  }
}

const callReducer = (dispatch) => {
  return {
    getAllProducts: () =>
      dispatch(ProductActions.getAllProducts()),
    getProductDetail: (productId) =>
      dispatch(ProductActions.getProductDetail(productId))
  };
}

export default connect(getDataFromStore,callReducer)(Admin);