import React from 'react';
import SearchBar from '@/components/searchBar';
import CardAPIList from '@/components/cardAPIList';
import '@/main.scss';
import Loader from '@/components/loader';
import { useActions, useAppSelector } from '@/hooks/hooks';
import { selectQuery } from '@/store/mainReducer';
import { useFetchCardsQuery } from '@/service';

const MainPage: React.FC = () => {
  const query = useAppSelector(selectQuery);
  const { setQuery } = useActions();
  const { data, isFetching } = useFetchCardsQuery(query);
  const cards = data || [];
  return (
    <div className={'app'}>
      <SearchBar searchFunc={setQuery} query={query} />
      {isFetching ? <Loader /> : <CardAPIList cards={cards} />}
    </div>
  );
};

export default MainPage;
