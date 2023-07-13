import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from 'react-query';

const Show = () => {
  const { ShowId } = useParams();
  const result = useQuery({
    queryKey: ['Show', ShowId],
    queryFn: () => getShowById(ShowId),
  });
  const { data: showData, error: showError } = result;

  if (showError) {
    return <div>We have an error: {showError.message} </div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Show data is loading </div>;
};
export default Show;
