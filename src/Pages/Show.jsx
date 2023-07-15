import { useParams, useNavigate, Link } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from 'react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

const Show = () => {
  const { ShowId } = useParams();
  const result = useQuery({
    queryKey: ['Show', ShowId],
    queryFn: () => getShowById(ShowId),
    refetchOnWindowFocus: false,
  });
  const { data: showData, error: showError } = result;
  //const navigateTo = useNavigate();
  // const Goback = () => {
  //   navigateTo('/');
  // };
  if (showError) {
    return <div>We have an error: {showError.message} </div>;
  }
  if (showData) {
    return (
      <div>
        <Link to={'/'}>HOME</Link>
        {/* <button type="button" onClick={Goback}>
          Home
        </button> */}
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.ratting}
          genres={showData.genres}
          summary={showData.summary}
        />
        <h2>Details</h2>
        <Details
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Casts</h2>
          <Cast cast={showData._embedded.cast} ShowId={ShowId} />
        </div>
      </div>
    );
  }

  return <div>Show data is loading </div>;
};
export default Show;
