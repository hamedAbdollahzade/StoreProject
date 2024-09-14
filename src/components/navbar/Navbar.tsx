import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const { totalQty, handleLogOut, isLogin } = useShoppingCart();

  return (
    <div className="bg-gray-400 h-20 border-b shadow  flex items-center ">
      <Container>
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 ">
            <li>
              <Link className="text-xl font-bold " to={"/"}>
                <span> خانه</span>
              </Link>
            </li>
            <li>
              <Link className="text-xl font-bold " to={"/store"}>فروشگاه</Link>
            </li>
          </ul>




          <div className="flex ">
            <div>
              <Link className="relative" to={"/cart"}>
                <button>
                  <TiShoppingCart className="text-5xl" />
                  <span className="bg-red-500 text-white text-sm absolute left-0 bottom-0 h-6 w-6 flex justify-center items-center rounded-full ">
                    {totalQty}
                  </span>
                </button>
              </Link>
            </div>
            {isLogin ? (
              <button
                className="mx-7 bg-red-400 p-2 shadow rounded-full"
                onClick={() => handleLogOut()}
              >
                خروج
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
