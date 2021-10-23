import React, { useState } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import { AuthorizedLayout } from './pages/authorized-layout/authorized-layout'
import { Login } from './pages/login/login'
import { PublicLayout } from './pages/public-layout/public-layout'
import { PATH } from './config'

export const App = () => {
  const [a, setA] = useState(false)

  return (
    <>
      <Button block onClick={() => setA(!a)}>
        {a ? 'authorized' : 'gay'}
      </Button>
      {a ? (
        <AuthorizedLayout>
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
        </AuthorizedLayout>
      ) : (
        <PublicLayout>
          <Switch>
            <Route path='/log'>
              <Login />
            </Route>
            <Route path='/h'>
              <Link to={PATH.LOGIN}>
                <Button type='primary'>ChlenChlen2</Button>
              </Link>
            </Route>
            <Redirect to='/log' />
          </Switch>
        </PublicLayout>
      )}
    </>
  )
}
