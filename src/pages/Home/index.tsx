import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Pets } from '../../components/Pets';
import { auth } from '../../config/firebase.config';
import { UserContext } from '../../contexts/user.context';

export function Home(){
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);


  return(
    <>
      <Header />
      <Pets />
    </>
  );
}
