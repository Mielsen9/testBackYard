import * as s from './Logo.module.scss'
import LogoSVG from "@/asset/images/Logo.svg"

// Type
interface Props {

}

// Logo
const Logo: React.FC<Props> = (props) => {
  const {} = props

  return (
    <a className={s.Logo}
       href='#'>
      <LogoSVG width={26} height={26}/>
      <p>Backyard</p>
    </a>
  )
}

export default Logo