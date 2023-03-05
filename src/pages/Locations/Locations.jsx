import './styles.css';
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
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
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery(GET_ALLLOCATIONS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  useEffect(() => {
    setResults(!search ? data.locations.results
      // eslint-disable-next-line max-len
      : data.locations.results.filter((location) => location.name.toLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="locations">
      <h1 className="locations__title">List of Locations</h1>
      <section className="locations__filter">
        <p className="locations__filterByName"><strong>Filter by Name:</strong> </p>
        <input className="locations__input" value={search} type="text" name="name" size="40" onChange={handleChange} />
      </section>
      <section className="locations__listCards">
        {
          results.map((location) => (
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
