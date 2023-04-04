import React from 'react';
import CardAPI from '@/components/cardAPI';
import './cardsList.scss';
import { CardAPIListProps } from '@/types';

const CardAPIList: React.FC<CardAPIListProps> = (props) => (
  <div className={'cardsList'}>
    {props.data.map((x) => (
      <CardAPI {...x} key={x._id} />
    ))}
  </div>
);

export default CardAPIList;
