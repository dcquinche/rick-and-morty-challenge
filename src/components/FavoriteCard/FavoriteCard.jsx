import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FavoriteCard = ({ name, image, id }) => (
  <Link to={`/character-detail/${id}`} title="Go to Detail" className="favoriteCard">
    <figure className="favoriteCard__figures">
      <img className="favoriteCard__image" alt="character" src={image} />
    </figure>
    <h4 className="favoriteCard__name">{name}</h4>
  </Link>
);

FavoriteCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FavoriteCard;
