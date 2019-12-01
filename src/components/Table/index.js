import React, { useEffect, useState } from 'react'
import { TableResult } from './TableResult/'

import { computeTable } from '../../utils/table/'
import { fetch } from '../../services/api'

import './table.scss'

export const Table = () => {
  const [ table, setTable ] = useState([])

  // on load
  useEffect(() => {
    const requests = [ fetch('/teams'), fetch('/weeks') ]

    Promise.all(requests).then(([ teams, weeksMatches ]) => {
      const computedTable = computeTable(teams, weeksMatches)

      setTable(computedTable)
    })
  }, [])

  if (!table.length) {
    return <div className='wrapper'>Loading...</div>
  }

  return <div className='table'>
    <div className='wrapper'>
      <h1>Ranking</h1>
      <TableResult table={ table } />
    </div>
  </div>
}
