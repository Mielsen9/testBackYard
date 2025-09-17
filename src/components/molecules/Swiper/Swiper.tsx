import {FC} from "react";
import * as s from './Swiper.module.scss';

// Type
interface SwiperProps {

}

// Swiper
const Swiper: FC<SwiperProps> = ({}) => {

  return (
    <div className={s.Swiper}>
      Swiper
    </div>
  )
}

export default Swiper