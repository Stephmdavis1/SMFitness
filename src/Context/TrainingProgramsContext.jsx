import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";
import { new_products, getProductData } from "../Assets/getProductData";

export const TrainingProgramsContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < all_product.length+1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

const TrainingProgramsContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
   const quantity = cartProducts.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if(quantity == 1) {
      deleteFromCart(id)
    }else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  }


  function deleteFromCart(id) {
    setCartProducts(
      cartProducts=> cartProducts.filter(currentProduct => {
        return currentProduct.id != id;
      })
    )
  }


  function getTotalCost() {
  let totalCost = 0;
  cartProducts.map((cartItem) => {
    const productData = getProductData(cartItem.id);
    totalCost += (productData.new_price * cartItem.quantity)
  });
  return totalCost;
  }



  //   const [cartItems, setCartItems] = useState(getDefaultCart());

  //  const addToCart = async (itemId) => {
  //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   };

  //   const removeFromCart = (itemId) => {
  //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  //   };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems)
  //   {
  //     if (cartItems[item] > 0)
  //     {
  //       let itemInfo = new_products.find((product) => product.id === item)
  //       totalAmount += itemInfo.new_price * cartItems[item];
  //     }
  //   }
  //   return totalAmount;
  // }

  // const getTotalCartItems = () => {
  //   let totalItem = 0;
  //   for (const item in cartItems)
  //   {
  //     if(cartItems[item] > 0)
  //     {
  //       totalItem += cartItems[item];
  //     }
  //   }
  //   return totalItem;
  // }

  const contextValue = {
    items: cartProducts,
    all_product,
    // cartItem,
    // addToCart,
    // removeFromCart,
    // getTotalCartAmount,
    // getTotalCartItems,
    cartProducts,
    new_products,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <TrainingProgramsContext.Provider value={contextValue}>
      {children}
    </TrainingProgramsContext.Provider>
  );
};

export default TrainingProgramsContextProvider;
