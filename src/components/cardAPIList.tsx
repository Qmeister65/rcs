import React, { useEffect, useState } from 'react';
import CardAPI from '@/components/cardAPI';
import './cardsList.scss';
import { CardAPIProps } from '@/types';
import axios from 'axios';
import Loader from '@/components/loader';

const CardAPIList: React.FC = () => {
  const [cards, setCards] = useState<CardAPIProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://the-one-api.dev/v2/character?limit=100', {
        headers: {
          Authorization: 'Bearer wVHj2Pv5am7yP3fvyAvm',
        },
      })
      .then((r) => {
        setCards(r.data.docs);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        console.log(e);
      });
  }, []);
  if (isLoading) return <Loader />;
  else
    return (
      <div className={'cardsList'}>
        {cards.map((x) => (
          <CardAPI {...x} key={x._id} />
        ))}
      </div>
    );
};

export default CardAPIList;
