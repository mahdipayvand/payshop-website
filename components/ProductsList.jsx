import { ProductItem } from "components";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductList = ({ products }) => (
  <Swiper slidesPerView={7} spaceBetween={30}>
    {products.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductItem {...product} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProductList;
