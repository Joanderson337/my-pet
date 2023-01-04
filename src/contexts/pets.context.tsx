import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react';

import { db } from '../config/firebase.config';
import Pets from '../models/pets.types';

interface IPetsContext {
  pets: Pets[];
  isLoading: boolean;
  deletePet: (id: string) => void;
}

interface Iteste {
  children: ReactNode;
}

export const PetsContext = createContext<IPetsContext>({
  pets: [],
  isLoading: false,
  deletePet: () => Promise.resolve()
});

export const PetsContextProvider = ({ children }: Iteste) => {
  const [pets, setPets] = useState<Pets[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const useCollectionRef = collection(db, 'petshop');

  useEffect(() => {
    (async () => {
      const response = await getDocs(useCollectionRef);
      const data: any = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setPets(data);
    })();
  }, []);

  const deletePet = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const userDoc = doc(db, 'petshop', id);
        await deleteDoc(userDoc);
        const newPets = pets.filter((pet) => pet.id !== id);
        setPets(newPets);
        toast.success('pet removido com sucesso');
      } catch (error) {
        toast.error('algo aconteceu, tente novamente!');
      } finally {
        setIsLoading(false);
      }
    },
    [db, pets]
  );

  return (
    <PetsContext.Provider value={{ pets, isLoading, deletePet }}>
      {children}
    </PetsContext.Provider>
  );
};
