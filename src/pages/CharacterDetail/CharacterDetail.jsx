import './styles.css';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import CharacterCardDetail from '../../components/CharacterCardDetail/CharacterCardDetail';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;

const CharacterDetail = () => {
  const { id } = useParams();
  const options = {
    variables: { id },
  };
  const { data, loading, error } = useQuery(GET_CHARACTER, options);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div className="characterDetail">
      <h1 className="characterDetail__title">Character Detail</h1>
      <section className="characterDetail__description">
        {
          data ? (
            <CharacterCardDetail
              name={data.character.name}
              image={data.character.image}
              status={data.character.status}
              species={data.character.species}
              gender={data.character.gender}
              originLocation={data.character.origin.name}
              lastKnownLocation={data.character.location.name}
              id={data.character.id}
              key={data.character.id}
            />
          ) : null
        }
      </section>
    </div>
  );
};

export default CharacterDetail;
