import { Component } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import Header from "../Header";
import "./index.css";

class TempleHomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-container">
          <div className="temple-home-container">
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711515954/images_beukdn.jpg"
              alt="temple"
              className="temple-image"
            />
            <div className="temple-count-container">
              <h1 className="main-heading">
                7,50,000
                <span className="span"> Plus Temples and Counting.....</span>
              </h1>
              <button className="add-button" type="button">
                Add Your Temple
              </button>
            </div>
          </div>
          <div>
            <h1 className="tamilnadu-temples">Temples of Tamilnadu</h1>
            <ul className="temples-list">
              <Link to="/meenakshi/temple" className="temple-link">
                <li className="temple">Meenakshi Amman Temple, Madurai</li>
              </Link>
              <Link to="/brihadeeswarar/temple" className="temple-link">
                <li className="temple">
                  Brihadeeswarar Temple (Big Temple), Thanjavur
                </li>
              </Link>
              <Link to="/kapaleeshwarar/temple" className="temple-link">
                <li className="temple">Kapaleeshwarar Temple, Chennai</li>
              </Link>
              <Link to="/ramanathaswamy/temple" className="temple-link">
                <li className="temple">Ramanathaswamy Temple, Rameswaram</li>
              </Link>
              <Link to="/arunachalam/temple" className="temple-link">
                <li className="temple">
                  Arunachalesvara Temple, Tiruvannamalai
                </li>
              </Link>
            </ul>
          </div>
          <div className="contact-info-container">
            <h1 className="contact-heading">Contact Info</h1>
            <p className="info">Email: reddyprashanth512@gmail.com</p>
            <p className="info">PhoneNo: 7569941220</p>
            <p className="info">Developer: K.V Prashanth Kumar Reddy</p>
            <div className="icons-container">
              <FaWhatsapp className="info-icon" />{" "}
              <FaInstagram className="info-icon" />{" "}
              <FaLinkedin className="info-icon" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TempleHomePage;
