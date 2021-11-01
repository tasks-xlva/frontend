import React, { useState } from 'react'
import { Button } from 'antd'
import './styles/index.scss'
import { PrivateLayout } from 'shared/layouts/private-layout/private-layout'
import { PublicLayout } from 'shared/layouts/public-layout/public-layout'
import { PublicPages, PrivatePages } from 'processes/lib/routing'

export const App = () => {
  const [a, setA] = useState(false)

  return (
    <>
      <Button block onClick={() => setA(!a)}>
        {a ? 'authorized' : 'gay'}
      </Button>
      {a ? (
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
