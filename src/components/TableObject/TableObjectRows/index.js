import React from 'react'

export const TableObjectRows = ({ rows }) => Object.entries(rows).map(([ key, value ]) => (
  <tr key={ key }>
    <th>{ key }</th>
    <td>{ value }</td>
  </tr>
))
