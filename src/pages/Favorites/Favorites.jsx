import './styles.css';
import { useEffect, useState } from 'react';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')));
  }, []);

  return (
    <div className="favorites">
      <h1 className="favorites__title">List of Characters</h1>
      {
        favorites ? (
          <section className="favorites__listCards">
            {
              favorites.map((character) => (
                <FavoriteCard
                  name={character.name}
                  image={character.image}
                  id={character.id}
                  key={character.id}
                />
              ))
            }
          </section>
        ) : <p className="favorites__text">You have not selected any favorite character yet!</p>
      }
    </div>
  );
};

export default Favorites;
