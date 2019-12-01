import React from 'react'
import { NavLink } from 'react-router-dom'

const ROUTE_WEEKS = '/weeks/'

export const WeekLinksList = ({ weeks }) => {
  const list = weeks.map(weekNumber =>
    <li key={ weekNumber }>
      <NavLink activeClassName='active' to={`${ ROUTE_WEEKS }${ weekNumber }`}>
        { weekNumber }
      </NavLink>
    </li>
  )

  return <ul className='unstyled'>
    { list }
  </ul>
}
