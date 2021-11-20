import useSWR from 'swr'

import { routes } from 'shared/api'

export const useTasks = () => {
  const { data: tasks } = useSWR<Components.Schemas.Task[]>(routes.tasks)
  return { tasks: tasks }
}

export const useTask = (id: number | string) => {
  const { data: task } = useSWR<Components.Schemas.Task>(routes.task(id))
  return { task }
}
