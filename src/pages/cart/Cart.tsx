import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";

const Cart = () => {
  return (
    <div>
      <Container>
        <h1>سبد خرید شما</h1>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
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
