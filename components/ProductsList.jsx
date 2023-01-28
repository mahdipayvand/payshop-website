import { ProductItem } from "components";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductList = ({ products }) => (
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{ "@0.75": { slidesPerView: 2 }, "@1.00": { slidesPerView: 3 }, "@1.10": { slidesPerView: 7 } }}
  >
    {products?.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductItem {...product} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProductList;
