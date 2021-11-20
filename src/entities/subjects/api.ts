import useSWR from 'swr'

import { routes } from 'shared/api'

export const useSubjects = () => {
  const { data: subjects } = useSWR<Components.Schemas.Subject[]>(
    routes.subjects,
  )
  return { subjects }
}

export const useSubject = (id: number | string) => {
  const { data: subject } = useSWR<Components.Schemas.Subject>(
    routes.subject(id),
  )
  return { subject }
}
