type Id = string | number

export const routes = {
  token: `/token`,
  tokenRefresh: `/token/refresh`,

  groups: `/groups`,
  group: (id: Id) => `${routes.groups}/${id}`,

  subjects: `/subjects`,
  subject: (id: Id) => `${routes.subjects}/${id}`,

  tasks: `/tasks`,
  task: (id: Id) => `${routes.tasks}/${id}`,
}
