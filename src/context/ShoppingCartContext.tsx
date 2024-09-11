import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IShoppingCartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}
interface IShoppingCartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  hendleRemoveProduct: (id: number) => void;
  totalQty: number;
  isLogin: boolean;
  handleLogin: () => void;
  handleLogOut: () => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

// CustomHook :
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  //  -----------------------------------------------------------------
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "cartItems",
    []
  );
  // ---------------------handleIncreaseProductQty--------------------
  const handleIncreaseProductQty = (id: number) => {
    // Increase product quantity
    setCartItems((currentItems) => {
      // eslint-disable-next-line prefer-const
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else return item;
        });
      }
    });
  };
  // --------------------------------------------------------------
  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else return item;
        });
      }
    });
  };
  // -------------------------------------------------------------------
  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };
  // -------------------------------------------------------------------
  const hendleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };
  // -------------------------------------------------------------------
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  // -------------------------------------------------------------------------
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
    // Simulate login logic
    //...
  };
  const handleLogOut = () => {
    setIsLogin(false);
    // Simulate logout logic
    //...
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        hendleRemoveProduct,
        totalQty,
        isLogin,
        handleLogin,
        handleLogOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
