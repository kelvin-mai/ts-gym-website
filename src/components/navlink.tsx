import { SelectedPage } from '@/common/types';
import { pageToPageId } from '@/common/functions';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const NavLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const pageId = pageToPageId(page);
  const currentPageClass = selectedPage === pageId ? 'text-primary-500' : '';
  return (
    <AnchorLink
      className={`${currentPageClass} transition duration-500 hover:text-primary-300`}
      href={`#${pageId}`}
      onClick={() => setSelectedPage(pageId)}
    >
      {page}
    </AnchorLink>
  );
};
