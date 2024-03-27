import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./index.css";

import Header from "../Header";

const Location = () => (
  <>
    <Header />
    <div className="location-container">
      <div className="location-items">
        <h1 className="location-heading">Location</h1>
        <FaLocationDot className="location-icon" />
      </div>
      <p className="location-details">
        Location: Near the banks of the Vaigai River in Madurai, Tamil Nadu,
        India.
      </p>
      <p className="location-details">
        Location: Membalam Road, Balaganapathy Nagar, Thanjavur, Tamil Nadu,
        India.
      </p>
      <p className="location-details">
        Location: Kapaleesvarar Sannadhi St, Vinayaka Nagar Colony, Mylapore,
        Chennai, Tamil Nadu, India.
      </p>
      <p className="location-details">
        Location: Rameswaram Island, Ramanathapuram district, Tamil Nadu, India.
      </p>
      <span className="span-element">
        These locations can be used for visitors to navigate to the temples when
        planning their visits.
      </span>
      <Link to="/temples" className="link">
        <button className="location-temples" type="button">
          Visit Temples
        </button>
      </Link>
    </div>
  </>
);
export default Location;
