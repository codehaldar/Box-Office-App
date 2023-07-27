import ShowCard from './ShowCard';
import { FlexGrid } from '../common/FlexGrid';
import { useStarredShows } from '../../lib/useStarredShows';
import srcimg from '../../lib/img_not_found.png';

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
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          img={data.show.image ? data.show.image.medium : srcimg}
          onStarredClicked={onStarredClicked}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};
export default ShowGrid;
