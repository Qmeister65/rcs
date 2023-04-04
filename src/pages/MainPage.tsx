import React, { useEffect, useState } from 'react';
import SearchBar from '@/components/searchBar';
import CardAPIList from '@/components/cardAPIList';
//import data from '@/assets/data.json';
import '@/main.scss';
import axios from 'axios';

const MainPage: React.FC = () => {
  const [cards, setCards] = useState({
    docs: [],
  });
  const [value, setValue] = useState(localStorage.getItem('searchValue') || '');
  useEffect(() => {
    axios
      .get('https://the-one-api.dev/v2/character?limit=100', {
        headers: {
          Authorization: 'Bearer wVHj2Pv5am7yP3fvyAvm',
        },
      })
      .then((r) => {
        setCards(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className={'app'}>
      <SearchBar value={value} onChange={(value) => setValue(value)} />
      <CardAPIList data={cards.docs} />
    </div>
  );
};

export default MainPage;
