import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from '../../components/ErrorMessage'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'

import {
  SignUpBack,
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './styled'
import { db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import logo from '../../assets/animal-dog.gif'
import { useState } from 'react'

interface SignUpForm {
  name: string
  type: 'gato' | 'cachorro'
  old: number
  breed: string
  imageUrl: string
  nameDono: string
  telephoneDono: number
}

export const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpForm>()

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/home')
  }

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      setIsLoading(true)

      await addDoc(collection(db, 'petshop'), {
        id: data.imageUrl,
        name: data.name,
        old: data.old,
        type: data.type,
        breed: data.breed,
        imageUrl: data.imageUrl,
        nameDono: data.nameDono,
        telephoneDono: data.telephoneDono
      })
      setTimeout(() => {
        navigate('/home')
      }, 4000)
    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpContent>
          <img src={logo} alt="" />
          <SignUpHeadline>
            Cadastre seu Pet
            <SignUpBack onClick={handleHome}> <FiArrowLeft size={14}/>Voltar </SignUpBack>
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
              hasError={!!errors?.old}
              type= "Number"
              placeholder="Digite a idade do seu pet"
              {...register('old', { required: true })}
            />

            {errors?.old?.type === 'required' && (
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
              hasError={!!errors?.nameDono}
              placeholder="Digite o nome do dono"
              {...register('nameDono', { required: true })}
            />

            {errors?.nameDono?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Telefone para contato</p>
            <CustomInput
              hasError={!!errors?.telephoneDono}
              type="number"
              placeholder="Digite o número do telefone"
              {...register('telephoneDono', { required: true })}
            />

            {errors?.telephoneDono?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiCheck size={18} />}
          >
            Cadastrar pet
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}
