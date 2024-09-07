import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";

const Store = () => {
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات </h1>
        {/* Start Product Contents */}
        <div className="grid grid-cols-4 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  );
};

export default Store;
