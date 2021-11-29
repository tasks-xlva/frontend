import { ResultStatusType } from 'antd/es/result'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'

export interface ResultData {
  title?: string
  text?: string
  status?: ResultStatusType
}

export const useResult = () => {
  const history = useHistory()

  const handleResult = useCallback(
    (data: ResultData) =>
      history.push({
        pathname: PUBLIC_PATH.RESULT,
        search: new URLSearchParams(data as Record<string, string>).toString(),
      }),
    [history],
  )

  return { handleResult }
}
