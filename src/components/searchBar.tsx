import React, { useState } from 'react';
import './searchBar.scss';
import { SearchBarProps } from '@/types';
import { useActions, useAppSelector } from '@/hooks/hooks';
import { selectValue } from '@/store/searchBarReducer';

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const value = useAppSelector(selectValue);
  const { setValue } = useActions();
  const [query, setQuery] = useState<string>(value || '');
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
        onChange={(event) => {
          setQuery(event.target.value.toString());
          setValue(event.target.value.toString());
        }}
        placeholder={'SearchBar'}
        value={query}
        className={'search-bar__input'}
        data-testid={'search-bar__input'}
      />
      <a className={'search-bar__icon'} onClick={onClick} data-testid={'btn'}></a>
    </div>
  );
};

export default SearchBar;
