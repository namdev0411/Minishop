import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss'
import ProductForm from './components/Products/ProductForm/index'
import  Product from './components/Products/index';
import Axios from 'axios';

function App() {
  const [products, setproducts] = useState([]);
  const [dataform, setdataForm] = useState();
  const [toggleForm, settoggleForm] = useState(false);
  const [update, setupdate] = useState(false);
  const [deleteId, setdeleteId] = useState();
  const [areUSureForm, setareUSureForm] = useState(false);

  const getProducts = ()=>{
    const url = "http://localhost:8000/api/products";
    fetch(url).then(data=>data.json())
              .then(data=>{
                setproducts(data);
              })
    return false;
  }
  const addProduct = ()=>{
    const type = "add";
    setdataForm({productId:null,type});
    settoggleForm(!toggleForm);
  }
  const editProduct = productId=>{
    const type = "edit";
    setdataForm({productId,type})
    settoggleForm(!toggleForm);
  }
  const deleteProduct = (productId)=>{
    setareUSureForm(true);
    setdeleteId(productId);
  }
  const deleteApi = (id)=>{
    const url = `http://localhost:8080/product/remove`;
    const intId = parseInt(id);
    const data = {id:intId};
    Axios
    .post(url,data)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>console.log(err));
    setareUSureForm(false);
    reGetProducts();
  }
  const reGetProducts = ()=>{
    setupdate(!update);
  }
  useEffect(() => {
    getProducts();
  }, [update])
  return (
    <div className="App">
        <h1 className="text-center text-primary m-3">List Product</h1>
        <button className="btn btn-primary add__button col-3" onClick={addProduct}>Add</button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <Product 
            products={products} 
            editProduct = {editProduct}
            deleteProduct ={deleteProduct}
            />
        </table>
        {/* hide-default*/}
        <ProductForm  
          dataform={dataform} 
          toggleForm={toggleForm} 
          reGetProducts={reGetProducts}
          products = {products}
          />
          <div className={!areUSureForm?"areYouSureForm col-lg-6 col-md-4":"areYouSureForm active col-lg-6 col-md-4"}>
            <p className="h1 text-danger text">Are you Sure?</p>
            <div className="btnGroup">
              <button type="button" className="btn btn-primary col-lg-3 mr-4" onClick={()=>deleteApi(deleteId)}>YES</button>
              <button type="button" className="btn btn-outline-dark col-lg-3" onClick={()=>setareUSureForm(false)}>NO</button>
            </div>
          </div>
          <div className={areUSureForm?"manchan":"manchan active"}></div>
    </div>
  );
}

export default App;
