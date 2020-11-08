import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from 'src/routes/Route'

import LayoutDefault from 'src/layouts/Default'

import PageHome from 'src/pages/Home'
import PageSchedule from 'src/pages/Schedule'

import { HOME, SCHEDULE } from 'src/routes/constants'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={HOME}
          exact={true}
          component={PageHome}
          layout={LayoutDefault}
        />
        <Route
          path={SCHEDULE}
          exact={true}
          component={PageSchedule}
          layout={LayoutDefault}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
