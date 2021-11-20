import { useCallback } from 'react'
import { generatePath, useHistory } from 'react-router-dom'

import { createGroup } from 'entities/groups/api'
import { PRIVATE_PATH } from 'shared/config'

export const useAddGroup = () => {
  const history = useHistory()

  const handleAddGroup = useCallback(
    async (values: Parameters<typeof createGroup>[0]) => {
      const { data } = await createGroup(values)
      history.push(generatePath(PRIVATE_PATH.GROUP, { groupId: data.id }))
    },
    [history],
  )

  return { handleAddGroup }
}
