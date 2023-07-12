import ShowCard from './ShowCard';
const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          img={
            data.show.image
              ? data.show.image.medium
              : '/public/img_not_found.png'
          }
        />
      ))}
    </div>
  );
};
export default ShowGrid;
