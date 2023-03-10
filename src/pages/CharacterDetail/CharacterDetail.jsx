import './styles.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterById } from '../../features/character';
import CharacterCardDetail from '../../components/CharacterCardDetail/CharacterCardDetail';

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [id]);

  return (
    <div className="characterDetail">
      <h1 className="characterDetail__title">Character Detail</h1>
      <section className="characterDetail__description">
        {
          character ? (
            <CharacterCardDetail
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              gender={character.gender}
              originLocation={character.origin.name}
              lastKnownLocation={character.location.name}
              id={character.id}
              key={character.id}
            />
          ) : null
        }
      </section>
    </div>
  );
};

export default CharacterDetail;
