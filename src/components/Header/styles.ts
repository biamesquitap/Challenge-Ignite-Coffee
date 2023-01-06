import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  background-color: ${(props) => props.theme.white};

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`
export const LocalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 8px;

  width: 143px;
  height: 38px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['purple-dark']};
`
