import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="temple-logo-container">
      <img
        src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711511435/download_2_eiriu5.jpg"
        alt="temple logo"
        className="temple-logo"
      />
      <h1 className="logo-name">Temples of India</h1>
    </div>
    <ul className="nav-list">
      <Link to="/" className="nav-link">
        <li className="list">Home</li>
      </Link>
      <Link to="/temples" className="nav-link">
        <li className="list">Temples</li>
      </Link>
      <Link to="/location" className="nav-link">
        <li className="list">Location</li>
      </Link>
      <Link to="/about/us" className="nav-link">
        <li className="list">About Us</li>
      </Link>
    </ul>
  </nav>
);
export default Header;
