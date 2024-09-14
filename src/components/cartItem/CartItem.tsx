import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import Button from "../button/Button";
import { IProduct } from "../../types/server";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
interface ICartItem {
  id: number;
  qty: number;
}

const CartItem = ({ id, qty }: ICartItem) => {
  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    hendleRemoveProduct,
  } = useShoppingCart();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="flex m-4 border-b pb-2">
      <Link to={`/product/${id}`}>
        <img className="w-20" src={product?.image} alt="" />
      </Link>
      <div className="flex-1 pl-4 ">
        <h3>{product?.title}</h3>
        <p>Price: ${product?.price}</p>
        <Button onClick={() => handleIncreaseProductQty(id)} variant="primary">
          +
        </Button>
        <span>{qty}</span>
        <Button onClick={() => handleDecreaseProductQty(id)} variant="primary">
          -
        </Button>
        <Button onClick={() => hendleRemoveProduct(id)} variant="danger">
          حذف   
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
