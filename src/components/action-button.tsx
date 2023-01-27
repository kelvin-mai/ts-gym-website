import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SelectedPage } from '@/common/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const ActionButton = ({
  children,
  setSelectedPage,
}: React.PropsWithChildren<Props>) => (
  <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
  >
    {children}
  </AnchorLink>
);
