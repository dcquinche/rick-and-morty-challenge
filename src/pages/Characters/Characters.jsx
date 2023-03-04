/* eslint-disable max-len */
import './styles.css';
import { useQuery, gql } from '@apollo/client';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const GET_ALLCHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters = () => {
  const { data, loading, error } = useQuery(GET_ALLCHARACTERS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <div className="characters">
      <h1 className="characters__title">List of Characters</h1>
      <section className="characters__listCards">
        {
          data.characters.results.map((character) => (
            <CharacterCard
              name={character.name}
              image={character.image}
              id={character.id}
              key={character.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Characters;
