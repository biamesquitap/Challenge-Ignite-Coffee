import styled from 'styled-components'

export const Container = styled.div`
  /* background: ${(props) => props.theme.background}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    display: flex;
    justify-content: flex-start;

    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`

export const MenuContent = styled.div`
  background-color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  padding: 6rem 10rem;

  gap: 3.5rem;

  > div {
    display: flex;
    align-items: flex-start;

    flex-direction: column;
    gap: 4rem;

    > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;

      margin-bottom: 1rem;

      color: ${(props) => props.theme['base-title']};
    }

    > h4 {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  gap: 1rem;

  color: ${(props) => props.theme['base-text']};

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`
export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 2rem;
`
