import "./Intro.css";
import Header from "../../components/Header/Header";
import Typed from "react-typed";
import { FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <Header />
      <div className="content">
        <div>
          <p>
            WHAT'S ON <br />
            THE SCREEN?
          </p>
        </div>
        <div className="title">
          <h1>
            TOP MOVIES . <br />
            <Typed
              strings={[
                "ACTION",
                "HORROR",
                "MISTER",
                "ADVENTURE",
                "FANTASY",
                "HISTORY",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </h1>
          <div className="infoButtons">
            <button>Watch movies and more.</button>
            <button>2022</button>
          </div>
        </div>
        <div className="socialIcons">
          <li>
            <FaDribbble />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </div>
      </div>
      <div className="lastSection">
        <div className="card">
          <h1 className="number">01</h1>
          <h1>Explore top movies of all time</h1>
        </div>
        <div className="card">
          <h1 className="number">02</h1>
          <h1>Hight quality movies watch anywhere</h1>
        </div>
        <div className="card">
          <h1 className="number">03</h1>
          <h1>Unlimited movies, TV shows</h1>
        </div>
      </div>
    </div>
    
  );
};
export default Intro;
