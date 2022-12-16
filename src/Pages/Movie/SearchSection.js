import "./SearchSection.css";
import MainHeader from "../../components/mainHeader/MainHeader";
import Typed from "react-typed";
import video1 from "../../assets/videos/johnwick.mp4";
import video2 from "../../assets/videos/driver.mp4";
import video3 from "../../assets/videos/theGentlemen.mp4";
import { FaSearch } from "react-icons/fa";

const SearchSection = (props) => {
  return (
    <div className="movieSection">
      <MainHeader />
      <div className="content">
        <div className="left_section">
          <h1>New suggested movies :</h1>
          <Typed
            className="typed"
            strings={[
              "The Gentleman",
              "King Arthur",
              "Dune",
              "Once upon a time",
              "Top Gun",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          ></Typed>
          <div className="input-section">
            <li>
              <FaSearch />
            </li>
            <input
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              placeholder="Type to search..."
            />
          </div>
        </div>
        <div className="right_section">
          <div className="posts">
            <h1>Posts</h1>
            <div>
              <video src={video2} width="25%" autoPlay loop muted></video>
              <video src={video1} width="25%" autoPlay loop muted></video>
              <video src={video3} width="25%" autoPlay loop muted></video>
            </div>
          </div>
          <div className="description">
            <Typed
              strings={[
                `Now more than ever we need to talk to each other, 
              to listen to each other and understand how we see
               the world, and cinema is the best medium for doing this
              `,
                `Talking about dreams is like talking about movies, since 
                the cinema uses the language of dreams; years can pass in 
                a second, and you can hop from one place to another.
              `,
              ]}
              typeSpeed={30}
              backSpeed={30}
              loop
            ></Typed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
