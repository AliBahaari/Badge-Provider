import { NavLink } from 'react-router-dom';

// Styles
import '../styles/Header.css';

// Images
import Logo from '../images/badge-provider-logo.png';

const Header = () => {
  return (
    <div className="header">
        <img src={ Logo } alt="Badge Provider Logo" />

        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/About">About The Project</NavLink>
        </nav>
    </div>
  );
}

export default Header;