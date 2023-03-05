import './styles.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CharacterCardDetail = ({
  image, name, status, species, gender, originLocation, lastKnownLocation,
}) => {
  const navigate = useNavigate();
  const handleClickCharacters = () => {
    navigate('/characters');
  };

  return (
    <div className="characterCardDetail">
      <figure className="characterCardDetail__figure">
        <img className="characterCardDetail__image" alt="product" src={image} />
      </figure>
      <section className="characterCardDetail__textContainer">
        <section className="characterCardDetail__description">
          <h2 className="characterCardDetail__info">{name}</h2>
          <p className="characterCardDetail__info"><strong>Status:</strong> {status}</p>
          <p className="characterCardDetail__info"><strong>Species:</strong> {species}</p>
          <p className="characterCardDetail__info"><strong>Gender:</strong> {gender}</p>
          <p className="characterCardDetail__info"><strong>Origin:</strong> {originLocation}</p>
          <p className="characterCardDetail__info"><strong>Last Known Location:</strong> {lastKnownLocation}</p>
        </section>
        <section className="characterCardDetail__buttonContainer">
          <button className="characterCardDetail__button" type="submit" onClick={handleClickCharacters}>Go Back</button>
        </section>
      </section>
    </div>
  );
};

CharacterCardDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  originLocation: PropTypes.string.isRequired,
  lastKnownLocation: PropTypes.string.isRequired,
};

export default CharacterCardDetail;
