import React from 'react'
import { Link } from 'react-router-dom'

import './result-team.scss'

const src = 'http://acor.sl.pt:7777/logos/'

export const ResultTeam = ({ teamId, team, score, winner }) => {
  const image = `${ src }${ teamId }.png`
  const url = `/teams/${ teamId }`
  const winnerClass = winner ? 'winner' : ''

  return <div key={ teamId } className={ `result-team ${winnerClass}` }>
    <div className='result-team-image'>
      <Link to={ url }>
        <img src={ image } alt={ team } />
      </Link>
    </div>

    <div className='result-team-name'>
      <Link to={ url }>
        { team }
      </Link>
    </div>

    <div className='result-team-score'>
      { score }
    </div>
  </div>
}
