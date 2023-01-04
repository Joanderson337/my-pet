import { useContext, useEffect } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import { PetItem } from '../PetItem';
import { Loading } from '../Loading';
import { ContainerPets, ContentPets } from './styled';

export function Pets () {
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
            <PetItem data={pet} />
          </div>
        ))}
      </ContentPets>
    </ContainerPets>
  );
}
