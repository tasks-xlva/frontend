import { notification } from 'antd'
import { useCallback } from 'react'
import { mutate } from 'swr'

import { updateGroup, updateMemberRole } from 'entities/groups/api'
import { routes } from 'shared/api'

export const useEditGroup = (groupId: number | string) => {
  const handleEditGroup = useCallback(
    async (values: Components.Schemas.GroupRequest) => {
      const { data } = await updateGroup(groupId, values)
      notification.success({ message: `Данные группы обновлены` })
      await mutate(routes.group(groupId), data)
    },
    [groupId],
  )

  return { handleEditGroup }
}

export const UpdateMemberRole = (
  groupId: number,
  userId: number,
  role: string,
) => {
  const handleUpdateMemberRole = useCallback(
    async (values: Components.Schemas.PatchedGroupMembershipRequest) => {
      values.role = role as Components.Schemas.RoleEnum
      await updateMemberRole(groupId, userId, values)
      notification.success({ message: `Роль участника изменена` })
    },
    [groupId, userId, role],
  )

  return { handleUpdateMemberRole }
}
