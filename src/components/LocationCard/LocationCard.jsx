import './styles.css';
import PropTypes from 'prop-types';

const LocationCard = ({ name, type, dimension }) => (
  <div className="locationCard">
    <h4 className="locationCard__name">{name}</h4>
    <p><strong>Type: </strong>{type}</p>
    <p><strong>Dimension: </strong>{dimension}</p>
  </div>
);

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
};

export default LocationCard;
