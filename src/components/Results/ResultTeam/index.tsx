// libraries
import { Link } from "react-router-dom";

// utils
import { Match } from "../../../interfaces";
import { API_ENDPOINT } from "../../../services/api";

// styles
import "./result-team.scss";

// constants
const ROUTE_TEAM = "/teams/";

const ResultTeam = ({ teamId, team, score, winner }: Match) => {
  const imageUrl = `${API_ENDPOINT}/logos/${teamId}`;
  const url = `${ROUTE_TEAM}${teamId}`;
  const winnerClass = winner ? "winner" : "";

  return (
    <div key={teamId} className={`result-team ${winnerClass}`}>
      <div className="result-team-image">
        <Link to={url}>
          <img src={imageUrl} alt={team} loading="lazy" />
        </Link>
      </div>

      <div className="result-team-name">
        <Link to={url}>{team}</Link>
      </div>

      <div className="result-team-score">{score}</div>
    </div>
  );
};

export default ResultTeam;
