//import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';
import { searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ActorsGrid from '../components/actors/ActorsGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { useQuery } from 'react-query';

const Home = () => {
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);
  // //console.log(searchOptions);

  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOptions === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  const onSearch = async ({ q, searchOptions }) => {
    setFilter({ q, searchOptions });
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
