import useSWR from 'swr'

import { api, routes } from 'shared/api'

export const useGroups = () => {
  const { data: groups } = useSWR<Components.Schemas.Group[]>(routes.groups)
  return { groups }
}

export const useGroup = (id: number | string) => {
  const { data: group } = useSWR<Components.Schemas.Group>(routes.group(id))
  return { group }
}

export const createGroup = (values: Components.Schemas.GroupRequest) =>
  api.post<Components.Schemas.Group>(routes.groups, values)

export const updateGroup = (
  id: number | string,
  values: Components.Schemas.GroupRequest,
) => api.patch<Components.Schemas.Group>(routes.group(id), values)

export const useStudents = (id: number | string) => {
  const { data: students } = useSWR<Components.Schemas.GroupMembership[]>(
    routes.groupsMemberships(id),
  )
  return { students }
}

export const joinGroup = (uuid: string) => api.post<Components.Schemas.JoinGroup>(routes.join(uuid))
