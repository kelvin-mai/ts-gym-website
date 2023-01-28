import { PropsWithChildren } from 'react';

type Props = {};

export const HeaderText = ({ children }: PropsWithChildren<Props>) => (
  <h1 className="text-bold basis-3/5 font-montserrat text-3xl uppercase">
    {children}
  </h1>
);
