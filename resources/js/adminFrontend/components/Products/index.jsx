import React from 'react';
import ProductItem from './ProductItem/index';

const Products = ({editProduct,deleteProduct,products}) => {
    const  productList = products.map(
        product=>
        <ProductItem 
            product={product} 
            key={product.id} 
            editProduct = {editProduct}
            deleteProduct={deleteProduct}
            />)
    return (
        <tbody>
            {productList}
        </tbody>
    );
};

export default Products;