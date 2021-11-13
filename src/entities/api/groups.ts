import useSWR from 'swr'
import { routes } from 'shared/api'

export const useGroups = () => {
  const { data: groups } = useSWR<Definitions.Group[]>(routes.groups)
  return { groups }
}
