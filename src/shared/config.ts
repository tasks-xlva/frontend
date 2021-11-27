export enum PUBLIC_PATH {
  LOGIN = `/login`,
  SIGNUP = `/signup`,
  RESTORE = `/restore`,
}

export enum PRIVATE_PATH {
  SETTINGS = `/settings`,

  GROUPS = `/groups`,
  GROUP_ADD = `/groups/add`,
  GROUP = `/groups/:groupId`,
  GROUP_EDIT = `/groups/:groupId/edit`,

  JOIN_GROUP = `/groups/join/:uuid`,

  SUBJECTS = `/subjects`,
  SUBJECT = `/subjects/:subjectId`,

  TASKS = `/tasks`,
  TASK = `/task/:taskId`,
}
