import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getShowById } from '../api/tvmaze';
import { useQuery } from 'react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import { TextCenter } from '../components/common/TextCenter';

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
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to={'/'}>HOME</Link>
        </BackHomeWrapper>
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
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Casts</h2>
          <Cast cast={showData._embedded.cast} ShowId={ShowId} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Show data is loading </TextCenter>;
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
