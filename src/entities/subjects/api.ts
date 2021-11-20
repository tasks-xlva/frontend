import useSWR from 'swr'

import { routes } from 'shared/api'

export const useSubjects = () => {
  const { data: subjects } = useSWR<Components.Schemas.Subject[]>(
    routes.subjects,
  )
  return { subjects }
}
