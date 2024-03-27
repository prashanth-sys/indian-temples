import { IoLocationSharp } from "react-icons/io5";
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
          src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711539387/download_13_lys0w5.jpg"
          alt="temple"
          className="temple"
        />
        <h1 className="temple-heading">Arunachalesvara Temple</h1>
        <p className="description">
          The Arunachalesvara Temple, also known as the Annamalaiyar Temple, is
          a renowned Hindu temple dedicated to Lord Shiva. Located in
          Thiruvannamalai, Tamil Nadu, India, it is one of the largest temple
          complexes in the state and holds significant spiritual importance.
          Here are some details about the Arunachalesvara Temple.The
          Arunachalesvara Temple is a classic example of Dravidian architecture,
          characterized by its towering gopurams (gateway towers), pillared
          halls, and intricate sculptures. The temple complex spans a vast area
          and consists of several shrines, mandapams (halls), and tanks.
        </p>
        <h1 className="pooja">Pooja Timings</h1>
        <p className="description">5 am - 12:30 pm, 3:30-p:30 pm</p>

        <IoLocationSharp className="icon" />
        <p className="description">
          Pavazhakundur, Tiruvannamalai, Annamalai R.F., Tamil Nadu
        </p>
      </div>
    </div>
  </>
);
export default MeenakshiTemple;
