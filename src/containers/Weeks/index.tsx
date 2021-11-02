// libraries
import React, { ChangeEvent, useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

// components
import Loading from "../../components/Loading";
import WeekLinks from "../../components/WeekLinks";
import Results from "../../components/Results";

// utils
import { Matches, RouterParams, WeekLink } from "../../interfaces";
import { setIndex } from "../../utils";
import { fetch } from "../../services/api";

// constants
const API_WEEKS = "/weeks";
const ROUTE_WEEKS = "/weeks/";

const Weeks = ({ match }: RouteComponentProps<RouterParams>) => {
  const history = useHistory();
  const index = setIndex(match.params.index);

  const [results, setResults] = useState<Matches[][]>();
  const [chosenWeek, setChosenWeek] = useState(index);

  // handle select change
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    history.push(`${ROUTE_WEEKS}${event.target.value}`);
  };

  // on load
  useEffect(() => {
    fetch(API_WEEKS).then((response) => {
      response && setResults(response as Matches[][]);
    });
  }, []);

  // on parameter change
  useEffect(() => {
    const index = setIndex(match.params.index);
    setChosenWeek(index);
  }, [match.params.index]);

  // props
  const linksProps: WeekLink = {
    chosenWeek: chosenWeek + 1,
    weeks: Array(results?.length ?? 0)
      .fill(0)
      .map((value, index) => index + 1),
    handleChange,
  };
  const matches: Matches[] = results?.[chosenWeek] ?? [];

  if (!results?.length ?? 0) {
    return <Loading />;
  }

  return (
    <div className="weeks">
      <div className="wrapper">
        <div className="container">
          <aside>
            <h1>Weeks</h1>

            <WeekLinks {...linksProps} />
          </aside>

          <main>
            <h1>Results for week #{chosenWeek + 1}</h1>

            <Results matches={matches} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Weeks;
