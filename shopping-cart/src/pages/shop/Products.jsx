import React from 'react'
import {ShopContext} from '../../context/shop-context'

export const Products = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItem } = React.useContext(ShopContext)
    const cartItemAmount = cartItem[id];

  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="description">
          <p className='productName'>
            <b>{productName}</b>
          </p>
          <p className='price'>${price}</p>
          <button className='addToCartBttn' onClick={() => addToCart(id)}>Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
        </div>
    </div>
  )
}
