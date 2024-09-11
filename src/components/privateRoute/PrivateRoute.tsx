import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const PrivateRoute = () => {
  const { isLogin } = useShoppingCart();

  return <>{isLogin ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
