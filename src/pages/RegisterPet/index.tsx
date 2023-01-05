import { useForm } from 'react-hook-form';

import { ErrorMessage } from '../../components/ErrorMessage';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';


import {
  SignUpBack,
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from './styled';
import { db } from '../../config/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import logo from '../../assets/Icon/image/animal-dog.gif';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Icon } from '../../assets/Icon';

interface SignUpForm {
  name: string;
  type: 'gato' | 'cachorro';
  age: string;
  breed: string;
  imageUrl: string;
  nameOwner: string;
  telephoneOwner: string;
}

export const RegisterPet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  const [isLoading, setIsLoading] = useState(false);
  const [telefone, setTelefone] = useState('');

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/home');
  };

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      setIsLoading(true);
      toast.success('cadastrado com sucesso!');
      await addDoc(collection(db, 'petshop'), {
        id: data.imageUrl,
        name: data.name,
        age: data.age,
        type: data.type,
        breed: data.breed,
        imageUrl: data.imageUrl,
        nameOwner: data.nameOwner,
        telephoneOwner: data.telephoneOwner,
      });
    } catch (error) {
      toast.error('algo deu errado, tente novamente!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpContent>
          <img src={logo} alt="" />
          <SignUpHeadline>
            Cadastre seu Pet
            <SignUpBack onClick={handleHome}>
              {' '}
              <Icon name="back" size={12} />
              Voltar{' '}
            </SignUpBack>
          </SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome do Pet</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite o nome do seu pet"
              {...register('name', { required: true })}
            />

            {errors?.name?.type === 'required' && (
              <ErrorMessage>O nome do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Idade do Pet</p>
            <CustomInput
              hasError={!!errors?.age}
              type="Number"
              placeholder="Digite a idade do seu pet"
              {...register('age', { required: true })}
            />

            {errors?.age?.type === 'required' && (
              <ErrorMessage>A idade do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Seu Pet é um: </p>
            <CustomInput
              hasError={!!errors?.type}
              placeholder="Cachorro ou Gato"
              {...register('type', { required: true })}
            />

            {errors?.type?.type === 'required' && (
              <ErrorMessage>o tipo do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Raça do Pet</p>
            <CustomInput
              hasError={!!errors?.breed}
              placeholder="Digite a raça do seu pet"
              {...register('breed', { required: true })}
            />

            {errors?.breed?.type === 'required' && (
              <ErrorMessage>A Raça do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>URL da imagem do Pet</p>
            <CustomInput
              placeholder="URL da imagem do seu pet"
              hasError={!!errors?.imageUrl}
              {...register('imageUrl', { required: true })}
            />

            {errors?.imageUrl?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Nome do Dono</p>
            <CustomInput
              hasError={!!errors?.nameOwner}
              placeholder="Digite o nome do dono"
              {...register('nameOwner', { required: true })}
            />

            {errors?.nameOwner?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Telefone para contato</p>
            <CustomInput
              hasError={!!errors?.telephoneOwner}
              placeholder="Digite o número do telefone"
              value={telefone}
              {...register('telephoneOwner', {
                required: true
              })}
            />

            {errors?.telephoneOwner?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            <Icon name="check" size={16} /> Cadastrar pet
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};
