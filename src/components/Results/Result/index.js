import React from 'react'
import { ResultTeam } from '../ResultTeam'

import { getMatch } from '../../../utils/match'

import './result.scss'

// TASK #1 - create result line
export const Result = props => {
  const resultInfo = getMatch(props)
  const resultTeam = resultInfo.map(result => {
    return <ResultTeam key={ result.teamId } {...result} />
  })

  return <div className='result'>{ resultTeam }</div>
}
