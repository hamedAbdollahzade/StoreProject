import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";

const Product = () => {
  const [product, setProduct] = useState<IProduct>({});

  const params = useParams<{ id: string }>();

  useEffect(() => {
    getProduct(params.id as string).then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <Container>
        <div className=" shadow  mt-4 grid grid-cols-12  ">
          <div className=" col-span-10 text-right p-4">
            <h1>{product.title} </h1>
            <div>
              <div>
                <p>{product.description}</p>
                <p> {product.price}$ </p>
              </div>
            </div>
            <h1>ایدی محصول :{product.id}</h1>
          </div>

          <div className=" col-span-2 p-4 bg-sky-200">
            <img className=" rounded" src={product.image} alt="img" />
            <div>
              <Button style={{ padding: "2px 6px" }} variant="success">
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
