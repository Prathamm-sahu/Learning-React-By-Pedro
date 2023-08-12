import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { cartItem, addToCart, removeFromCart, updateCartitemCount } = useContext(ShopContext);

    
  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input type="number" value={cartItem[id]} onChange={(e) => updateCartitemCount(e.target.value, id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
        
    </div>
  )
}
