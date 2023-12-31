const BASE_URL = 'https://api.tvmaze.com';
const Getapi = async queryString => {
  //throw new Error('Something is Wrong');
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};
export const searchForShows = query => Getapi(`/search/shows?q=${query}`);
export const searchForPeople = query => Getapi(`/search/people?q=${query}`);
export const getShowById = ShowId =>
  Getapi(`/shows/${ShowId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async ShowIds => {
  const requestPromises = ShowIds.map(id => Getapi(`/shows/${id}`));
  return await Promise.all(requestPromises);
};
