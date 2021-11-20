import { useParams } from 'react-router-dom'

import { useGroup } from 'entities/groups/api'
import { GroupEditForm } from 'widgets/groups/ui'

export const GroupEdit = () => {
  let { groupId } = useParams<{ groupId: string }>()
  const { group } = useGroup(groupId)

  return <GroupEditForm values={group} onSubmit={() => null} />
}
