import React, { createContext, useContext, useState } from "react";

interface IShoppingCartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: string;
  qyt: number;
}
interface IShoppingCartContext {
  cartItems: ICartItem[];
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

// CustomHook :
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
