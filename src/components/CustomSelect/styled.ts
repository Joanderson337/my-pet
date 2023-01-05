import styled from 'styled-components';
import Colors from '../../styles/theme';


export const CustomSelectContainer = styled.select`
  border: none;
  width: 100%;
  background-color: ${Colors.input.background};
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: ${Colors.text.dark};
`;
