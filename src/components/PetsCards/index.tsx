import { useContext, useEffect } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import { PetInfoCard } from '../PetInfoCard';
import { Loading } from '../Loading';
import { ContainerPets, ContentPets } from './styled';

export function PetsCards () {
  const { isLoading, pets, getPet } = useContext(PetsContext);

  useEffect(() => {
    getPet();
  }, [getPet]);

  return (
    <ContainerPets>
      {isLoading && <Loading />}
      <ContentPets>
        {pets.map((pet) => (
          <div key={pet.id}>
            <PetInfoCard data={pet} />
          </div>
        ))}
      </ContentPets>
    </ContainerPets>
  );
}
