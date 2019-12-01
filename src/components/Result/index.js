import React from 'react'
import { ResultTeam } from './ResultTeam/'

import { getResult } from '../../utils/result/'

import './result.scss'

// TASK #1 - create result line
export const Result = props => {
  const resultInfo = getResult(props)
  const resultTeam = resultInfo.map(result => {
    return <ResultTeam key={ result.teamId } {...result} />
  })

  return <div className='result'>{ resultTeam }</div>
}
