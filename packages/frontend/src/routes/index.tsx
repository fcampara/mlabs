import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from 'src/routes/Route'

import LayoutDefault from 'src/layouts/Default'

import PageHome from 'src/pages/Home'
import PageSchedule from 'src/pages/Schedule'
import PageSchedules from 'src/pages/Schedules'

import {
  HOME,
  SCHEDULE,
  SCHEDULES
} from 'src/routes/constants'

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
        <Route
          path={SCHEDULES}
          exact={true}
          component={PageSchedules}
          layout={LayoutDefault}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
