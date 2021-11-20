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
