import { useEffect, useReducer } from 'react';
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
export const useStarredShows = () => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );
  return [starredShows, dispatchStarred];
};
