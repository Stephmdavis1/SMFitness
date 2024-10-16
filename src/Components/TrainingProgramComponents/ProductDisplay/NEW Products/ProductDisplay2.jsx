import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";
import {getProductData} from "../Assets/getProductData";

export const TrainingProgramsContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => {},
});



const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
};



const TrainingProgramsContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  function getProductQuantity(id) {
    const quantity = cartItems.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) { //product is not in cart
      setCartItems(
        [
          ...cartItems, {
            id: id,
            quantity: 1
          }
        ]
      )
     }else { //product is in cart
      [
        setCartItems(
          cartItems.map( 
            product =>product.id === id ? { ...product, quantity: product.quantity + 1} //if statement false
            : product                                                                   //if statement true
          )
        )
      ]
     }
  }


    function removeFromCart(id) {
      setCartItems(
        cartItems => cartItems.filter(currentProduct => {
          return currentProduct.id != id;
        })
      )
    }



    function getTotalCartAmount() {
      let totalAmount = 0;
      cartItems.map((cartItem) => {
        const productData = getProductData(cartItem.id);
        totalAmount += (productData.price * cartItem.quantity);
      })
      return totalAmount
    }


   




  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };
// const getTotalCartAmount = () => {
//   let totalAmount = 0;
//   for (const item in cartItems)
//   {
//     if (cartItems[item] > 0)
//     {
//       let itemInfo = all_product.find((product) => product.id === item)
//       totalAmount += itemInfo.new_price * cartItems[item];
//     }
//   }
//   return totalAmount;
// }

const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in cartItems)
  {
    if(cartItems[item] > 0)
    {
      totalItem += cartItems[item];
    }
  }
  return totalItem;
}

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

  return (
    <TrainingProgramsContext.Provider value={contextValue}>
      {props.children}
    </TrainingProgramsContext.Provider>
  );
};

export default TrainingProgramsContextProvider;
