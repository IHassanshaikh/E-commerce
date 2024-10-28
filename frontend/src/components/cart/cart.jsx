import './cart.css';
import React, { useContext } from 'react';
import { Context } from '../../utilities/context';
import emptrycart from '../../assets/emptycart.png'

const Cart = () => {
  const { cartItems, cartCount, cartTotal, increaseQuantity, decreaseQuantity, handleRemove } = useContext(Context);

  const calculateTotal = () => {
    return cartTotal.toFixed(2);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty</h4>
          <p>Add some products to your cart to get started!</p>
          <img className='img-fluid' src={emptrycart} alt="" />
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>RS {item.price.toFixed(2)}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                      {item.quantity}
                      <button className="btn btn-secondary btn-sm ms-2" onClick={() => increaseQuantity(item.id)}>+</button>
                    </td>
                    <td>RS {(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="summary_card card">
              <div className="cart_summary card-header bg-primary text-white">
                Cart Summary
              </div>
              <div className="calculation card-body">
                <h5 className="calculated_price card-title">Total: RS {calculateTotal()}</h5>
                <button className="checkout_button btn btn-success btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
