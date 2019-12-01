import React from 'react'
import { Header } from '../../components/Header'
import { Table } from '../Table'
import { Team } from '../Team'
import { Weeks } from '../Weeks'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

export const Main = () => (
  <HashRouter>
    <Header />

    <Switch>
      <Route path='/weeks/:index' component={ Weeks } />
      <Route path='/teams/:index' component={ Team } />
      <Route path='/table' component={ Table } />

      <Redirect from='/' to='/weeks/1' />
    </Switch>
  </HashRouter>
)
