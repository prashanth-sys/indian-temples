import { Link } from "react-router-dom";
import "./index.css";
import Header from "../Header";

const AboutUs = () => (
  <>
    <Header />
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">
        Welcome to my website, your ultimate guide to the rich cultural heritage
        and spiritual significance of Indian temples.
      </p>
      <h1 className="about-us-heading">Our Mission</h1>
      <p className="about-us-description">
        At [Your Website Name], our mission is to celebrate and showcase the
        diversity, beauty, and historical significance of Indian temples. We aim
        to provide enthusiasts, pilgrims, and curious minds with comprehensive
        information about these sacred sites, fostering a deeper understanding
        and appreciation of India's religious and architectural heritage.
      </p>
      <h1 className="about-us-heading">Our Vision</h1>
      <p className="about-us-description">
        We envision a platform that serves as a hub for temple enthusiasts,
        where they can explore, learn, and connect with the vibrant tapestry of
        Indian temple culture. Through our curated content and engaging
        community, we strive to promote cultural awareness, spiritual
        exploration, and a sense of unity among visitors from all walks of life.
      </p>
      <Link to="/temples" className="link">
        <button className="visit-temples" type="button">
          Visit Temples
        </button>
      </Link>
    </div>
  </>
);
export default AboutUs;
