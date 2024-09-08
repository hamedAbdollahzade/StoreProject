import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";

const Cart = () => {
  return (
    <div>
      <Container>
        <h1>سبد خرید شما</h1>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Container>
    </div>
  );
};

export default Cart;
