import './styles.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getCharacterById } from '../../features/character';

const CharacterCard = ({ name, image, id }) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickCharacter = async () => {
    navigate(`/characters/${id}`);
  };

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [id]);

  const handleClickFavorite = () => {
    const favoritesArr = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesArr.push({ name, image, id });
    const favoritesArrJSON = JSON.stringify(favoritesArr);
    localStorage.setItem('favorites', favoritesArrJSON);
  };

  return (
    <div className="characterCard">
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
      <button className="characterCard__button" type="submit" onClick={handleClickCharacter}>Go to Detail</button>
    </div>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CharacterCard;
