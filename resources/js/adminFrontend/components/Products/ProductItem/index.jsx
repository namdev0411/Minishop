import React from 'react';
import './ProductItem.scss';

const ProductItem = props => {
    const {product,editProduct,deleteProduct} = props;
    const {id,name,price,description,image} = product;
    return (
        <tr className="productItem">
            <td>{name}</td>
            <td>{price}</td>
            <td>{image && image.url ? <img src={image.url} alt="Opp"/> : ""}</td>
            <td>{description}</td>
            <td>
                <button type="button" className="btn btn-warning col-3 ml-2" onClick={()=>editProduct(id)}>Edit</button>
                <button type="button" className="btn btn-danger col-4 ml-2" onClick={()=>deleteProduct(id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ProductItem;