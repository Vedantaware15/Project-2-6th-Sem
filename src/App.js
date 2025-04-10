import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import India from './pages/India';
import World from './pages/World';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Health from './pages/Health';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResults from './pages/SearchResults';
import Business from './pages/Business';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Gaming from './pages/Gaming';
import Celebrity from './pages/Celebrity';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<World />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/health" element={<Health />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/entertainment/movies" element={<Movies />} />
          <Route path="/entertainment/tv-shows" element={<TVShows />} />
          <Route path="/entertainment/gaming" element={<Gaming />} />
          <Route path="/entertainment/celebrity" element={<Celebrity />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;