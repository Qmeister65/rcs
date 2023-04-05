import React from 'react';
import CardAPI from '@/components/cardAPI';
import './cardsList.scss';
import { CardAPIListProps } from '@/types';

const CardAPIList: React.FC<CardAPIListProps> = (props) => {
  return (
    <div className={'cardsList'}>
      {props.cards.length ? (
        props.cards.map((x) => <CardAPI {...x} key={x._id} />)
      ) : (
        <h3>Nothing was found</h3>
      )}
    </div>
  );
};

export default CardAPIList;
