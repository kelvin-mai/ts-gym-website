import { useState } from 'react';

export const useToggle: () => [boolean, () => void] = () => {
  const [bool, setBool] = useState<boolean>(false);

  const setToggle = () => setBool(!bool);

  return [bool, setToggle];
};
