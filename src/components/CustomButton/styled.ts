import styled from 'styled-components'
import Colors from '../../styles/theme'

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px; 
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 80%;
  }
`

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`
