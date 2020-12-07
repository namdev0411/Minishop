import React from 'react';
import ProductItem from './ProductItem/index';

const Products = props => {
    const  productList = props.products.map(
        product=>
        <ProductItem 
            product={product} 
            key={product.id} 
            editProduct = {props.editProduct}
            deleteProduct={props.deleteProduct}
            />)
    return (
        <tbody>
            {productList}
        </tbody>
    );
};

export default Products;