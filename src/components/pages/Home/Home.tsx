import * as s from './Home.module.scss'
import Header from "@/components/organisms/Header";

// Type
interface Props {

}

// Home
const Home: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Home}>
      <Header />
    </div>
  )
}

export default Home