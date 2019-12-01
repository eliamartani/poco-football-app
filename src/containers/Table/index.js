import React, { useEffect, useState } from 'react'
import { TableResult } from '../../components/TableResult'

import { computeTable } from '../../utils/table/'
import { fetch } from '../../services/api'

const API_TEAMS = '/teams'
const API_WEEKS = '/weeks'

export const Table = () => {
  const [ table, setTable ] = useState([])

  // on load
  useEffect(() => {
    const requests = [ fetch(API_TEAMS), fetch(API_WEEKS) ]

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
