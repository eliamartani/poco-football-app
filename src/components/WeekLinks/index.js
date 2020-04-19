import React from 'react';
import { WeekLinksList } from './WeekLinksList';
import { WeekLinksSelect } from './WeekLinksSelect';

import './week-links.scss';

export const WeekLinks = ({ chosenWeek, results, handleChange }) => {
  const weeks = results.map((week, index) => index + 1);
  const selecOptions = {
    chosenWeek,
    handleChange,
    weeks,
  };

  return (
    <div className="week-links">
      <WeekLinksList weeks={weeks} />
      <WeekLinksSelect {...selecOptions} />
    </div>
  );
};
