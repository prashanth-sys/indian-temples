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
          src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711521133/download_5_fgdbdl.jpg"
          alt="temple"
          className="temple"
        />
        <h1 className="temple-heading">Meenakshi Temple</h1>
        <p className="description">
          The Meenakshi Amman Temple, located in the heart of Madurai, Tamil
          Nadu, stands as a timeless symbol of devotion, architectural
          brilliance, and cultural heritage. Dedicated to Goddess Meenakshi, an
          embodiment of Goddess Parvati, and her consort Lord Sundareswarar
          (Shiva), this temple is one of the most revered pilgrimage sites in
          South India.
        </p>
        <h1 className="pooja">Pooja Timings</h1>
        <p className="description">Kalasandhi Pooja : 6:30 AM to 7:15 AM</p>
        <p className="description">
          Thrukalasandhi Pooja : 10:30 AM to 11:15 AM
        </p>
        <p className="description">
          Uchikkala Pooja (Noon Pooja) 10:30 AM to 11:15 AM
        </p>
        <p className="description">
          Ardhajama Pooja (Night Pooja) 7:30 PM to 8:15 PM
        </p>
        <FaLocationDot className="icon" />
        <p className="description">Madurai, Tamil Nadu</p>
      </div>
    </div>
  </>
);
export default MeenakshiTemple;
