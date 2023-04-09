import React from 'react';
import Card from '@/components/card';
import './cardsList.scss';
import { CardListProps } from '@/types';

const CardsList: React.FC<CardListProps> = (props) => (
  <div className={'cardsList'}>
    {props.data.map((x) => (
      <Card {...x} key={x.num} />
    ))}
  </div>
);

export default CardsList;
