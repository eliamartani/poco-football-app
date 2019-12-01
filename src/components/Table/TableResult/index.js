import React from 'react'
import { Link } from 'react-router-dom'

const src = 'http://acor.sl.pt:7777/logos/'

export const TableResult = ({ table }) => {
  const rows = table.map((result, index) => {
    const image = `${ src }${ result.teamId }.png`
    const url = `/teams/${ result.teamId }`

    return <tr key={ index }>
      <td>{ index + 1 }</td>
      <td>
        <Link to={ url }>
          <img src={ image } alt={ result.teamName } />
          <span>
            { result.teamName }
          </span>
        </Link>
      </td>
      <td>
        <strong>{ result.points }</strong>
      </td>
      <td>{ result.won }</td>
      <td>{ result.drawn }</td>
      <td>{ result.lost }</td>
      <td>{ result.goals }</td>
      <td>{ result.goalsConceded }</td>
      <td>{ result.goalsDifference }</td>
    </tr>
  })

  return <table>
    <thead>
      <tr>
        <th title='Position'>
          <span>Position</span>
        </th>
        <th title='Team'>
          Team
        </th>
        <th title='Points'>
          P<span>oints</span>
        </th>
        <th title='Won'>
          W<span>on</span>
        </th>
        <th title='Drawn'>
          D<span>rawn</span>
        </th>
        <th title='Lost'>
          L<span>ost</span>
        </th>
        <th title='Goals For'>GF</th>
        <th title='Goals Against'>GA</th>
        <th title='Goals Difference'>GD</th>
      </tr>
    </thead>
    <tbody>
      { rows }
    </tbody>
  </table>
}
