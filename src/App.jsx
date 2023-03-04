import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Characters from './pages/Characters/Characters';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Locations from './pages/Locations/Locations';
import Episodes from './pages/Episodes/Episodes';
import Favorites from './pages/Favorites/Favorites';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character-detail/:id" element={<CharacterDetail />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </div>
);

export default App;
