import './styles.css';
import PropTypes from 'prop-types';

const EpisodeCard = ({ name, episode, airDate }) => (
  <div className="episodeCard">
    <h4 className="episodeCard__name">{name}</h4>
    <p><strong>Episode: </strong>{episode}</p>
    <p><strong>Air Date: </strong>{airDate}</p>
  </div>
);

EpisodeCard.propTypes = {
  name: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
};

export default EpisodeCard;
