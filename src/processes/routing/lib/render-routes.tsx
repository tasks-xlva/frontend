import { Redirect, Route, Switch } from 'react-router-dom'
import { Routes } from 'processes/routing/lib/routes'

export const renderRoutes = (routes: Routes) => {
  const defaultPath = routes.find((route) => route.default)?.path

  return (
    <Switch>
      <Redirect from='/:url*(/+)' to={window.location.pathname.slice(0, -1)} />
      {routes.map((route) => (
        <Route exact key={route.path} path={route.path}>
          <route.component />
        </Route>
      ))}
      {defaultPath && <Redirect to={defaultPath} />}
    </Switch>
  )
}
