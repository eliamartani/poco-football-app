import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './containers/Main/'

import './index.scss'

const mountNode = document.querySelector('#root')

ReactDOM.render(<Main />, mountNode)
