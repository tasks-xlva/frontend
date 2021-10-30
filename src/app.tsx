import React, { useState } from 'react'
import { Button } from 'antd'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import { PrivateLayout } from './pages/private-layout/private-layout'
import { Login } from './pages/login/login'
import { PublicLayout } from './pages/public-layout/public-layout'
import { PATH } from './config'
import { Signup } from './pages/signup/signup'
import { Restore } from './pages/restore/restore'

export const App = () => {
  const [a, setA] = useState(false)

  return (
    <>
      <Button block onClick={() => setA(!a)}>
        {a ? 'authorized' : 'gay'}
      </Button>
      {a ? (
        <PrivateLayout>
          <Switch>
            <Route path='/a'>
              <Link to='/b'>
                <Button type='primary'>AuthoChlenChlen{a}</Button>
              </Link>
            </Route>
            <Route path='/b'>
              <Link to='/a'>
                <Button type='primary'>AuthoChlenChlen2</Button>
              </Link>
            </Route>
            <Redirect to='/a' />
          </Switch>
        </PrivateLayout>
      ) : (
        <PublicLayout>
          <Switch>
            <Route path={PATH.LOGIN}>
              <Login />
            </Route>
            <Route path={PATH.SIGNUP}>
              <Signup />
            </Route>
            <Route path={PATH.RESTORE}>
              <Restore />
            </Route>
            <Redirect to={PATH.LOGIN} />
          </Switch>
        </PublicLayout>
      )}
    </>
  )
}
