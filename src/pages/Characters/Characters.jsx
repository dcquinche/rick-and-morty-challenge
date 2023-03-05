import './styles.css';
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const GET_ALLCHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        status
        gender
        species
      }
    }
  }
`;

const Characters = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const { data, loading, error } = useQuery(GET_ALLCHARACTERS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  useEffect(() => {
    document.querySelector('#dropdownStatus').value = 'Status';
    document.querySelector('#dropdownSpecies').value = 'Species';
    document.querySelector('#dropdownGender').value = 'Gender';
  }, [status, species, gender]);

  useEffect(() => {
    setResults(!status ? data.characters.results
      : data.characters.results.filter((character) => character.status === status));
  }, [status]);

  useEffect(() => {
    setResults(!species ? data.characters.results
      : data.characters.results.filter((character) => character.species === species));
  }, [species]);

  useEffect(() => {
    setResults(!gender ? data.characters.results
      : data.characters.results.filter((character) => character.gender === gender));
  }, [gender]);

  const handleClickStatus = () => {
    const select = document.querySelector('#dropdownStatus');
    const option = select.value;
    if (option === 'Alive') {
      setStatus('Alive');
    }
    if (option === 'Dead') {
      setStatus('Dead');
    }
    if (option === 'unknown') {
      setStatus('unknown');
    }
  };

  const handleClickSpecies = () => {
    const select = document.querySelector('#dropdownSpecies');
    const option = select.value;
    if (option === 'Human') {
      setSpecies('Human');
    }
    if (option === 'Alien') {
      setSpecies('Alien');
    }
  };

  const handleClickGender = () => {
    const select = document.querySelector('#dropdownGender');
    const option = select.value;
    if (option === 'Female') {
      setGender('Female');
    }
    if (option === 'Male') {
      setGender('Male');
    }
    if (option === 'unknown') {
      setGender('unknown');
    }
  };

  const handleClickReset = () => {
    setResults(data.characters.results);
  };

  return (
    <div className="characters">
      <h1 className="characters__title">List of Characters</h1>
      <section className="characters__filters">
        <p className="characters__titleFilter"><strong>Filter By: </strong></p>
        <select className="characters__filter" name="dropdownStatus" id="dropdownStatus" onClick={handleClickStatus}>
          <option value="Status" disabled>Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select className="characters__filter" name="dropdownSpecies" id="dropdownSpecies" onClick={handleClickSpecies}>
          <option value="Species" disabled>Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        <select className="characters__filter" name="dropdownGender" id="dropdownGender" onClick={handleClickGender}>
          <option value="Gender" disabled>Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">Unknown</option>
        </select>
        <button className="characters__button" type="submit" onClick={handleClickReset}>Reset Filter</button>
      </section>
      <section className="characters__listCards">
        {
          results.map((character) => (
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
