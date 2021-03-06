import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Results } from '../../components/Results';
import { WeekLinks } from '../../components/WeekLinks';

import { setIndex } from '../../utils/parameter';
import { fetch } from '../../services/api';

const API_WEEKS = '/weeks';

const ROUTE_WEEKS = '/weeks/';

export const Weeks = props => {
  const history = useHistory();
  const index = setIndex(props.match.params.index);
  const [results, setResults] = useState([]);
  const [chosenWeek, setChosenWeek] = useState(index);

  // on load
  useEffect(() => {
    fetch(API_WEEKS).then(response => {
      setResults(response);
    });
  }, []);

  // on parameter change
  useEffect(() => {
    const index = setIndex(props.match.params.index);

    setChosenWeek(index);
  }, [props.match.params.index]);

  // handle select change
  const handleChange = event => {
    history.push(`${ROUTE_WEEKS}${event.target.value}`);
  };

  // props
  const linksProps = {
    chosenWeek: chosenWeek + 1,
    results,
    handleChange,
  };

  if (!results.length) {
    return <div className="wrapper">Loading...</div>;
  }

  return (
    <div className="weeks">
      <div className="wrapper">
        <div className="container">
          <aside>
            <h2>Weeks</h2>
            <WeekLinks {...linksProps} />
          </aside>
          <main>
            <h1>Results for week #{chosenWeek + 1}</h1>
            <Results results={results[chosenWeek]} />
          </main>
        </div>
      </div>
    </div>
  );
};
