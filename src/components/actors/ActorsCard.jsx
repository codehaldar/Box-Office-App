import { Link } from 'react-router-dom';
const ActorsCard = ({ name, country, img, gender, birthday }) => {
  return (
    <div>
      <div>
        <img src={img} alt={name}></img>
      </div>
      <h1>
        {name} {!!gender && `( ${gender} )`}
      </h1>
      <p>{country ? `comes from ${country}` : 'country Not known'}</p>
      {birthday && `born ${birthday}`}
      <div>
        <Link to={'/'}>Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ActorsCard;
