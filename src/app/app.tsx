import React from 'react'
import './styles/index.scss'
import { PrivateLayout } from 'features/private-layout'
import { PublicLayout } from 'features/public-layout'
import { useAuthorization } from 'features/authorization'
import { Routing } from 'processes/routing'
import { privateRoutes, publicRoutes } from 'app/routes'

export const App = () => {
  const { isAuthorized } = useAuthorization()

  return (
    <>
      {isAuthorized ? (
        <PrivateLayout>
          <Routing routes={privateRoutes} />
        </PrivateLayout>
      ) : (
        <PublicLayout>
          <Routing routes={publicRoutes} />
        </PublicLayout>
      )}
    </>
  )
}
