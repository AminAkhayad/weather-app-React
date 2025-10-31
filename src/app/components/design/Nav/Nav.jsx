import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./animation.json";
import "./Nav.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import Button from "@design/Button/Button";
import propTypes from "prop-types";



const Nav = ({user, data}) => {

 

  return (
    <>
      <nav>
        <div className="brand-container">
          <p> <a href="/">UP 2 DATE</a></p>
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

        <Button className="btn btn--search">
          <Link to="/search">
            Search <CiSearch />
          </Link>
        </Button>

        <ul className="header-categories">
          {data.map((category) => (
            <li key={category.id}>
              <Link className="article-detail__link" to={`/categories/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>

        <div className="bookmark-container">
          <Button className="btn">
            <Link to="/bookmarks">
              Bookmarked <FaBookmark />
            </Link>
          </Button>
        </div>

        <div className="login-logout-container">
          {user && user.user ? (
            <Button className="btn">
              {user.user}
              <Link to="/logout">Logout</Link>
            </Button>
          ) : (
            <Button className="btn">
              <Link to="/login">Login</Link>
            </Button>
          )}

          
        </div>
      </nav>
    </>
  );
};
Nav.propTypes = {
  user: propTypes.object,
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired, // Each category must have an ID
      title: propTypes.string.isRequired, // Each category must have a title
      slug: propTypes.string.isRequired, // Each category must have a slug
    })
  ),
};


export default Nav;

