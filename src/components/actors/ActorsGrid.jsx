import { FlexGrid } from '../common/FlexGrid';
import srcimg from '../../lib/img_not_found.png';
import ActorsCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          gender={data.person.gender}
          img={data.person.image ? data.person.image.medium : srcimg}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorsGrid;
