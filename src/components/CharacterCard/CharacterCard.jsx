import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = ({ name, image, id }) => (
  <Link to={`/character-detail/${id}`} className="characterCard">
    <img className="characterCard__image" alt="character" src={image} />
    <h4 className="characterCard__name">{name}</h4>
  </Link>
);

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CharacterCard;
