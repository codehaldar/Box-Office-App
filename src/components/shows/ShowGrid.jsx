import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  const onStarredClicked = ShowId => {
    const isStarred = starredShows.includes(ShowId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', ShowId });
    } else {
      dispatchStarred({ type: 'STAR', ShowId });
    }
    return null;
  };
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          img={data.show.image ? data.show.image.medium : '/img_not_found.png'}
          onStarredClicked={onStarredClicked}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
