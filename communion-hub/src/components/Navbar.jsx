import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 shadow">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
          <span className="text-dark">Communion Hub</span>
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link className="nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
