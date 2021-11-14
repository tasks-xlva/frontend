import { useCallback } from 'react'
import { obtainToken } from 'entities/users/api'
import { updateTokens, useAuthorization } from 'features/authorization'
import { notification } from 'antd'
import { useLoading } from 'shared/hooks'

export const useLogin = () => {
  const { setIsAuthorized } = useAuthorization()
  const { start, finish, isLoading } = useLoading()

  const handleLogin = useCallback(
    async (params: Parameters<typeof obtainToken>['0']) => {
      try {
        start()
        const { data } = await obtainToken(params)
        updateTokens(data)
        setIsAuthorized(true)
      } catch (error) {
        console.error(error)
        notification.error({
          message: `Ошибка входа`,
          description: `Неверный логин или пароль`,
        })
      } finally {
        finish()
      }
    },
    [finish, setIsAuthorized, start],
  )

  return { handleLogin, isLoading }
}
