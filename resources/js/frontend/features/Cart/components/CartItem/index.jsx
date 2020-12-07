import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './CartItem.scss';
const CartItem = ({onChangeValue,deleteCart,item}) => {
    if(item){
    const {id,name,price,quantity} = item;
        return ( 
            <tbody>
                <tr>
                <td className="product-col">
                    <div className="pc-title">
                        <h4>{name}</h4>
                    </div>
                </td>
                <td className="price-col">{price}</td>
                <td className="quy-col">
                    <div className="quy-input">
                        <ButtonGroup size="sm">
                            <Button className={quantity===1?"disabled":""} onClick={()=>onChangeValue({type: "-",id})}><i className="fas fa-minus"></i></Button>
                            <span className="quantity">{quantity}</span>
                            <Button onClick={()=>onChangeValue({type: "+",id})}><i className="fas fa-plus"></i></Button>
                        </ButtonGroup>
                    </div>
                </td>
                <td className="total-col">{`${quantity+price} VND`}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteCart(id)}>Delete</button></td>
            </tr>
            </tbody>
        );
    }else{
        return(
            <tr>
                <td className="product-col">
                    <div className="pc-title">
                        <h4>no item</h4>
                        <p>Edit Product</p>
                    </div>
                </td>
            </tr>
        )
        
    }  
};

CartItem.propTypes = {
    
};

export default CartItem;