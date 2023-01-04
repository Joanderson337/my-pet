import styled from 'styled-components';

interface PetImageProps {
  imageUrl: string
}

export const PetContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const DeletePet = styled.button`
      position: absolute;
      background: transparent;
      margin: 10px;
`;

export const EditPet = styled.button`
      position: absolute;
      background: transparent;
      margin: 8px 10px 0 170px;

`;

export const Info = styled.button`
      border-radius: 0 0 10px 10px;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  font-weight: bold;
 margin: 10px;

 p{
  font-size: 12px;
  color: #1C1C1C;
 }


 strong{
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


 p{
  font-size: 12px;
  color: #1C1C1C;
 }


 strong{
  font-weight: bold;
  margin-bottom: 2px;
  font-size: 12px;
 }
`;

export const PetImage = styled.button<PetImageProps>`



  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 28rem;
  width: 20rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px 10px  0 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;
    button {
      visibility: visible;
      opacity: 1;
    }
  }
  `;
