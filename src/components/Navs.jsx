import { Link } from 'react-router-dom';
const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/Starred',
  },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(ele => (
          <li key={ele.to}>
            {' '}
            <Link to={ele.to}> {ele.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;
