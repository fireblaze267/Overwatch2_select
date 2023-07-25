import "./App.scss";
import img_play from "./assets/play_icon.svg";
import Bottom_func from "./components/bottom_func";
import Player_Info from "./components/player_info";
import Roles from "./components/roles";

function App() {
  return (
    <div>
      <Player_Info />
      <div className="page-title">
        <img src={img_play} />
        <h1>Livre</h1>
      </div>
      <Roles />
      <Bottom_func />
    </div>
  );
}

export default App;
