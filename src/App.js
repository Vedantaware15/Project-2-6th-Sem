import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import India from './pages/India';
import World from './pages/World';
import Movies from './pages/Movies';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Health from './pages/Health';
import Audio from './pages/Audio';
import Video from './pages/Video';
import Live from './pages/Live';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
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
            <Route path="/audio" element={<Audio />} />
            <Route path="/video" element={<Video />} />
            <Route path="/live" element={<Live />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;