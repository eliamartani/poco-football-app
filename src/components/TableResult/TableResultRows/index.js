import React from 'react'
import { Link } from 'react-router-dom'

const API_IMAGE = 'http://acor.sl.pt:7777/logos/'

const ROUTE_TEAM = '/teams/'

export const TableResultRows = ({ table }) => table.map((result, index) => {
  const image = `${ API_IMAGE }${ result.teamId }`
  const url = `${ ROUTE_TEAM }${ result.teamId }`
  const position = index + 1

  return <tr key={ result.teamId }>
    <td>{ position }</td>
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
