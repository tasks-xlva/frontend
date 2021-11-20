import { useParams } from 'react-router-dom'

import { useGroup } from 'entities/groups/api'
import { useEditGroup } from 'pages/group-edit/lib/use-edit-group'
import { GroupEditForm } from 'widgets/groups/ui'

export const GroupEdit = () => {
  let { groupId } = useParams<{ groupId: string }>()
  const { group } = useGroup(groupId)
  const { handleEditGroup } = useEditGroup(groupId)

  return <GroupEditForm values={group} onSubmit={handleEditGroup} />
}
