import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <Link to="/">TMS</Link>
        <span className="header-subtitle">Transportation Management System</span>
      </div>
      <nav className="header-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/shipments">Shipments</Link>
        <Link to="/routes">Routes</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}

export default Header;
