import React from 'react'
import { PRODUCTS } from '../../product';
import { Products } from './Products';
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className="shopTitle">
            <h1>Pratham's Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
                <Products data={product} />
            ))}
        </div>
    </div>
  )
}
