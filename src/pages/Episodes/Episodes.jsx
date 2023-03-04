import './styles.css';
import { useQuery, gql } from '@apollo/client';
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
  const { data, loading, error } = useQuery(GET_ALLEPISODES);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <div className="episodes">
      <h1 className="episodes__title">List of Episodes</h1>
      <section className="episodes__listCards">
        {
          data.episodes.results.map((episode) => (
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
