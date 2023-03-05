import './styles.css';
import PropTypes from 'prop-types';

const FavoriteCard = ({ name, image }) => (
  <div className="favoriteCard">
    <figure className="favoriteCard__figures">
      <img className="favoriteCard__image" alt="character" src={image} />
    </figure>
    <h4 className="favoriteCard__name">{name}</h4>
  </div>
);

FavoriteCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FavoriteCard;
