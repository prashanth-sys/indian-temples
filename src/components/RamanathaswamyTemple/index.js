import { FaLocationDot } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./index.css";
import Header from "../Header";
const MeenakshiTemple = () => (
  <>
    <Header />
    <div className="temples-data-container">
      <div className="indian-temple">
        <Link to="/temples" className="link">
          <IoArrowBack className="icon" />
        </Link>
        <img
          src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711527315/download_11_s0os7e.jpg"
          alt="temple"
          className="temple"
        />
        <h1 className="temple-heading">Ramanathaswamy Temple</h1>
        <p className="description">
          The Ramanathaswamy Temple, situated on the sacred island of Rameswaram
          in Tamil Nadu, stands as a revered pilgrimage site steeped in
          mythological lore and spiritual significance. Dedicated to Lord Shiva,
          the temple is believed to hold great sanctity and is a destination of
          immense religious importance for Hindus across the world.
        </p>
        <h1 className="pooja">Pooja Timings</h1>
        <p className="description">Temple is from 5 AM to 1 PM</p>

        <FaLocationDot className="icon" />
        <p className="description">Mylapore, Chennai</p>
      </div>
    </div>
  </>
);
export default MeenakshiTemple;
