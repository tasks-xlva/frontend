import { Spin } from 'antd'
import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { activateUser } from 'entities/users/api'
import { useResult } from 'shared/lib'

export const Activate = () => {
  const { uid, token } = useParams<{ uid: string; token: string }>()
  const { handleResult } = useResult()

  const handleActivateUser = useCallback(async () => {
    try {
      await activateUser({ uid, token })
      handleResult({
        title: `Ваш аккаунт подтвреждён!`,
        status: `success`,
        text: `Теперь вы можете пользоваться сервисом`,
      })
    } catch (error) {
      console.error(error)
      handleResult({
        title: `Ошибка подтверждения аккаунта!`,
        status: `error`,
      })
    }
  }, [handleResult, token, uid])

  useEffect(() => {
    handleActivateUser().then()
  }, [handleActivateUser])

  return (
    <Spin
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    />
  )
}
