import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { createUser } from 'entities/users/api'
import { PRIVATE_PATH } from 'shared/config'

export const useAddUser = () => {
  const history = useHistory()

  const handleAddUser = useCallback(
    async (values: Components.Schemas.UserRequest) => {
      await createUser(values)
      history.push(PRIVATE_PATH.TASKS)
    },
    [history],
  )

  return { handleAddUser }
}
