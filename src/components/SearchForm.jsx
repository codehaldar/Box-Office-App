import { useState, useEffect } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOptions, setSearchOptions] = useState('shows');

  useEffect(() => {
    console.log('subham');
    return () => {
      console.log('Before the next ', searchOptions);
    };
  }, [searchOptions]);
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onRadioChange = ev => {
    setSearchOptions(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOptions,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <label>
        Shows
        <input
          type="radio"
          name="search-options"
          value="shows"
          checked={searchOptions === 'shows'}
          onChange={onRadioChange}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-options"
          value="actors"
          checked={searchOptions === 'actors'}
          onChange={onRadioChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
