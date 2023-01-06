import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div``

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.5rem 10rem;
  gap: 2rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;

    padding: 0 0 1rem 1rem;
  }
`

export const Content = styled.div`
  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;

    padding: 0 0 1rem 1rem;
  }
`

export const Address = styled.div`
  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 2.5rem;
  width: 40rem;
  height: 23.25rem;
  align-self: stretch;
  flex-grow: 0;
  border-radius: 6px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};

    > p {
      font-size: 16px;
    }
    > span {
      font-size: 14px;
    }
  }
`

export const AddressForm = styled.input`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background-color: ${(props) => props.theme['base-input']};

  ::placeholder {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }

  &:active,
  &:focus,
  &:hover {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    border-radius: 4px;
  }
`

export const PaymentMethod = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 2rem;
  border-radius: 6px;

  width: 40rem;
  height: 207px;

  background-color: ${(props) => props.theme.background};

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};

    > p {
      font-size: 16px;
    }
    > span {
      font-size: 14px;
    }
  }
`

export const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  > button {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 178.67px;
    padding: 1rem;
    align-items: center;
    background-color: ${(props) => props.theme['base-button']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid #8047f8;
    }
  }
`

export const Order = styled.div`
  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 1.5rem;

  width: 448px;
  height: 498px;
  border-radius: 6px 44px;

  font-family: 'Roboto', sans-serif;

  > div {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};

    > strong {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: space-between;
      justify-content: space-between;

      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.yellow};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 46px;
  border: none;
  border-radius: 6px;
  box-shadow: none;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;

  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  cursor: pointer;
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: 100%;
`
