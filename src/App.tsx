import React from 'react';
import data from './assets/data.json';
import CardsList from './components/cardsList';
import './main.scss';

class App extends React.Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <div className={'app'}>
        <CardsList data={data} />
      </div>
    );
  }
}

export default App;
