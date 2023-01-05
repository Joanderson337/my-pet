import { useContext, useState } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import Pets from '../../models/pets.types';
import { CustomInput } from '../CustomInput';
import {  PetContainer } from './styled';


interface PetsItemProps {
  data: Pets
}

export function PetEditCard ({ data } : PetsItemProps) {

  const [name, setName] = useState(data.name);
  const [nameOwner, setNameOwner] = useState(data.nameOwner);
  const [age, setAge] = useState(data.age);


  const { updatePet } = useContext(PetsContext);

  return (
    <>
      <PetContainer>
        <input value={name} onChange={(event) => setName(event.target.value)}/>
        <input value={nameOwner} onChange={(event) => setNameOwner(event.target.value)}/>
        <input value={age} onChange={(event) => setAge(event.target.value)}/>
        <button onClick={() => updatePet(data.id, name, nameOwner, age)}>submit</button>
      </PetContainer>
    </>

  );
}
