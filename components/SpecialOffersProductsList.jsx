import { Swiper, SwiperSlide } from "swiper/react";
import { SpecialOffersProductItem } from "components";
import Image from "next/image";

const SpecialOffersProductsList = ({ products }) => (
  <Swiper
    spaceBetween={1.5}
    slidesPerView={2.5}
    breakpoints={{
      "@0.50": { slidesPerView: 3.5 },
      "@0.75": { slidesPerView: 4.5 },
      "@1.00": { slidesPerView: 5.5 },
      "@1.10": { slidesPerView: 6.5 },
    }}
  >
    <SwiperSlide className="[&>a]:first:rounded-r-lg [&>a]:last:rounded-l-lg flex flex-col items-center my-auto gap-y-6">
      <Image src="/amazings.svg" width={80} height={80} />
      <Image src="/electronics.png" width={100} height={100} />
    </SwiperSlide>
    {products?.map((product) => (
      <SwiperSlide key={product.id} className="[&:nth-child(2)>a]:rounded-r-lg [&>a]:last:rounded-l-lg">
        <SpecialOffersProductItem {...product} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SpecialOffersProductsList;
