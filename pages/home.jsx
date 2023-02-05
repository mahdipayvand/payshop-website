import { ProductsSection, Slider } from "components";

const Home = ({ slides, products }) => {
  return (
    <>
      <Slider slides={slides} />
      <ProductsSection title="آخرین محصولات" products={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  const slidesReq = fetch(`${process.env.NEXT_PUBLIC_API_URL}/slide`).then((slidesReq) => slidesReq.json());
  const productsReq = fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`).then((productsReq) => productsReq.json());

  const [slidesRes, productsRes] = await Promise.all([slidesReq, productsReq]);

  return {
    props: {
      slides: slidesRes?.successful ? slidesRes?.data : [],
      products: productsRes?.successful ? productsRes?.data : [],
    },
  };
};

export default Home;
