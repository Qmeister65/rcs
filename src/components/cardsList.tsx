import React from 'react';
import Card from '@/components/card';
import './cardsList.scss';
import { CardListProps } from '@/types';

class CardsList extends React.Component<CardListProps, Record<string, never>> {
  render() {
    return (
      <div className={'cardsList'}>
        {this.props.data.map((x) => (
          <Card {...x} key={x.num} />
        ))}
      </div>
    );
  }
}

export default CardsList;
