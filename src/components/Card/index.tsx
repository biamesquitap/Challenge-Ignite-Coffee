import { ChangeEvent, useState } from 'react'
import Carrinho from '../../assets/Carrinho.svg'
import Mais from '../../assets/mais.svg'
import Menos from '../../assets/menos.svg'
import {
  CardContainer,
  CardFooter,
  Description,
  PriceContainer,
  QuantityContainer,
  SelectCoffee,
  Title,
  Type,
} from './styles'

interface CardProps {
  id: string
  image: string
  type: string[]
  title: string
  description: string
  price: number
}

export function Card({
  id,
  image,
  type,
  title,
  description,
  price,
}: CardProps) {
  const imageURL = `/src/assets/Type=${image}.svg`
  const [quantity, setQuantity] = useState(1)

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function SumQuantityProduct() {
    setQuantity((state) => state + 1)
  }

  function SubQuantityProduct() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <>
      <CardContainer>
        <img src={imageURL} alt="image" draggable={false} />
        <Type>{type}</Type>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <CardFooter>
          <PriceContainer>
            <p>
              R$ <span>{price}</span>
            </p>
          </PriceContainer>
          <SelectCoffee>
            <QuantityContainer>
              <button onClick={SubQuantityProduct}>
                <img src={Menos} alt="" />
              </button>
              <input
                placeholder="1"
                id="QuantInput"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button onClick={SumQuantityProduct}>
                <img src={Mais} alt="" />
              </button>
            </QuantityContainer>
            <button>
              <img src={Carrinho} alt="" />
            </button>
          </SelectCoffee>
        </CardFooter>
      </CardContainer>
    </>
  )
}
