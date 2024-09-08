const CartItem = () => {
  return (
    <div className="flex m-4">
      <div>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="flex-1 pl-4 ">
        <h3>Product Name</h3>
        <p>Price: $100</p>
      </div>
    </div>
  );
};

export default CartItem;
