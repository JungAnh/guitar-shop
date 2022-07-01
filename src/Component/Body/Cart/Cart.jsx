import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteCart } from '../../../redux/cartSlice';
import './Cart.scss';



const Cart = () => {
  const [quantity, setQuatity] = useState(1);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
   const handleDeleteCart = (item) => {
    dispatch(deleteCart(item));
   }

  return (
    <div className='cart'>
      
      <div className="cart-title">
        <h2>Your Cart:</h2>
      </div>
      <div className="cart-container">
        <h3 className='cart-container-text'>You don't have any products in your cart yet.</h3>
        <Link to="/productpage" className="header--icon">
          <button>Product</button>
        </Link>
      </div>
      <div className="cart-total">
        <h3>Total:</h3>
        <h3>$0.00</h3>
      </div>
    </div>
  )
}

export default Cart