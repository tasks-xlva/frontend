import { useCallback } from 'react'
import { obtainToken } from '../../../entities/api/token'
import { useAuthorization } from '../../../processes/lib/authorization'
import { notification } from 'antd'

export const useLogin = () => {
  const { setIsAuthorized } = useAuthorization()

  const handleLogin = useCallback(
    async (params: Parameters<typeof obtainToken>['0']) => {
      try {
        await obtainToken(params)
        setIsAuthorized(true)
      } catch (error) {
        console.error(error)
        notification.error({
          message: `Ошибка входа`,
          description: `Неверный логин или пароль`,
        })
      }
    },
    [setIsAuthorized],
  )

  return { handleLogin }
}
