import React from 'react';
import './searchBar.scss';
import { SearchBarProps } from '@/types';

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className={'search-bar'}>
      <input
        ref={props.inputRef}
        onChange={(event) => props.onChange(event.target.value.toString())}
        placeholder={'SearchBar'}
        value={props.value}
        className={'search-bar__input'}
      />
      <a className={'search-bar__icon'}></a>
    </div>
  );
};

export default SearchBar;
