import React from 'react'
import './styles/index.scss'
import { PrivateLayout } from 'shared/ui/layouts/private-layout/private-layout'
import { PublicLayout } from 'shared/ui/layouts/public-layout/public-layout'
import { PublicPages, PrivatePages } from 'processes/lib/routing'
import { useAuthorization } from 'processes/lib/authorization'

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
