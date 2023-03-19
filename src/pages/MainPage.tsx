import React from 'react';
import SearchBar from '../components/searchBar';
import CardsList from '../components/cardsList';
import data from '../assets/data.json';
import '../main.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className={'app'}>
        <SearchBar />
        <CardsList data={data} />
      </div>
    );
  }
}

export default MainPage;
