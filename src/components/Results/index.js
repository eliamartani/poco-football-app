import React from 'react'
import { Result } from '../Result/'

export const Results = ({ results }) => {
  const resultList = results.map((result, index) => {
    return <Result key={index} {...result} />
  })

  if (!resultList.length) {
    return <p>
      No results found
    </p>
  }

  return resultList
}
