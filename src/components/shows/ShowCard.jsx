const ShowCard = ({ name, img, id, summary, onStarredClicked }) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarredClicked(id)}>
          Star me
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
