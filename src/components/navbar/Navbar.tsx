import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar = () => {
  const { totalQty, handleLogOut, isLogin } = useShoppingCart();

  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between  flex-row-reverse">
          <ul className="flex gap-4">
            <li>
              <Link to={"/store"}>فروشگاه</Link>
            </li>
            <li>
              <Link to={"/"}>خانه</Link>
            </li>
          </ul>

          <div className="flex ">
            <div>
              <Link className="relative" to={"/cart"}>
                <button>
                  سبد خرید{" "}
                  <span className="bg-red-500 text-white absolute -left-10 top-0 h-8 w-8 flex justify-center items-center rounded-full ">
                    {totalQty}
                  </span>
                </button>
              </Link>
            </div>
            {isLogin ? (
              <button
                className="mx-7 bg-red-400 p-1 rounded"
                onClick={() => handleLogOut()}
              >
                LogOut
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
