import { ReactNode } from 'react';
import { InputErrorMessageContainer } from './styled';

interface ErrorMessageProps {
  children: ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps)  {
  return (
    <>
      <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    </>
  );
}
