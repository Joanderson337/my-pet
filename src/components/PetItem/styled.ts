import styled from 'styled-components';
import Colors from '../../styles/theme';

interface PetImageProps {
  imageUrl: string;
}

export const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const DeletePet = styled.button`
  background: transparent;
  margin: 10px;
`;

export const EditPet = styled.button`
  background: transparent;
  margin: 10px;
`;

export const Info = styled.div`
  border-radius: 0 0 10px 10px;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  font-weight: bold;
  margin: 10px;
  p {
    font-size: 12px;
    color: ${Colors.text.dark};
  }
  strong {
    font-weight: bold;
    margin-bottom: 2px;
    font-size: 12px;
  }
`;

export const DonoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  font-weight: bold;
  margin: 10px;
  p {
    font-size: 12px;
    color: ${Colors.text.dark};
  }
  strong {
    font-weight: bold;
    margin-bottom: 2px;
    font-size: 12px;
  }
`;

export const PetImage = styled.div<PetImageProps>`
  display: flex;
  justify-content: space-around;



  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 28rem;
  width: 20rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;
`;
