import { Cadastro, ContainerHeader, ContentHeader } from './styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/Icon/image/animal-dog.gif';
import { useNavigate } from 'react-router-dom';

export function Header () {
  const navigate = useNavigate();

  const handleCadastro = () => {
    navigate('/Cadastro');
  };

  return (
    <ContainerHeader>
      <ContentHeader>
        <div className="page-details">
          <h1>PetShop</h1>
          <h2>Acompanhe os pets</h2>

          <button type='button' onClick={() => signOut(auth)}>
            <FiPower size={20}/>
          </button>

        </div>
        <img src={logo} alt="logo" />
        <Cadastro onClick={handleCadastro}>Cadastrar pet</Cadastro>
      </ContentHeader>
    </ContainerHeader>
  );
}
