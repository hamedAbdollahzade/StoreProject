import { IProduct } from "../../types/server";

type TProductItem = IProduct;

const ProductItem = ({ description, image, price, title }: TProductItem) => {
  return (
    <div className="shadow border rounded h-96 pb-4 pt-5">
      <img className="rounded-t w-full h-36 object-contain" src={image} alt="pic" />
      <div className="flex justify-between px-2 mt-4">
        <h3> {title} </h3>
        <span>{price}$</span>
      </div>
      <div>
        <p className="px-2 line-clamp-3 text-right">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
