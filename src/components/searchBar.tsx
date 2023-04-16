import React, { useState } from 'react';
import './searchBar.scss';
import { SearchBarProps } from '@/types';

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [query, setQuery] = useState<string>(props.query || '');
  const onClick = () => {
    props.searchFunc?.(query);
  };
  return (
    <div
      className={'search-bar'}
      onKeyDown={(event) => {
        if (event.key === 'Enter') props.searchFunc?.(query);
      }}
    >
      <input
        onChange={(event) => setQuery(event.target.value.toString())}
        placeholder={'SearchBar'}
        value={query}
        className={'search-bar__input'}
      />
      <a className={'search-bar__icon'} onClick={onClick} data-testid={'btn'}></a>
    </div>
  );
};

export default SearchBar;
