const ShowMainData = ({ image, name, rating, genres, summary }) => {
  return (
    <div>
      <img src={image ? image.original : `/img_not_found.png`}></img>
      <h1>{name}</h1>
      <div>{rating ? rating.average || 'N/A' : 'N/A'}</div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div>
        <b>Genres:</b>
        <div>
          {genres.map((gen, ind) => (
            <span key={ind}>{gen}, </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
