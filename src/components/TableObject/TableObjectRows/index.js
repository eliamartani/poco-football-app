import React from 'react';

const titles = {
  matches: 'Matches',
  points: 'Points',
  won: 'Wins',
  drawn: 'Draws',
  lost: 'Losses',
  goals: 'Goals',
  goalsConceded: 'Goals Conceded',
};

export const TableObjectRows = ({ rows }) =>
  Object.entries(titles).map(([key, value]) => (
    <tr key={key}>
      <th>{value}</th>
      <td>{rows[key]}</td>
    </tr>
  ));
