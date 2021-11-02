// libraries
import React from "react";
import { NavLink } from "react-router-dom";

// utils
import { WeekLink } from "../../../interfaces";

// constants
const ROUTE_WEEKS = "/weeks/";

const WeekLinksList = ({ weeks }: WeekLink) => {
  const list = weeks.map((weekNumber: number) => (
    <li key={weekNumber}>
      <NavLink activeClassName="active" to={`${ROUTE_WEEKS}${weekNumber}`}>
        {weekNumber}
      </NavLink>
    </li>
  ));

  return <ul className="unstyled">{list}</ul>;
};

export default WeekLinksList;
