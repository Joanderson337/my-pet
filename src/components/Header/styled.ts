import styled from 'styled-components'
import Colors from '../../styles/theme'

export const ContainerHeader = styled.header`
  background: #6A5ACD;

  display: flex;
  justify-content: center;
  height: 12.375rem;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 5px;
  }
  > img{
    width: 11rem;
  }

  .page-details{
    h1 {
      font-size: 3rem;
      color: ${Colors.text.white};
    }
    h2{
      font-size: 2rem;
      font-weight: 400;
      color: ${Colors.text.white};
      opacity: 0.9;
    }
  > button {
    margin-top: 10px;
    background: transparent;
    border: 0;
    color: ${Colors.text.white};
  }

  } 
`

export const Cadastro = styled.button`
  background: transparent;
  color: ${Colors.text.white};
`
