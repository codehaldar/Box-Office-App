import { useParams } from 'react-router-dom';
const Show = () => {
  const { ShowId } = useParams();
  console.log(ShowId);
  return <div>This is show with id {ShowId} </div>;
};
export default Show;
