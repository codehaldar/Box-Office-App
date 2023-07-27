import { useStarredShows } from '../lib/useStarredShows';
import { TextCenter } from '../components/common/TextCenter';
import { getShowsByIds } from '../api/tvmaze';
import { useQuery } from 'react-query';
import ShowGrid from '../components/shows/ShowGrid';
const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length === 0) {
    return <TextCenter>NO SHOWS ARE STARRED</TextCenter>;
  }
  if (starredShowsError) {
    return <TextCenter> Error Found: {starredShowsError.message}</TextCenter>;
  }
  return <TextCenter>Starred shows are loading</TextCenter>;
};
export default Starred;
