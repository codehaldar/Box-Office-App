import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorsCard = ({ name, country, img, gender, birthday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img} alt={name}></img>
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `( ${gender} )`}
      </h1>
      <p>{country ? `comes from ${country}` : 'country Not known'}</p>
      {birthday && `born ${birthday}`}
      <div>
        <Link to={'/'}>Read More</Link>
        <button type="button">Star me</button>
      </div>
    </SearchCard>
  );
};
export default ActorsCard;
