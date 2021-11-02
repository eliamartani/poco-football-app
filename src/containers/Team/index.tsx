// libraries
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

// components
import Loading from "../../components/Loading";
import Results from "../../components/Results";
import TableObject from "../../components/TableObject";

// utils
import { Matches, MatchResult, RouterParams, Team as TeamInterface } from "../../interfaces";
import { API_ENDPOINT, fetch } from "../../services/api";
import { computeTeamStats } from "../../utils";

// styles
import "./team.scss";

// constants
const API_TEAM = "/teams/";

const Team = ({ match }: RouteComponentProps<RouterParams>) => {
  const [team, setTeam] = useState<TeamInterface>();
  const [stats, setStats] = useState<MatchResult>();
  const [collapsed, setCollapse] = useState(false);

  // handle toggle click
  const handleToggle = () => setCollapse(!collapsed);

  // props
  const matches: Matches[] = team?.results ?? [];

  // on parameter change
  useEffect(() => {
    const index = match.params.index;

    fetch(`${API_TEAM}${index}`).then((response) => {
      setTeam(response as TeamInterface);
      setCollapse(false);
    });
  }, [match.params.index]);

  // on team change
  useEffect(() => {
    if (!team) {
      return;
    }

    const newStats = computeTeamStats(team);

    setStats(newStats);
  }, [team]);

  if (!team) {
    return <Loading />;
  }

  const imageUrl = `${API_ENDPOINT}/logos/${team?.id}`;
  const toggleLabel = `${collapsed ? "Close" : "Open"} team stats`;

  return (
    <div className="team">
      <div className="wrapper">
        <div className="container">
          <aside>
            <img src={imageUrl} alt={team?.name} loading="lazy" />

            <h1>{team?.name}</h1>

            <button className="toggle-info" onClick={handleToggle}>
              {toggleLabel}
            </button>

            <div className={`team-info ${collapsed ? "collapsed" : ""}`}>
              <TableObject rows={stats} />
            </div>
          </aside>

          <main>
            <h2>Results</h2>

            <Results matches={matches} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Team;
