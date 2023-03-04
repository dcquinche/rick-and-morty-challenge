import './styles.css';
import { useQuery, gql } from '@apollo/client';
import LocationCard from '../../components/LocationCard/LocationCard';

const GET_ALLLOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const Locations = () => {
  const { data, loading, error } = useQuery(GET_ALLLOCATIONS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <div className="locations">
      <h1 className="locations__title">List of Locations</h1>
      <section className="locations__listCards">
        {
          data.locations.results.map((location) => (
            <LocationCard
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              id={location.id}
              key={location.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Locations;
