// libraries
import React from "react";

// components
import WeekLinksList from "./WeekLinksList";
import WeekLinksSelect from "./WeekLinksSelect";

// utils
import { WeekLink } from "../../interfaces";

// styles
import "./week-links.scss";

const WeekLinks = (weekLink: WeekLink) => {
  return (
    <div className="week-links">
      <WeekLinksList {...weekLink} />

      <WeekLinksSelect {...weekLink} />
    </div>
  );
};

export default WeekLinks;
