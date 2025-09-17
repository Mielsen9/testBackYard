import {FC} from "react";
import * as s from './Backyard.module.scss';
import Slider from "@/components/molecules/Slider";
import Aggregator from "@/asset/images/Aggregator.png";
import Stablecoin from "@/asset/images/Stablecoin.png";
import Liquidity from "@/asset/images/Liquidity.png";

// Type
interface BackyardProps {

}

// Backyard
const Backyard: FC<BackyardProps> = ({}) => {

  return (
    <div className={s.Backyard}>
      <div className={s.Container}>
        <h2 className={s.title_2}>What is Backyard?</h2>
        <Slider
          items={[
            { id: "1",
              img: Aggregator,
              title: "Yield Aggregator",
              titleDescription: "One-click yield aggregation",
              description: "Choose multiple stablecoin strategies, diversify" +
                " in seconds, and optimize your yield without complexity" },
            { id: "2",
              img: Stablecoin,
              title: "Yield-backed Stablecoin",
              titleDescription: 'Unlock liquidity with BYD',
              description: "Mint BYD against your yield-generating LP tokens " +
                "to stay liquid and productive at the same time"},
            { id: "3",
              img: Liquidity,
              title: "Boost DeFi Liquidity",
              titleDescription: "Boost protocols, earn more",
              description: "Your liquidity empowers DeFi — vote for pools, " +
                "earn bribes, and maximize your rewards."},
          ]}
        />
      </div>
    </div>
  )
}

export default Backyard