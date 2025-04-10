import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    color: '#343a40',
    textDecoration: 'none',
    padding: '0.2rem 0.5rem', // Add some padding for better hover area
    borderRadius: '4px', // Optional: rounded corners
    transition: 'color 0.3s ease, background-color 0.3s ease', // Smooth transition for color and background
  };

  const linkHoverStyle = {
    color: '#ffffff', // White text on hover
    backgroundColor: '#1a1a2e', // Dark background on hover
  };

  return (
    <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        padding: '0.5rem 0', 
        backgroundColor: '#f8f9fa', 
        borderBottom: '1px solid #dee2e6' 
    }}>
      <Link 
        to="/"
        style={linkStyle}
        onMouseEnter={e => {
          e.currentTarget.style.color = linkHoverStyle.color;
          e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = linkStyle.color;
          e.currentTarget.style.backgroundColor = 'transparent'; // Reset background
        }}
      >Home</Link>
      <Link 
        to="/india"
        style={linkStyle}
        onMouseEnter={e => {
          e.currentTarget.style.color = linkHoverStyle.color;
          e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = linkStyle.color;
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >India</Link>
      <Link 
        to="/world"
        style={linkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = linkHoverStyle.color; e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor; }}
        onMouseLeave={e => { e.currentTarget.style.color = linkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}
      >World</Link>
      <Link 
        to="/entertainment"
        style={linkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = linkHoverStyle.color; e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor; }}
        onMouseLeave={e => { e.currentTarget.style.color = linkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}
      >Entertainment</Link>
      <Link 
        to="/sports"
        style={linkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = linkHoverStyle.color; e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor; }}
        onMouseLeave={e => { e.currentTarget.style.color = linkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}
      >Sports</Link>
      <Link 
        to="/business"
        style={linkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = linkHoverStyle.color; e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor; }}
        onMouseLeave={e => { e.currentTarget.style.color = linkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}
      >Business</Link>
      <Link 
        to="/technology"
        style={linkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = linkHoverStyle.color; e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor; }}
        onMouseLeave={e => { e.currentTarget.style.color = linkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}
      >Technology</Link>
      <Link 
        to="/health"
        style={linkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = linkHoverStyle.color; e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor; }}
        onMouseLeave={e => { e.currentTarget.style.color = linkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}
      >Health</Link>
    </nav>
  );
};

export default Navbar;