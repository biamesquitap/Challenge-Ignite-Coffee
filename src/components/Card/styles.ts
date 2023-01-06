import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  > img {
    margin-top: -2rem;
  }
`
export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > div {
    border-radius: 16px;
    padding: 0.1rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
  }
  > div > strong {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  }
`

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;

  padding: 0 1rem 2rem;

  color: ${(props) => props.theme['base-label']};
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;

  gap: 1rem;
`

export const SelectCoffee = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > button {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
`

export const PriceContainer = styled.div`
  > p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    > span {
      font-family: 'Baloo 2', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
    }
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  padding: 0.5rem;
  gap: 0.3rem;

  > button {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }

  > input {
    background: transparent;
    height: 2rem;
    border: 0;

    font-weight: bold;
    font-size: 1, 125rem;
    color: black;
    text-align: center;
    justify-content: center;
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.purple};
    }
    &::placeholder {
      color: black;
    }
    width: 1.5rem;
  }
`
