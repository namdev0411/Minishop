import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './ProductForm.scss';
import useKeyPress from '../../Customhook/useKeyPress';

const ProductForm = ({dataform,products,reGetProducts,toggleForm}) => {
    const [isOpen, setisOpen] = useState(false);
    const [method, setmethod] = useState("post");
    const [name, setname] = useState("");
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    useEffect(()=>{
        if(dataform){
            const {productId,type} = dataform;
            switch(type){
                case "add":{
                    setmethod("post");
                    break;
                }
                case "edit":{
                    setmethod("put");
                }
            }  
            if(productId){
                const product = products.find(product=>product.id===productId);
                const {name,price,description} = product;
                setname(name);
                setprice(price);
                setdescription(description);
            }else{
               resetValueForm();
            }
            setisOpen(!isOpen);
        }
    },[toggleForm]);
    const resetValueForm = ()=>{
        setname("");
        setprice("");
        setdescription("");
    }
    const  onCallApi = ()=>{
        if(dataform){
            const {productId} = dataform;
            const data = {id:productId,name,price,description};
            const url = method === "post" ? 
            `http://localhost:8000/api/products`:
            `http://localhost:8000/api/products/${productId}`;
            Axios({
                method,
                url,
                data
            })
            .then(res=> {
                const {message} = res;
                console.log(message);
                reGetProducts();
            })
            .catch(err=>console.log(err));
        }
        setisOpen(!isOpen);
    }
    if(useKeyPress('Enter') === true && isOpen === true){
        onCallApi();
    }
    
    return (
        <div className={!isOpen ? "productForm": "productForm active"}>
            <div className="form-group">
            <h1 className="text-center">{dataform?dataform.type.toUpperCase():""}</h1>
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input id="name" 
                    type="text" 
                    value={name} 
                    className="form-control d-inline"
                    onChange={e=>setname(e.target.value)}
                    />
                </div>
                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input id="price"
                     type="text" 
                     value={price} 
                     className="form-control d-inline"
                     onChange={e=>setprice(e.target.value)}
                     />
                </div>
                <div className="row">
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" 
                    value={description} 
                    className="form-control d-inline" 
                    rows="3"
                    onChange={e=>setdescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="btn-wrap">
                    <button type="button" 
                            className="btn btn-secondary ml-4"
                            onClick={resetValueForm}
                            >Reset</button>
                    <button type="button" 
                            className="btn btn-primary col-6 ml-4"
                            onClick={onCallApi}
                    >Sumit</button>
                </div> 
            </div>
            <button 
                type="button" 
                className="btn btn-primary btn-close"
                onClick={()=>setisOpen(!isOpen)}
                ><i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default ProductForm;