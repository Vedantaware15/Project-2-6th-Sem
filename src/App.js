import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import India from './pages/India';
import World from './pages/World';
import Movies from './pages/Movies';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Health from './pages/Health';

function App() {
  return (
    <div className="App">
      <header>
        <h1>News Hub</h1>
      </header>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<World />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;