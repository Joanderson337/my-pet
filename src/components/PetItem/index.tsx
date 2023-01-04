import { useContext } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import Pets from '../../models/pets.types';
import { DonoInfo, PetContainer, PetImage, PetInfo } from './styled';
interface PetsItemProps {
  data: Pets
}

export function PetItem ({ data } : PetsItemProps) {
  const { deletePet } = useContext(PetsContext);

  return (
    <>
      <button onClick={() => deletePet(data.id)}>deleta</button>
      <PetImage imageUrl={data.imageUrl}>
        <PetContainer>
          <PetInfo>
            <strong>Informações do Pet:</strong>
            <p>Nome: {data.name}</p>
            <p>Idade: {data.old} anos</p>
            <p>Raça: {data.breed}</p>
            <p>Animal: {data.type}</p>
          </PetInfo>
          <DonoInfo>
            <strong>Informações do Dono:</strong>
            <p>Nome: {data.nameDono}</p>
            <p>Fone: {data.telephoneDono}</p>
          </DonoInfo>
        </PetContainer>
      </PetImage>
    </>

  );
}
