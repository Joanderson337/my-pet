import { FunctionComponent, useEffect} from 'react';

import { PetsContext } from '../../contexts/pets.context';
import { useContext } from 'react';
import { PetEditCard } from '../PetEditCard';

interface PetEditProps {
  petId: string
}

export const PetEdit: FunctionComponent<PetEditProps> = ({
  petId
}) => {
  const { paramsPet, pets } = useContext(PetsContext);

  console.log(petId);
  useEffect(() => {
    paramsPet(petId);
  }, [paramsPet]);

  return (
    <>
      {pets.map((pet) => (
        <div key={pet.id}>
          <PetEditCard data={pet} />
        </div>
      ))}

    </>
  );
};
