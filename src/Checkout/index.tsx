import { Header } from '../components/Header'
import {
  Address,
  AddressForm,
  BodyContainer,
  Button,
  Container,
  Content,
  LinkStyle,
  Order,
  PaymentMethod,
  Type,
} from './styles'
import Spot from '../assets/spot.svg'
import Dollar from '../assets/dollar.svg'
import creditCard from '../assets/creditCard.svg'
import debitCard from '../assets/debitCard.svg'
import money from '../assets/money.svg'

export function Checkout() {
  return (
    <Container>
      <Header />

      <BodyContainer>
        <Content>
          <p>Complete seu pedido</p>
          <Address>
            <div>
              <img src={Spot} alt="Local" />
              <div>
                <p>Endereço</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <AddressForm className="CEP" type="text" placeholder="58032-100" />
            <AddressForm
              className="Rua"
              type="text"
              placeholder="Avenida Rui Carneiro"
            />
            <div>
              <AddressForm className="Numero" type="text" placeholder="120" />
              <AddressForm
                className="Complemento"
                type="text"
                placeholder="Complemento"
              />
            </div>
            <div>
              <AddressForm
                className="Bairro"
                type="text"
                placeholder="Brisamar"
              />
              <AddressForm
                className="Cidade"
                type="text"
                placeholder="João Pessoa"
              />
              <AddressForm className="Estado" type="text" placeholder="PB" />
            </div>
          </Address>
          <PaymentMethod>
            <div>
              <img src={Dollar} alt="Dollar" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <Type>
              <button>
                <img src={creditCard} alt="" />
                <p>cartão de crédito</p>
              </button>

              <button>
                <img src={debitCard} alt="" />
                <p>cartão de débito</p>
              </button>

              <button>
                <img src={money} alt="" />
                <p>dinheiro</p>
              </button>
            </Type>
          </PaymentMethod>
        </Content>

        <Content>
          <p> Cafés selecionados</p>
          <Order>
            {/* <div>
              <img src={props.coffee} alt="" />
              <div>
                <Counter></Counter>
                <button>
                  <img src={trash} alt="" />
                  <p>Remover</p>
                </button>
              </div>
              <p>R$ 12,90</p>
            </div> */}
            <div>
              Total dos itens
              <span>R$ 45,00</span>
            </div>
            <div>
              Entrega <span>R$ 10,80</span>
            </div>

            <div>
              <strong>
                Total
                <span>R$ 65,80</span>
              </strong>
            </div>

            <LinkStyle to="/success">
              <Button>Confirmar pedido</Button>
            </LinkStyle>
          </Order>
        </Content>
      </BodyContainer>
    </Container>
  )
}
