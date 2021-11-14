import { useCallback, useState } from 'react'

export const useVisible = (defaultValue: boolean = false) => {
  const [isVisible, setIsVisible] = useState<boolean>(defaultValue)

  const show = useCallback(() => {
    setIsVisible(true)
  }, [])

  const hide = useCallback(() => {
    setIsVisible(false)
  }, [])

  const toggle = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])

  return { isVisible, hide, show, toggle }
}
