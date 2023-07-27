import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';
const ShowCard = ({ name, img, id, summary, onStarredClicked, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.*?>/g, '') + '...'
    : 'NO Description';

  const startBtnRef = useRef();
  const handleStarClick = () => {
    onStarredClicked(id);
    const starBtnE1 = startBtnRef.current;
    if (!starBtnE1) return;
    if (starBtnE1) {
      starBtnE1.classList.remove('animate');
    } else {
      starBtnE1.classList.add('animate');
    }
  };
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img} alt={name}></img>
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </Link>
        <StarBtn
          ref={startBtnRef}
          type="button"
          onClick={handleStarClick}
          className={isStarred && 'animate'}
        >
          <StarIcon active={isStarred} />
          {/* {isStarred ? 'Unstar' : 'Star me'} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
