import { ComponentClass, FunctionComponent } from 'react'
import { PRIVATE_PATH, PUBLIC_PATH } from 'shared/config'
import {
  Login,
  Signup,
  Restore,
  Settings,
  Groups,
  Group,
  Subjects,
  Subject,
  Tasks,
  Task,
  GroupEdit,
} from 'pages'

export type Routes = {
  path?: string
  component: FunctionComponent | ComponentClass
  default?: boolean
}[]

export const privateRoutes: Routes = [
  { path: PRIVATE_PATH.SETTINGS, component: Settings },
  { path: PRIVATE_PATH.GROUPS, component: Groups },
  { path: PRIVATE_PATH.GROUP, component: Group },
  { path: PRIVATE_PATH.SUBJECTS, component: Subjects },
  { path: PRIVATE_PATH.SUBJECT, component: Subject },
  { path: PRIVATE_PATH.TASKS, component: Tasks, default: true },
  { path: PRIVATE_PATH.TASK, component: Task },
  { path: PRIVATE_PATH.GROUP_EDIT, component: GroupEdit },
]

export const publicRoutes: Routes = [
  { path: PUBLIC_PATH.LOGIN, component: Login, default: true },
  { path: PUBLIC_PATH.SIGNUP, component: Signup },
  { path: PUBLIC_PATH.RESTORE, component: Restore },
]
