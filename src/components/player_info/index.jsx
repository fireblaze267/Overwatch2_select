import img_challenges from "../../assets/challenges_icon.svg";
import img_profile from "../../assets/dva_profile_icon.jpeg";
import git_profile from "../../assets/github-mark.png";
import img_social from "../../assets/social_icon.svg";
import "./styles.scss";

export default function Player_Info() {
  const gitLink = () =>
    window.open("https://github.com/fireblaze267/Overwatch2_select");

  return (
    <div className="player-main">
      <div className="player-banner">
        <img src={img_profile} />
        <label>Player</label>
      </div>

      <div className="player-line" />

      <div className="player-buttons">
        <div className="player-social">
          <img src={img_social} />
        </div>

        <div className="player-challenges">
          <img src={img_challenges} />
        </div>

        <div onClick={() => gitLink()} className="player-git">
          <img src={git_profile} />
          <label>Github</label>
        </div>
      </div>
    </div>
  );
}
