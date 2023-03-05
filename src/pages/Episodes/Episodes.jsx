import './styles.css';
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

const GET_ALLEPISODES = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery(GET_ALLEPISODES);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  useEffect(() => {
    setResults(!search ? data.episodes.results
      // eslint-disable-next-line max-len
      : data.episodes.results.filter((episode) => episode.name.toLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="episodes">
      <h1 className="episodes__title">List of Episodes</h1>
      <section className="episodes__filter">
        <p className="episodes__filterByName"><strong>Filter by Name:</strong> </p>
        <input className="episodes__input" value={search} type="text" name="name" size="40" onChange={handleChange} />
      </section>
      <section className="episodes__listCards">
        {
          results.map((episode) => (
            <EpisodeCard
              name={episode.name}
              episode={episode.episode}
              airDate={episode.air_date}
              key={episode.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Episodes;
