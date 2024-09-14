import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Login } from "../services/api";
import { useNavigate } from "react-router-dom";

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
  handleLogin: (username: string, password: string) => void;
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
      // eslint-disable-next-line prefer-const
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
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      navigate("/");
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    Login(username, password).finally(() => {
      // eslint-disable-next-line prefer-const
      let token = "AjaghVagaghToken2024";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/cart");
    });
  };

  const handleLogOut = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
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
