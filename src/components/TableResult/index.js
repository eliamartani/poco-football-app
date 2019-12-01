import React from 'react'
import { TableResultRows } from './TableResultRows'

import './table-result.scss'

export const TableResult = ({ table }) => {
  return <table className='table-result'>
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
      <TableResultRows table={ table } />
    </tbody>
  </table>
}
