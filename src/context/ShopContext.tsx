import React, { createContext, ReactNode, useState } from "react";
import allProduct from "@/assets/product/all_product";

// Define the type for the context
type ShopContextType = {
  allProduct: typeof allProduct;
  cartItems: Cart;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

type Cart = {
  [key: number] : number;
}

const getDefaultCart = () => {
  let cart: Cart = {};
  for (let index = 0; index < allProduct.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

// Provide a default value for the context
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Define the props type, including children
type Props = {
  children: ReactNode;
};

const ShopContextProvider = ({ children }: Props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  const addToCart = (itemId:number)=> {
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  }

  const removeFromCart = (itemId:number)=> {
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


  const contextValue = { allProduct, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
