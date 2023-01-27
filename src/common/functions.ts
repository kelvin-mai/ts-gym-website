import { SelectedPage } from './types';

export const pageToPageId: (page: string) => SelectedPage = (page) =>
  page.toLocaleLowerCase().replace('/ /g', '') as SelectedPage;
