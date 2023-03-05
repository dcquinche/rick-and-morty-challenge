import './styles.css';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CharacterCard = ({ name, image, id }) => {
  const { isAuthenticated } = useAuth0();

  const handleClickFavorite = () => {
    const favoritesArr = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesArr.push({ name, image, id });
    const favoritesArrJSON = JSON.stringify(favoritesArr);
    localStorage.setItem('favorites', favoritesArrJSON);
  };

  return (
    <Link to={`/characters/${id}`} title="Go to Detail" className="characterCard">
      {
        isAuthenticated ? (
          <figure className="characterCard__figures">
            <img className="characterCard__image" alt="character" src={image} />
            <FontAwesomeIcon className="characterCard__icon" icon={faStar} size="2x" title="Add a Favorites" onClick={handleClickFavorite} />
          </figure>
        ) : (
          <img className="characterCard__image" alt="character" src={image} />
        )
      }
      <h4 className="characterCard__name">{name}</h4>
    </Link>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CharacterCard;
