import styled from 'styled-components';
import Colors from '../../styles/theme';

export const ContainerPets = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const ContentPets = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-flow: row wrap;
  margin: 30px 0 40px 0;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  > p {
    font-size: 16px;
    color: ${Colors.text.dark};
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.text.dark};
  }
`;
