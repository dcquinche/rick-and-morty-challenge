import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CharacterCard = ({ name, image, id }) => {
  const handleClickFavorite = () => {
    const favoritesArr = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesArr.push({ name, image, id });
    const favoritesArrJSON = JSON.stringify(favoritesArr);
    localStorage.setItem('favorites', favoritesArrJSON);
  };

  return (
    <Link to={`/character-detail/${id}`} title="Go to Detail" className="characterCard">
      <figure className="characterCard__figures">
        <img className="characterCard__image" alt="character" src={image} />
        <FontAwesomeIcon className="characterCard__icon" icon={faHeart} size="2x" title="Add a Favorites" onClick={handleClickFavorite} />
      </figure>
      <h4 className="characterCard__name">{name}</h4>
    </Link>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CharacterCard;
