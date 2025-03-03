import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
      <input
      className='todoSearch'
      placeholder="Cortar cebolla"
      value = {searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
    );
  }

  export { TodoSearch };