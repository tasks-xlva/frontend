import React from 'react'
import './styles/index.scss'
import { PrivateLayout } from 'features/ui/private-layout/private-layout'
import { PublicLayout } from 'features/ui/public-layout/public-layout'
import { PublicPages, PrivatePages } from 'processes/routing'
import { useAuthorization } from 'features/lib/authorization'

export const App = () => {
  const { isAuthorized } = useAuthorization()

  return (
    <>
      {isAuthorized ? (
        <PrivateLayout>
          <PrivatePages />
        </PrivateLayout>
      ) : (
        <PublicLayout>
          <PublicPages />
        </PublicLayout>
      )}
    </>
  )
}
