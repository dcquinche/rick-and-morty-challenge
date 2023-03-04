/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClickCharacters = () => {
    navigate('/');
  };

  const handleClickEpisodes = () => {
    navigate('/episodes');
  };

  const handleClickLocations = () => {
    navigate('/locations');
  };

  return (
    <nav className="navbar">
      <section className="navbar__pages">
        <p className="navbar__lists" onClick={handleClickCharacters}>Characters</p>
        <p className="navbar__lists" onClick={handleClickEpisodes}>Episodes</p>
        <p className="navbar__lists" onClick={handleClickLocations}>Locations</p>
      </section>
    </nav>

  );
};

export default NavBar;
