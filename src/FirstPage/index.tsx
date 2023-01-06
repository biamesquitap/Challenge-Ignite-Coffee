import { Header } from '../components/Header'
import { Container, IconsGrid, MenuContainer, MenuContent } from './styles'

import CoffeeMenu from '../assets/MenuCoffee.svg'
import CarrinhoIcon from '../assets/carrinhoIcon.svg'
import TimerIcon from '../assets/timeIcon.svg'
import PackIcon from '../assets/packIcon.svg'
import WarmCoffeeIcon from '../assets/warmCoffeeIcon.svg'
import { MenuCardsComplete } from '../components/Card/CompleteMenu'
import { Card } from '../components/Card'

export function FirstPage() {
  return (
    <Container>
      <Header />
      <MenuContent>
        <div>
          <h1>
            Encontre o café perfeito <br></br> para qualquer hora do dia
          </h1>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br></br>{' '}
            qualquer hora
          </h4>

          <IconsGrid>
            <div>
              <img src={CarrinhoIcon} alt="" />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <img src={PackIcon} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <img src={TimerIcon} alt="" />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <img src={WarmCoffeeIcon} alt="" />
              <p>O café chega fresquinho até você</p>
            </div>
          </IconsGrid>
        </div>
        <img src={CoffeeMenu} alt="" />
      </MenuContent>
      <p>Nossos cafés</p>
      <MenuContainer>
        {MenuCardsComplete.map((card) => {
          return <Card key={card.id} {...card} />
        }).reverse()}
      </MenuContainer>
    </Container>
  )
}
