import { SelectHTMLAttributes } from 'react';
import { CustomSelectContainer } from './styled';

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  setValue: (value: string) => void;
}

export function CustomSelect({ value, setValue }: CustomSelectProps) {
  return (
    <>
      <CustomSelectContainer
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        <option value="gato">Gato</option>
        <option value="cachorro">Cachorro</option>
      </CustomSelectContainer>

    </>
  );
}
