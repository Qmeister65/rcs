import React from 'react';
import './searchBar.scss';

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
  state: SearchBarState = { inputValue: localStorage.getItem('inputValue') || '' };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  render() {
    return (
      <div className={'search-bar'}>
        <input
          onChange={(event) => {
            this.setState({ inputValue: event.target.value });
            localStorage.setItem('inputValue', event.target.value.toString());
          }}
          placeholder={'SearchBar'}
          value={this.state.inputValue}
          className={'search-bar__input'}
        />
        <a className={'search-bar__icon'}></a>
      </div>
    );
  }
}

export default SearchBar;
