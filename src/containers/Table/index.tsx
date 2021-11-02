// libraries
import { useEffect, useState } from "react";

// components
import Loading from "../../components/Loading";
import TableResult from "../../components/TableResult";

// utils
import { Matches, MatchResult } from "../../interfaces";
import { fetch } from "../../services/api";
import { computeTable } from "../../utils";

// constants
const API_TEAMS = "/teams";
const API_WEEKS = "/weeks";

const Table = () => {
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);

  // on load
  useEffect(() => {
    const requests = [fetch(API_TEAMS), fetch(API_WEEKS)];

    Promise.all(requests).then(([teams, weeksMatches]) => {
      const computedTable = computeTable(teams as string[], weeksMatches as Matches[][]);

      setMatchResults(computedTable);
    });
  }, []);

  if (!matchResults.length) {
    return <Loading />;
  }

  return (
    <div className="table">
      <div className="wrapper">
        <h1>Ranking</h1>

        <TableResult table={matchResults} />
      </div>
    </div>
  );
};

export default Table;
