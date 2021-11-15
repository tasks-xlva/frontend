import React from 'react'
import './styles/index.scss'
import { PrivateLayout } from 'widgets/private-layout'
import { PublicLayout } from 'widgets/public-layout'
import { useAuthorization } from 'features/authorization'
import { Routing } from 'features/routing'
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
