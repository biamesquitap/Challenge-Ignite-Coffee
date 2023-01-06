import LogoCoffeeDelivery from '../../assets/logo.svg'
import LocalSpot from '../../assets/localIcon.svg'
import Carrinho from '../../assets/carrinho.svg'
import { HeaderContainer, LocalContainer } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />
      <div>
        <LocalContainer>
          <img src={LocalSpot} alt="" />
          Local
        </LocalContainer>
        <Link to="/checkout">
          <img src={Carrinho} alt="" />
        </Link>
      </div>
    </HeaderContainer>
  )
}
