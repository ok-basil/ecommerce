import React, { createContext, ReactNode } from "react";
import allProduct from "@/assets/product/all_product";

// Define the type for the context
type ShopContextType = {
  allProduct: typeof allProduct;
};

// Provide a default value for the context
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Define the props type, including children
type Props = {
  children: ReactNode;
};

const ShopContextProvider = ({ children }: Props) => {
  const contextValue = { allProduct };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
