import Button from "../button/Button";

const CartItem = () => {
  return (
    <div className="flex m-4 border-b pb-2">
      <div>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="flex-1 pl-4 ">
        <h3>Product Name</h3>
        <p>Price: $100</p>
        <Button variant="primary">+</Button>
        <span>{2}</span>
        <Button variant="primary">-</Button>
        <Button variant="danger">Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
