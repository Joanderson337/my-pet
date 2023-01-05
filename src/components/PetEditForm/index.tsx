import { CustomInput } from '../CustomInput';
import { CustomButton } from '../CustomButton';

import {
  EnvyImg,
  SignUpBack,
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from './styled';

import { Icon } from '../../assets/Icon';
import { useContext, useState } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import Pets from '../../models/pets.types';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../Loading';
import { toast } from 'react-toastify';
import { CustomSelect } from '../CustomSelect';
import { storage } from '../../config/firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

interface PetsItemProps {
  data: Pets;
}

export const PetEditForm = ({ data }: PetsItemProps) => {
  const navigate = useNavigate();
  const { updatePet } = useContext(PetsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [nameOwner, setNameOwner] = useState(data.nameOwner);
  const [type, setType] = useState(data.type);
  const [breed, setBreed] = useState(data.breed);
  const [imageUrl, setImageUrl] = useState(data.imageUrl);
  const [telephoneOwner, setTelephoneOwner] = useState(data.telephoneOwner);
  const [progressPorcent, setPorgessPorcent] = useState(0);


  const handleHome = () => {
    navigate('/home');
  };

  const handleUpdate = () => {
    try {
      toast.success('dados atualizados, com sucesso');
      updatePet(
        data.id,
        name,
        age,
        type,
        breed,
        imageUrl,
        nameOwner,
        telephoneOwner
      );
      setIsLoading(true);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch {
      toast.error('hmm, parece que algo deu errado, tente novamente!');
    }
  };

  const handleImg = (event: any) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    console.log(file);
    if (!file) return;

    const storageRef = ref(
      storage,
      `images/${file.lastModified}${file.name}${file.lastModifiedDate}${file.size}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };

  return (
    <>
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>
            Atualizar dados do Pet: {data.name}
            <SignUpBack onClick={handleHome}>
              <Icon name="back" size={12} />
              Voltar
            </SignUpBack>
          </SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Idade</p>
            <CustomInput
              value={age}
              type="number"
              onChange={(event) => setAge(event.target.value)}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Seu Pet é um: </p>
            <CustomSelect setValue={setType} value={type} />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Raça</p>
            <CustomInput
              value={breed}
              onChange={(event) => setBreed(event.target.value)}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Envie Imagem do pet</p>
            <EnvyImg onSubmit={handleImg}>
              <CustomInput type="file" />
              <div>
                <button type='button'>Enviar</button>
                <p>{progressPorcent}%</p>
              </div>
            </EnvyImg>
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Nome do Dono</p>
            <CustomInput
              value={nameOwner}
              onChange={(event) => setNameOwner(event.target.value)}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Telefone para contato</p>
            <CustomInput
              type="number"
              value={telephoneOwner}
              onChange={(event) => setTelephoneOwner(event.target.value)}
            />
          </SignUpInputContainer>

          <CustomButton onClick={handleUpdate}>
            <Icon name="check" size={16} />
            Atualizar
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};
