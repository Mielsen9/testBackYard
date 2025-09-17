import {FC} from "react";
import * as s from './Hero.module.scss'
import Button from "@/components/atoms/Button";

// Type
interface Props {

}

// Hero
const Hero: FC<Props> = ({}) => {

  return (
    <div className={s.Hero}>
      <div className={s.Container}>
        <div className={s.HeroImg}>
        <div className={s.ContentContainer}>
          <h1 className={s.title_1}>
            The yield-backed
            stablecoin protocol
            boosting DeFi liquidity
          </h1>
          <h3 className={s.title_3}>
            Keep your yield working for you — we keep your liquidity accessible
          </h3>
          <div className={s.ButtonContainer}>
            <Button href={"#"}
                    className={`${s.darkButton} ${s.text_Archivo}`}
                    children={<p>Join Whitelist</p>}/>
            <Button href={"#"}
                    className={`${s.greyButton} ${s.text_Archivo}`}
                    children={<p>Read Docs</p>}/>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Hero