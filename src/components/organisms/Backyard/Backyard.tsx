import {FC} from "react";
import * as s from './Backyard.module.scss';
import Swiper from "@/components/molecules/Swiper";

// Type
interface BackyardProps {

}

// Backyard
const Backyard: FC<BackyardProps> = ({}) => {

  return (
    <div className={s.Backyard}>
      <div className={s.Container}>
        <h2 className={s.title_2}>What is Backyard?</h2>
        <Swiper/>
      </div>
    </div>
  )
}

export default Backyard