import { ProductsList } from "components";

const ProductsSection = ({ title, products }) => (
  <section className="container mx-auto space-y-8">
    <h3 className="font-bold text-gray-600 text-[15px]">{title}</h3>
    <ProductsList products={products} />
  </section>
);

export default ProductsSection;
