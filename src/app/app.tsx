import './styles/index.scss'
import React from 'react'

import { privateRoutes, publicRoutes } from 'app/routes'
import { useAuthorization } from 'features/authorization'
import { Routing } from 'features/routing'
import { PrivateLayout } from 'widgets/private-layout'
import { PublicLayout } from 'widgets/public-layout'

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
