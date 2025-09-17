import * as s from './Home.module.scss'
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Backyard from "@/components/organisms/Backyard";

// Type
interface Props {

}

// Home
const Home: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Home}>
      <div className={s.wrapper}>
        <Header />
        <Hero/>
        <Backyard/>
      </div>
    </div>
  )
}

export default Home