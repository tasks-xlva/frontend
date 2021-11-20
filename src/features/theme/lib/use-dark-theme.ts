import { useEffect } from 'react'

import { useMediaQuery } from 'shared/lib'

export const useDarkTheme = () => {
  const { isMatch } = useMediaQuery(`(prefers-color-scheme: dark)`)

  useEffect(() => isMatch && require(`antd/dist/antd.dark.min.css`), [isMatch])
}
