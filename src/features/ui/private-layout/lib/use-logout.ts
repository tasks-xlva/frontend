import { useCallback } from 'react'
import { useAuthorization } from 'features/lib/authorization'

export const useLogout = () => {
  const { setIsAuthorized } = useAuthorization()
  const handleLogout = useCallback(() => {
    setIsAuthorized(false)
    localStorage.clear()
  }, [setIsAuthorized])

  return { handleLogout }
}
