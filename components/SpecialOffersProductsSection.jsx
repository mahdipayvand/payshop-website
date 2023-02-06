import { SpecialOffersProductsList } from "components";

const SpecialOffersProductsSection = ({ products }) => (
  <section className="-mt-12 md:mt-0 -mx-5 md:container md:mx-auto bg-violet-500 p-2.5 md:p-5 pl-0 md:pl-0.5 md:rounded-2xl">
    <SpecialOffersProductsList products={products} />
  </section>
);

export default SpecialOffersProductsSection;
