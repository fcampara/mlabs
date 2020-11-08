import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from 'src/routes/Route'

import LayoutDefault from 'src/layouts/Default'

import PageHome from 'src/pages/Home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={'/'}
          exact={true}
          component={PageHome}
          layout={LayoutDefault}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
