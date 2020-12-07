import React, { useEffect, useState } from 'react';
import ProductItem from './components/ProductItem/index';
import './Products.scss';
import { useDispatch } from 'react-redux';
import {allProducts} from './redux/productSlice';
import Axios from 'axios';
import Topic from '../../components/Topic/index';

const Products = props => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const setProductsToRedux =(products)=>{
        const action = allProducts(products);
        dispatch(action);
    }
    useEffect(() => {
        const url = 'http://localhost:8000/api/products';
        async function fetchData(){
          const res=  await Axios.get(url);
          const data = await res.data;
          setProducts(data);
          setProductsToRedux(data);
          console.log(data);
        }
        fetchData();
      }, []);

    return (
        <div>
            <Topic/>
            <section className="product-section spad">
                <div className="container">
                    <ul className="product-filter controls">
                        <li className="control" data-filter=".new">Sản phẩm mới</li>
                        <li className="control" data-filter="all" >Khuyên dùng</li>
                        <li className="control" data-filter=".best">Bán chạy</li>
                    </ul>
                    <div className="row" id="product-filter">
                    {
                        products&&products.length>0?products.map((product,index)=>{
                            return <ProductItem product={product} key={index}/>
                        }) : 0
                    }
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Products;
