import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';
const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

// {type: "star", showId: ""}
// {type: "unstar", showId: ""}

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.ShowId);
    case 'UNSTAR':
      return currentStarred.filter(ele => ele !== action.ShowId);

    default:
      return currentStarred;
  }
};
const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );

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
        />
      ))}
    </div>
  );
};
export default ShowGrid;
