export default function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Search and find out casts of your favorite show',
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
