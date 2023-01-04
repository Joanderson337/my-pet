import { FunctionComponent, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../config/firebase.config';
import {  petsConverter } from '../../converters/firestore.converters';

import Pets from '../../models/pets.types';

interface PetEditProps {
  petId: string
}

export const PetEdit: FunctionComponent<PetEditProps> = ({
  petId
}) => {
  const [pet, setPet] = useState<Pets | null>(null);

  console.log(petId);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        console.log('deu certo');
        const querySnapshot = await getDocs(
          query(
            collection(db, 'petshop').withConverter(petsConverter),
            where('id', '==', petId)
          )
        );

        const pet = querySnapshot.docs[0]?.data();

        setPet(pet);
      } catch (error) {
        console.log('deu errado');
      } finally {
        console.log('finalizou');
      }
    };

    fetchPet();
  }, []);


  return (
    <>
      <p style={{color: 'red'}}>{pet?.age}</p>
    </>
  );
};
