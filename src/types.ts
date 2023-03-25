import React from 'react';

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
  id: string;
  type: string;
  value?: string | number;
  label?: string;
  error?: string;
  refProp?: React.RefObject<HTMLInputElement>;
}

export interface FormState {
  errors: ValidationError[];
}

export interface FormPageState {
  cardList: CardProps[];
}

export interface ValuesIdsRefs {
  id: string;
  value: string;
  ref: React.RefObject<HTMLInputElement>;
}

export interface ValuesIds {
  id: string;
  value: string;
}

export interface FormProps {
  addCard: () => void;
  nameRef: React.RefObject<HTMLInputElement>;
  countRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  colorsRefs: ValuesIdsRefs[];
  sizesRefs: ValuesIdsRefs[];
  shapeRef: React.RefObject<HTMLSelectElement>;
  shapes: ValuesIds[];
  imageRef: React.RefObject<HTMLInputElement>;
}

export interface ValidationError {
  id: string;
  message: string;
}

export type Validation = () => ValidationError | undefined;
