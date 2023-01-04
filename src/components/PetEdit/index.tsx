import { FunctionComponent, useEffect} from 'react';

import { PetsContext } from '../../contexts/pets.context';
import { useContext } from 'react';
import { PetItem } from '../PetItem';
import { Loading } from '../Loading';

interface PetEditProps {
  petId: string
}

export const PetEdit: FunctionComponent<PetEditProps> = ({
  petId
}) => {
  const { editPet, pets } = useContext(PetsContext);

  console.log(petId);
  useEffect(() => {
    editPet(petId);
  }, [editPet]);



  return (
    <>
      {pets.map((pet) => (
        <div key={pet.id}>
          <PetItem data={pet} />
        </div>
      ))}
    </>
  );
};
