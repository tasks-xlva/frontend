import React from 'react'
import './styles/index.scss'
import { PrivateLayout } from 'features/private-layout'
import { PublicLayout } from 'features/public-layout'
import { useAuthorization } from 'features/authorization'
import { PublicPages, PrivatePages } from 'processes/routing'

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
