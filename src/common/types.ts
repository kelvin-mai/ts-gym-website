export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface OurClass {
  name: string;
  description?: string;
  image: string;
}
