export enum PUBLIC_PATH {
  LOGIN = `/login`,
  SIGNUP = `/signup`,
  RESTORE = `/restore`,
}

export enum PRIVATE_PATH {
  SETTINGS = `/settings`,
  GROUPS = `/groups`,
  SUBJECTS = `/subjects`,
  GROUP = `/groups/:groupId`,
  GROUP_EDIT = `/groups/:groupId/edit`,
  SUBJECT = `/subjects/:subjectId`,
  TASKS = `/tasks`,
  TASK = `/task/:taskId`,
}
