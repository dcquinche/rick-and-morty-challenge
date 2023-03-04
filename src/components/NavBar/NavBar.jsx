/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const {
    loginWithRedirect, logout, isAuthenticated,
  } = useAuth0();
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
        <section className="navbar__lists">
          { isAuthenticated ? (
            <FontAwesomeIcon className="navbar__logButton" icon={faRightFromBracket} title="Log Out" onClick={logout} />
          ) : (
            <FontAwesomeIcon className="navbar__logButton" icon={faRightToBracket} title="Log In" onClick={loginWithRedirect} />
          )}
        </section>
      </section>
    </nav>

  );
};

export default NavBar;
