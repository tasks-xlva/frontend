import { useCallback, useState } from 'react'

type UseVisibleProps = {
  isVisible: boolean
  hide: () => void
  show: () => void
  toggle: () => void
}

export const useVisible = (defaultValue: boolean = false): UseVisibleProps => {
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
