import React, { MouseEventHandler } from 'react';
import { FieldValues } from 'react-hook-form';

export interface CardProps {
  num: string;
  src?: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
}

export type CardListProps = { data: CardProps[] };

export interface InputFieldProps {
  id?: string;
  register?: () => FieldValues;
  type?: string;
  value?: string | number;
  label?: string;
  error?: string;
  inputStyle?: string;
  accept?: string;
  name?: string;
}

export interface ValuesIds {
  id: string;
  value: string;
}

export interface CardsFormProps {
  addCard: (card: CardProps) => void;
  sizes: ValuesIds[];
  colors: ValuesIds[];
  shapes: ValuesIds[];
}

export interface ConfirmationMessageProps {
  onClick: () => void;
}

export interface PopupProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode | JSX.Element;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export interface FormProps {
  className: string;
  children: React.ReactNode | JSX.Element;
  onSubmit: () => void;
}

export interface FormInputProps {
  name: string;
  count: number;
  date: string;
  shape: string;
  color: string[];
  size: string;
  image: FileList;
}

export interface CardAPIProps {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
}
