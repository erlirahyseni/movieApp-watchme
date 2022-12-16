import "./App.css";
import Intro from "./Pages/Intro/Intro";
import SignIn from "./Pages/SignIn/SignIn";
import JoinNow from "./Pages/JoinNow/JoinNow";
import MoviePage from "./Pages/Movie/MoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/join-now" element={<JoinNow />}></Route>
          <Route path="/movie-page" element={<MoviePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
