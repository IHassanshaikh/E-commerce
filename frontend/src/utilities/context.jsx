import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [message, setMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });

    setCartCount((prevCount) => prevCount + quantity);
    setCartTotal((prevTotal) => prevTotal + product.price * quantity);
    setMessage(`${product.name} has been added to the cart.`);
    setTimeout(() => setMessage(''), 3000);
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    const product = cartItems.find(item => item.id === id);
    setCartCount(cartCount + 1);
    setCartTotal(cartTotal + product.price);
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    const product = cartItems.find(item => item.id === id);
    setCartCount(cartCount - 1);
    setCartTotal(cartTotal - product.price);
  };

  const handleRemove = (id) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    setCartCount(cartCount - itemToRemove.quantity);
    setCartTotal(cartTotal - itemToRemove.price * itemToRemove.quantity);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        category,
        setCategory,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartTotal,
        setCartTotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        handleRemove,
        message
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
