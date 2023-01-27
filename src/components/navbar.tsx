import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';

import { NavLink } from '@/components/navlink';
import { flexBetween, pages } from '@/common/constants';
import { SelectedPage } from '@/common/types';
import { useMediaQuery, useToggle } from '@/hooks';
import { ActionButton } from '@/components/action-button';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const createNavLinks = (
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void,
) => {
  return pages.map((page) => (
    <NavLink
      page={page}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  ));
};

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const isAboveMedium = useMediaQuery('(min-width: 1060px)');
  const [isMenu, toggleMenu] = useToggle();
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';
  const navLinks = createNavLinks(selectedPage, setSelectedPage);
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
            {isAboveMedium ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>{navLinks}</div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => toggleMenu()}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {isMenu && !isAboveMedium && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => toggleMenu()}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
};
