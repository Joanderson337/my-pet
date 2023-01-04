import { useContext } from 'react';
import { Icon } from '../../assets/Icon';
import { PetsContext } from '../../contexts/pets.context';
import Pets from '../../models/pets.types';
import { DeletePet, DonoInfo, EditPet, Info, PetContainer, PetImage, PetInfo } from './styled';
interface PetsItemProps {
  data: Pets
}

export function PetItem ({ data } : PetsItemProps) {
  const { deletePet } = useContext(PetsContext);

  return (
    <>
      <PetContainer>
        <PetImage imageUrl={data.imageUrl}>
          <DeletePet onClick={() => deletePet(data.id)}>
            <Icon name='remove' size={18}/>
          </DeletePet>
          <EditPet>
            <Icon name='edit' size={18}/>
          </EditPet>
        </PetImage>

        <Info>
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
        </Info>
      </PetContainer>
    </>

  );
}
