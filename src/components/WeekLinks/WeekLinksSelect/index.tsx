// libraries
import React from "react";

// utils
import { WeekLink } from "../../../interfaces";

const WeekLinksSelect = ({ chosenWeek, handleChange, weeks }: WeekLink) => {
  const options = weeks.map((weekNumber) => (
    <option key={weekNumber} value={weekNumber}>
      {weekNumber}
    </option>
  ));

  return (
    <select defaultValue={chosenWeek} onChange={handleChange}>
      {options}
    </select>
  );
};

export default WeekLinksSelect;
