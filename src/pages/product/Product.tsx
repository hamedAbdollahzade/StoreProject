import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Product = () => {
  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    hendleRemoveProduct,
  } = useShoppingCart();
  const [product, setProduct] = useState<IProduct>({});

  const params = useParams<{ id: string }>();

  useEffect(() => {
    getProduct(params.id as string).then((data) => setProduct(data));
  }, []);

  console.log(cartItems);
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
            {getProductQty(parseInt(params.id as string)) == 0 ? (
              <>
                <Button
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                  style={{ padding: "2px 6px" }}
                  variant="success"
                >
                  add to cart
                </Button>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <Button
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    style={{ padding: "2px 6px" }}
                    variant="success"
                  >
                    +
                  </Button>

                  <div>{getProductQty(parseInt(params.id as string))}</div>
                  <Button
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                    style={{ padding: "2px 6px" }}
                    variant="danger"
                  >
                    -
                  </Button>
                </div>
                <Button
                  onClick={() =>
                    hendleRemoveProduct(parseInt(params.id as string))
                  }
                  style={{ padding: "2px 6px" }}
                  variant="danger"
                >
                  Remove from cart
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
