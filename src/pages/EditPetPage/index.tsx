import { useParams } from 'react-router-dom';
import { PetEdit } from '../../components/PetEdit';

export function EditPetPage () {

  const { id } = useParams();

  if (!id) return null;

  return(
    <>
      <PetEdit petId={id}/>
    </>
  );
}
