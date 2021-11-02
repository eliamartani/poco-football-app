// components
import ResultTeam from "../ResultTeam";

// utils
import { Matches } from "../../../interfaces";
import { getMatch } from "../../../utils";

// styles
import "./result.scss";

// TASK #1 - create result line
const Result = (props: Matches) => {
  const resultInfo = getMatch(props);
  const entries = resultInfo.map((result) => {
    return <ResultTeam key={result.teamId} {...result} />;
  });

  return <div className="result">{entries}</div>;
};

export default Result;
