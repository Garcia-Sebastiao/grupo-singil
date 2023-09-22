import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import 'swiper/css';
import "./style.css";
import 'swiper/css/pagination';

export default function Carrousel({ children, settings, modules = [], style  =  {}}) {
  return (
    <Swiper
      navigation={true}
      style={style}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      modules={[Autoplay, ...modules]}
      {...settings}
    >
      {children}
    </Swiper>
  );
}
