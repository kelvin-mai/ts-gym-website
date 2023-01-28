import { useMediaQuery } from './use-media-query';

export const useIsAboveMedium = () => {
  return useMediaQuery('(min-width: 1060px)');
};
