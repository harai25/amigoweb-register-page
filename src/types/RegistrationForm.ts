export enum Language {
  EMPTY = '',
  RUSSIAN = 'Русский',
  ENGLISH = 'Английский',
  CHINNESE = 'Китайский',
  SPANISH = 'Испанский'
}

export interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  language: Language;
  isTermOfUse: boolean;
}