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
          src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711524786/download_9_xsynjv.jpg"
          alt="temple"
          className="temple"
        />
        <h1 className="temple-heading">Brihadeeswarar Temple</h1>
        <p className="description">
          The Brihadeeswarar Temple, famously known as the Big Temple, is an
          architectural marvel and a revered pilgrimage site located in
          Thanjavur, Tamil Nadu. Built over a thousand years ago by the Chola
          dynasty's great emperor, Raja Raja Chola I, this temple stands as a
          testament to the architectural prowess and spiritual devotion of
          ancient India.
        </p>
        <h1 className="pooja">Pooja Timings</h1>
        <p className="description">
          The temple is open from 6:00 a.m.–12:30 p.m. and 4:00 p.m.–9:00 p.m.
          every day.
        </p>

        <FaLocationDot className="icon" />
        <p className="description">
          Balaganapathy Nagar, Thanjavur, Tamil Nadu{" "}
        </p>
      </div>
    </div>
  </>
);
export default MeenakshiTemple;
