import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import * as s from "./Slider.module.scss";

interface SliderProps {
  items: { id: string; img: string; title: string; titleDescription: string; description: string }[];
}

const Slider: FC<SliderProps> = ({ items }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={145}
      slidesPerView={3}
      grabCursor={true}
      breakpoints={{
        1200: {
          spaceBetween: 145,
        },
        1110: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        0: {slidesPerView: 1,}
      }}
      className={s.slider}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className={s.slide}>
          <div
            className={s.content}
            style={{
              backgroundImage: `url(${item.img})`,
            }}>

            <div className={s.TitleContainer}>
              <p>{item.id}</p>
              <h4 className={s.title_4}>{item.title}</h4>
            </div>

            <div className={s.DescriptionContainer}>
              <h4>{item.titleDescription}</h4>
              <h5 className={s.title_5}>{item.description}</h5>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;