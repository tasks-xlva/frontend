import { ComponentClass, FunctionComponent } from 'react'
import { PRIVATE_PATH, PUBLIC_PATH } from 'shared/config'
import { Login } from 'pages/login/login'
import { Signup } from 'pages/signup/signup'
import { Restore } from 'pages/restore/restore'
import { Settings } from 'pages/settings/settings'
import { Groups } from 'pages/groups/groups'
import { Group } from 'pages/group/group'

export type Routes = {
  path?: string
  component: FunctionComponent | ComponentClass
  default?: boolean
}[]

export const privateRoutes: Routes = [
  { path: PRIVATE_PATH.SETTINGS, component: Settings },
  { path: PRIVATE_PATH.GROUPS, component: Groups },
  { path: PRIVATE_PATH.GROUP, component: Group },
]

export const publicRoutes: Routes = [
  { path: PUBLIC_PATH.LOGIN, component: Login, default: true },
  { path: PUBLIC_PATH.SIGNUP, component: Signup },
  { path: PUBLIC_PATH.RESTORE, component: Restore },
]
