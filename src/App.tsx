import React from 'react';
import data from './assets/data.json';
import CardsList from './components/cardsList';
import './main.scss';
import SearchBar from './components/searchBar';

class App extends React.Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <div className={'app'}>
        <SearchBar />
        <CardsList data={data} />
      </div>
    );
  }
}

export default App;
