import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

const Product = () => {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className=" shadow  mt-4 grid grid-cols-12  ">
          <div className=" col-span-10 text-right p-4">
            <h1>عنوان محصول </h1>
            <div>
              <div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p>قیمت : 25$ </p>
              </div>
            </div>
            <h1>ایدی محصول :{params.id}</h1>
          </div>

          <div className=" col-span-2 p-4 bg-sky-200">
            <img
              className=" rounded"
              src="https://picsum.photos/id/237/200/300"
              alt="img"
            />
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
