import React from 'react'
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute
} from 'react-router-dom'

interface IRouteProps extends ReactDOMRouteProps {
  layout: React.ComponentType
  component: React.ComponentType
}

const Route: React.FC<IRouteProps> = (
  props: IRouteProps
) => {
  const {
    component: Component,
    layout: Layout,
    ...rest
  } = props

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  )
}

export default Route
