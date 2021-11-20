import useSWR from 'swr'

import { routes } from 'shared/api'

export const useTasks = () => {
  const { data: tasks } = useSWR<Components.Schemas.Task[]>(routes.tasks)
  return { tasks: tasks }
}
