import { AnimatePresence, motion } from 'framer-motion'
import { ComponentClass, FunctionComponent } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'

export type Routes = {
  path?: string
  component: FunctionComponent | ComponentClass
  default?: boolean
}[]

interface Props {
  routes: Routes
}

export const Routing = ({ routes }: Props) => {
  const location = useLocation()
  const defaultPath = routes.find((route) => route.default)?.path

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Redirect
          from='/:url*(/+)'
          to={window.location.pathname.slice(0, -1)}
        />
        {routes.map((route) => (
          <Route exact key={route.path} path={route.path}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <route.component />
            </motion.div>
          </Route>
        ))}
        {defaultPath && <Redirect to={defaultPath} />}
      </Switch>
    </AnimatePresence>
  )
}
