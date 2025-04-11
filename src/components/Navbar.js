import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/india">India</Link>
      <Link to="/world">World</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/technology">Technology</Link>
      <Link to="/health">Health</Link>
      <span className="nav-separator">|</span>
      <Link to="/audio">Audio</Link>
      <Link to="/video">Video</Link>
      <Link to="/live">Live</Link>
    </nav>
  );
};

export default Navbar;