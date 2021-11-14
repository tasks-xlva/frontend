import { useState, useEffect } from 'react'

const query = `(min-width: 1024px)`

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = matchMedia(query)
    const listener = () => {
      setIsDesktop(media.matches)
    }
    media.addEventListener(`change`, listener)
    listener()
    return () => media.removeEventListener(`change`, listener)
  }, [])

  return { isDesktop }
}

export { useIsDesktop }
