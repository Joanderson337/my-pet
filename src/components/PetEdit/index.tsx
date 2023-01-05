import { useEffect } from 'react';

import { PetsContext } from '../../contexts/pets.context';
import { useContext } from 'react';
import { PetEditForm } from '../PetEditForm';

interface PetEditProps {
  petId: string;
}

export function PetEdit({ petId }: PetEditProps) {
  const { paramsPet, pets } = useContext(PetsContext);

  useEffect(() => {
    paramsPet(petId);
  }, []);

  return (
    <>
      {pets.map((pet) => (
        <div key={pet.id}>
          <PetEditForm data={pet} />
        </div>
      ))}
    </>
  );
}
