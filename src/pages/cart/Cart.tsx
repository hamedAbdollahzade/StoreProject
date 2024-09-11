import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Cart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      <Container>
        <h1>سبد خرید شما</h1>
        <div>
          {cartItems.map((items) => (
            <CartItem key={items.id} {...items} />
          ))}
        </div>
        <div>
          <p>مجموع خرید شما : 2000 تومان</p>
          <p>تخفیف شما : 2000 تومان</p>
          <p>قیمت نهایی : 2000 تومان</p>
        </div>
        <Button className="mt-3" variant="success">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
};

export default Cart;
