import React from 'react';

export const WeekLinksSelect = ({ chosenWeek, handleChange, weeks }) => {
  const options = weeks.map(weekNumber => (
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
