import './styles.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

const Episodes = () => {
  const { episodes } = useSelector((state) => state.episodes);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setResults(!search ? episodes
      // eslint-disable-next-line max-len
      : episodes.filter((episode) => episode.name.toLowerCase().includes(search.toLocaleLowerCase())));
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
