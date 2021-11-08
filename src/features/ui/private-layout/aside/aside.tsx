import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
}

export const Aside = (props: Props) => {
  const { children } = props
  const [aside, setAside] = useState<HTMLElement>()

  useEffect(() => {
    const aside = document.getElementById(`private-layout-aside`)
    if (aside) {
      setAside(aside)
    }
  }, [])

  return <>{aside && createPortal(children, aside)}</>
}
