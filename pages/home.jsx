import { Slider, SpecialOffersProductsSection, ProductsSection } from "components";

const Home = ({ slides, specialOffers, products }) => {
  return (
    <>
      <Slider slides={slides} />
      {specialOffers.length > 0 && <SpecialOffersProductsSection products={specialOffers} />}
      <ProductsSection title="آخرین محصولات" products={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  const slidesReq = fetch(`${process.env.NEXT_PUBLIC_API_URL}/slide`).then((slidesReq) => slidesReq.json());

  const specialOffersReq = fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/special-offers`).then((specialOffersReq) =>
    specialOffersReq.json(),
  );

  const productsReq = fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`).then((productsReq) => productsReq.json());

  const [slidesRes, specialOffersRes, productsRes] = await Promise.all([slidesReq, specialOffersReq, productsReq]);

  return {
    props: {
      slides: slidesRes?.successful ? slidesRes?.data : [],
      specialOffers: specialOffersRes?.successful ? specialOffersRes?.data : [],
      products: productsRes?.successful ? productsRes?.data : [],
    },
  };
};

export default Home;
