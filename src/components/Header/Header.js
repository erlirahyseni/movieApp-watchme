import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>WATCHme</h1>
      <div>
        <button id="joinNow" onClick={() => navigate("/join-now")}>Join now</button>
        <button onClick={() => navigate("/signIn")}>Sign In</button>
      </div>
    </div>
  );
};

export default Header;
