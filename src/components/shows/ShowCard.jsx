import { Link } from 'react-router-dom';
const ShowCard = ({ name, img, id, summary }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.*?>/g, '')
    : 'NO Description';
  return (
    <div>
      <div>
        <img src={img} alt={name}></img>
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <Link to={'/'}>Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ShowCard;
