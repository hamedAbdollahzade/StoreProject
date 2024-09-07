const ProductItem = () => {
  return (
    <div>
      <img className="rounded-t" src="https://picsum.photos/200/300" alt="pic" />
      <div className="flex justify-between p-4">
        <span>55$</span>
        <h3>عنوان محصول </h3>
      </div>
    </div>
  );
};

export default ProductItem;
