// libraries
import React from "react";

// utils
import { MatchResult } from "../../../interfaces";

// constants
const titles = {
  matches: "Matches",
  points: "Points",
  won: "Wins",
  drawn: "Draws",
  lost: "Losses",
  goals: "Goals",
  goalsConceded: "Goals Conceded",
};

const TableObjectRows = ({ rows }: { rows: MatchResult | undefined }) => {
  const entries = Object.entries(titles).map(([key, value]) => (
    <tr key={key}>
      <th>{value}</th>

      <td>{rows?.[key as keyof MatchResult]}</td>
    </tr>
  ));

  return <>{entries}</>;
};

export default TableObjectRows;
