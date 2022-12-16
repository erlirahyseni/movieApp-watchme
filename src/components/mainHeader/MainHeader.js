import "./MainHeader.css";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mainHeader">
      <h1>WATCHme</h1>
      <div>
        <button id='logOut'onClick={() => navigate("/")}>Log out</button>
      </div>
    </div>
  );
};

export default MainHeader;
