import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
const useShowDataById = ShowId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    async function datafetch() {
      try {
        const data = await getShowById(ShowId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    datafetch();
  }, [ShowId]);
  return { showData, showError };
};
const Show = () => {
  const { ShowId } = useParams();
  const { showData, showError } = useShowDataById(ShowId);

  if (showError) {
    return <div>We have an error: {showError.message} </div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Show data is loading </div>;
};
export default Show;
