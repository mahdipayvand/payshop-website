import { Autoplay } from "swiper";
import { ProductItem } from "components";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductList = ({ products }) => (
  <Swiper
    loop
    spaceBetween={30}
    slidesPerView={2}
    modules={[Autoplay]}
    autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }}
    breakpoints={{
      "@0.50": { slidesPerView: 2 },
      "@0.75": { slidesPerView: 3 },
      "@1.00": { slidesPerView: 4 },
      "@1.10": { slidesPerView: 5 },
      "@1.20": { slidesPerView: 6 },
      "@1.50": { slidesPerView: 7 },
    }}
  >
    {products?.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductItem {...product} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProductList;
