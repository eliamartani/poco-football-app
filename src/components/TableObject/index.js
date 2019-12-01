import React from 'react'
import { TableObjectRows } from './TableObjectRows'

import './table-object.scss'

export const TableObject = rows => {
  return (
    <table className='table-object'>
      <tbody>
        <TableObjectRows rows={ rows } />
      </tbody>
    </table>
  )
}
