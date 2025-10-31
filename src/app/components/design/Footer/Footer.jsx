import "./Footer.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./animation.json";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import FetchApi from "@functional/FetchApi/FetchApi";

const Footer = () => {


  const {data,error} = FetchApi("categories");
  if (error) {
    return <div>error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <footer>
      <div className="about-content">
         <div className="label">
        <div className="brand-container">
          <p>UP 2 DATE</p>
          <figure className="brand-container__item">
            <Player
              className="brand__logo"
              autoplay
              once
              hover="play"
              src={animationData}
              style={{ width: "6rem" }}
            />
          </figure>
        </div>
      </div>
      <p className="footer-description footer-description--small">
        Up 2 Date is a dynamic news platform tailored for young students,
        delivering current events in a fun, bite-sized format. Covering
        everything from world news to pop culture, it uses simple language and
        visuals to keep readers engaged. With quizzes and infographics, Up 2
        Date makes staying informed easy and enjoyable.
      </p>
      </div>
      <div className="footer-links">
        <div className="label">
          <div className="label__title">
            <h3>Links</h3>
          </div>
        </div>
        
        <ul className="footer-categories">
          {data.map((category) => (
            <li key={category.id}>
              <p className="btn">
                <Link  to={`/categories/${category.slug}`}>{category.title}</Link>
              </p>
              </li>
          ))}
       
         
        </ul> 
        
       
      </div>
      <div className="footer-links">
        <div className="label">
        <h3 >Exatra Links</h3>

        </div>
        <ul className="extra-links">
            <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
            <li><a href="#"><FaFacebook></FaFacebook></a></li>
            <li><a href="#"><FaTwitter></FaTwitter></a></li>
            <li><a href="#"><FaInstagram></FaInstagram></a></li>



            </ul>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} UP 2 DATE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
