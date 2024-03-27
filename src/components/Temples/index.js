import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

class Temples extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="temples-container">
          <h1 className="temples-spiritual">
            The Spiritual Significance of Indian Temples
          </h1>
          <p className="temple-description">
            Delve into the spiritual significance of Indian temples, where
            ancient rituals and traditions converge to create sacred spaces that
            inspire awe and reverence. Discover the deep-rooted beliefs and
            practices that shape the spiritual fabric of India.
          </p>
          <Link to="/meenakshi/temple" className="link">
            <div className="temples-details-card">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711519655/download_4_zo9b44.jpg"
                alt="temple"
                className="temples-details"
              />
              <h1 className="temple-name">Meenakshi Temple</h1>
              <p className="temple-data">
                The Meenakshi Amman Temple, located in the heart of Madurai,
                Tamil Nadu, stands as a timeless symbol of devotion,
                architectural brilliance, and cultural heritage........
              </p>
            </div>
          </Link>

          <Link to="/brihadeeswarar/temple" className="link">
            <div className="temples-details-card">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711523944/download_6_yfqn5u.jpg"
                alt="temple"
                className="temples-details"
              />
              <h1 className="temple-name">Brihadeeswarar Temple </h1>
              <p className="temple-data">
                The Brihadeeswarar Temple, famously known as the Big Temple, is
                an architectural marvel and a revered pilgrimage site located in
                Thanjavur, Tamil Nadu......
              </p>
            </div>
          </Link>

          <Link to="/Kapaleeshwarar/temple" className="link">
            <div className="temples-details-card">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711524166/download_7_mknozi.jpg"
                alt="temple"
                className="temples-details"
              />
              <h1 className="temple-name">Kapaleeshwarar Temple </h1>
              <p className="temple-data">
                The Kapaleeshwarar Temple, nestled in the bustling city of
                Chennai, Tamil Nadu, is a sacred haven dedicated to Lord Shiva,
                the Supreme Being in Hinduism......
              </p>
            </div>
          </Link>

          <Link to="/ramanathaswamy/temple" className="link">
            <div className="temples-details-card">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711524335/download_8_vodqhh.jpg"
                alt="temple"
                className="temples-details"
              />
              <h1 className="temple-name">Ramanathaswamy Temple </h1>
              <p className="temple-data">
                The Ramanathaswamy Temple, situated on the sacred island of
                Rameswaram in Tamil Nadu, stands as a revered pilgrimage site
                steeped in mythological lore and spiritual significance.
                Dedicated to Lord Shiva.......
              </p>
            </div>
          </Link>

          <Link to="/arunachalam/temple" className="link">
            <div className="temples-details-card">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711539099/download_12_ktkfqa.jpg"
                alt="temple"
                className="temples-details"
              />
              <h1 className="temple-name">Arunachalam Temple </h1>
              <p className="temple-data">
                The Arunachalesvara Temple, also known as the Annamalaiyar
                Temple, is a renowned Hindu temple dedicated to Lord Shiva.
                Located in Thiruvannamalai, Tamil Nadu.......
              </p>
            </div>
          </Link>
        </div>
      </>
    );
  }
}
export default Temples;
