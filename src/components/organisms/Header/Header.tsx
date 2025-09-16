import * as s from './Header.module.scss'
import Logo from "@/components/atoms/Logo";

// Type
interface Props {

}

// Header
const Header: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Header}>
      <Logo/>
    </div>
  )
}

export default Header