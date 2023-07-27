import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOptions, setSearchOptions] = useState('shows');

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

      <CustomRadio
        label="Shows"
        type="radio"
        name="search-options"
        value="shows"
        checked={searchOptions === 'shows'}
        onChange={onRadioChange}
      />

      <CustomRadio
        label="Actors"
        type="radio"
        name="search-options"
        value="actors"
        checked={searchOptions === 'actors'}
        onChange={onRadioChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
