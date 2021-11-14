import { useCallback, useState } from 'react'

export const useLoading = (defaultValue: boolean = false) => {
  const [isLoading, setIsLoading] = useState<boolean>(defaultValue)

  const start = useCallback(() => {
    setIsLoading(true)
  }, [])

  const finish = useCallback(() => {
    setIsLoading(false)
  }, [])

  const toggle = useCallback(() => {
    setIsLoading(!isLoading)
  }, [isLoading])

  return { isLoading, start, finish, toggle }
}
