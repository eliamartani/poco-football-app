import React from 'react'
import { NavLink } from 'react-router-dom'

import './links.scss'

export const Links = ({ chosenWeek, results, handleChange }) => {
  const weeks = results.map((week, index) => index + 1)
  const li = weeks.map(weekNumber =>
    <li key={weekNumber}>
      <NavLink activeClassName='active' to={`/weeks/${weekNumber}`}>{weekNumber}</NavLink>
    </li>
  )
  const options = weeks.map(weekNumber =>
    <option key={ weekNumber } value={ weekNumber }>{ weekNumber }</option>
  )

  return <div className='links'>
    <ul className='unstyled'>
      { li }
    </ul>
    <select defaultValue={ chosenWeek } onChange={ handleChange }>
      { options }
    </select>
  </div>
}
