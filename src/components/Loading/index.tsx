import PacmanLoader from 'react-spinners/PacmanLoader';

import { LoadingContainer } from './styled';
interface ILoading {
  message?: string
}

export const Loading = ({ message }: ILoading) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <PacmanLoader size={80} color={'#836FFF'}/>
    </LoadingContainer>
  );
};
