import React, { useEffect, useState } from 'react';
import { Results } from '../../components/Results';
import { TableObject } from '../../components/TableObject';
import { API_ENDPOINT } from '../../services/api';
import { computeTeamStats } from '../../utils/stats/';
import { fetch } from '../../services/api';

import './team.scss';

const API_TEAM = '/teams/';

export const Team = props => {
  const [team, setTeam] = useState(null);
  const [stats, setStats] = useState(null);
  const [collapsed, setCollapse] = useState(false);

  // handle toggle click
  const handleToggle = event => {
    setCollapse(!collapsed);

    event.preventDefault();
  };

  // on parameter change
  useEffect(() => {
    const index = props.match.params.index;

    fetch(`${API_TEAM}${index}`).then(response => {
      setTeam(response);
      setCollapse(false);
    });
  }, [props.match.params.index]);

  // on team change
  useEffect(() => {
    if (!team) {
      return;
    }

    const newStats = computeTeamStats(team);

    setStats(newStats);
  }, [team]);

  if (!team) {
    return <div className="wrapper">Loading...</div>;
  }

  const imageUrl = `${API_ENDPOINT}/logos/${team.id}`;

  return (
    <div className="team">
      <div className="wrapper">
        <div className="container">
          <aside>
            <img src={imageUrl} alt={team.name} loading="lazy" />
            <h1>{team.name}</h1>
            <button className="toggle-info" onClick={handleToggle}>
              {`${collapsed ? 'Close' : 'Open'} team stats`}
            </button>
            <div className={`team-info ${collapsed ? 'collapsed' : ''}`}>
              <TableObject {...stats} />
            </div>
          </aside>
          <main>
            <h2>Results</h2>
            <Results results={team.results} />
          </main>
        </div>
      </div>
    </div>
  );
};
