import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ slides }) => (
  <section className="-mt-10 -mx-5 lg:mx-0">
    <Swiper
      loop
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }}
    >
      {slides?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            width={1440}
            height={360}
            src={process.env.NEXT_PUBLIC_API_URL + slide.image}
            className="w-full h-[210px] md:h-[360px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Slider;
