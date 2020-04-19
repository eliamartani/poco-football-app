import React from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINT } from '../../../services/api';

const ROUTE_TEAM = '/teams/';

export const TableResultRows = ({ table }) =>
  table.map((result, index) => {
    const imageUrl = `${API_ENDPOINT}/logos/${result.teamId}`;
    const url = `${ROUTE_TEAM}${result.teamId}`;
    const position = index + 1;

    return (
      <tr key={result.teamId}>
        <td>{position}</td>
        <td>
          <Link to={url}>
            <img src={imageUrl} alt={result.teamName} loading="lazy" />
            <span>{result.teamName}</span>
          </Link>
        </td>
        <td>
          <strong>{result.points}</strong>
        </td>
        <td>{result.won}</td>
        <td>{result.drawn}</td>
        <td>{result.lost}</td>
        <td>{result.goals}</td>
        <td>{result.goalsConceded}</td>
        <td>{result.goalsDifference}</td>
      </tr>
    );
  });
