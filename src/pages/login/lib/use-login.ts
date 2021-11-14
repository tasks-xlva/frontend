import { useCallback } from 'react'
import { obtainToken } from 'entities/api/token'
import { updateTokens, useAuthorization } from 'features/authorization'
import { notification } from 'antd'

export const useLogin = () => {
  const { setIsAuthorized } = useAuthorization()

  const handleLogin = useCallback(
    async (params: Parameters<typeof obtainToken>['0']) => {
      try {
        const { data } = await obtainToken(params)
        updateTokens(data)
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
