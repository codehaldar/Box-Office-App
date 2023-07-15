const Cast = ({ cast }) => {
  return (
    <div>
      {!!cast &&
        cast.map(({ person, character, voice }) => (
          <div key={person.id}>
            <div>
              <img
                src={person.image ? person.image.medium : '/img_not_found.png'}
                alt={person.name}
              ></img>
              <div>
                {person.name} | {character.name}{' '}
                {voice ? '| voice overed' : null}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Cast;
