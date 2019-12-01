import React from 'react'

import './table-object.scss'

export const TableObject = rows => {
  return (
    <table className='table-object'>
      <tbody>
        { Object.entries(rows).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}
