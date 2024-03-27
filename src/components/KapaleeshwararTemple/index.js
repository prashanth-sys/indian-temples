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
          src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711527035/download_10_lwbzkb.jpg"
          alt="temple"
          className="temple"
        />
        <h1 className="temple-heading">Kapaleeshwarar Temple</h1>
        <p className="description">
          The Kapaleeshwarar Temple, nestled in the heart of Mylapore, Chennai,
          stands as a timeless testament to the city's rich cultural heritage
          and spiritual vibrancy. Dedicated to Lord Shiva in his form as
          Kapaleeshwarar, and his consort Goddess Parvati as Karpagambal, this
          ancient temple is revered by devotees for its architectural splendor,
          religious significance, and vibrant cultural celebrations.
        </p>
        <h1 className="pooja">Pooja Timings</h1>
        <p className="description">Palliyarai Deepa Arathana. 05:00 A.M</p>
        <p className="description">Spadigalinga Deepa Arathana. 05:10 A.M</p>
        <p className="description">Thiruvananthal Deepa Arathana. 05:45 A.M</p>

        <FaLocationDot className="icon" />
        <p className="description">Mylapore, Chennai</p>
      </div>
    </div>
  </>
);
export default MeenakshiTemple;
