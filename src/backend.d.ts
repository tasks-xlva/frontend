declare namespace Components {
  namespace Schemas {
    export interface File {
      id: number
      file: string // uri
    }
    export interface FileRequest {
      file: string // binary
    }
    export interface Group {
      id: number
      number: string
      subjects: Nested[]
    }
    export interface GroupMembership {
      id: number
      role: RoleEnum
      group: number
      user: number
    }
    export interface GroupMembershipRequest {
      role: RoleEnum
      group: number
      user: number
    }
    export interface GroupRequest {
      number: string
    }
    export interface MyPassword {
      /**
       * Пароль
       */
      password: string
    }
    export interface MyPasswordRequest {
      /**
       * Пароль
       */
      password: string
    }
    export interface MyProfile {
      id: number
      firstName: string
      lastName: string
      email: string // email
    }
    export interface MyProfileRequest {
      firstName: string
      lastName: string
      email: string // email
    }
    export interface Nested {
      id: number
      name: string
      description?: string | null
      group: number
      image?: null | number
    }
    export interface NestedRequest {
      name: string
      description?: string | null
      group: number
      image?: null | number
    }
    export interface PatchedGroupMembershipRequest {
      role?: RoleEnum
      group?: number
      user?: number
    }
    export interface PatchedGroupRequest {
      number?: string
    }
    export interface PatchedMyPasswordRequest {
      /**
       * Пароль
       */
      password?: string
    }
    export interface PatchedMyProfileRequest {
      firstName?: string
      lastName?: string
      email?: string // email
    }
    export interface PatchedSubjectRequest {
      name?: string
      description?: string | null
      groupId?: number
      image?: string | null // uri
    }
    export interface PatchedTaskRequest {
      name?: string
      description?: string
      subjectId?: number
      attachments?: string /* uri */[]
    }
    export type RoleEnum = `ADMIN` | `EDITOR` | `MEMBER`
    export interface Subject {
      id: number
      name: string
      description?: string | null
      tasks: Task[]
      groupId: number
      image?: string | null // uri
    }
    export interface SubjectRequest {
      name: string
      description?: string | null
      groupId: number
      image?: string | null // uri
    }
    export interface Task {
      id: number
      name: string
      description: string
      subjectId: number
      attachments?: string /* uri */[]
    }
    export interface TaskRequest {
      name: string
      description: string
      subjectId: number
      attachments?: string /* uri */[]
    }
    export interface TokenObtainPair {
      access: string
      refresh: string
    }
    export interface TokenObtainPairRequest {
      email: string
      password: string
    }
    export interface TokenRefresh {
      access: string
      refresh: string
    }
    export interface TokenRefreshRequest {
      refresh: string
    }
    export interface User {
      id: number
      firstName: string
      lastName: string
      email: string // email
    }
    export interface UserRequest {
      firstName: string
      lastName: string
      email: string // email
      /**
       * Пароль
       */
      password: string
    }
  }
}
declare namespace Paths {
  namespace FilesCreate {
    export type RequestBody = Components.Schemas.FileRequest
    namespace Responses {
      export type $201 = Components.Schemas.File
    }
  }
  namespace FilesRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.File
    }
  }
  namespace GroupsCreate {
    export type RequestBody = Components.Schemas.GroupRequest
    namespace Responses {
      export type $201 = Components.Schemas.Group
    }
  }
  namespace GroupsDestroy {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace GroupsList {
    namespace Responses {
      export type $200 = Components.Schemas.Group[]
    }
  }
  namespace GroupsMembershipsCreate {
    namespace Parameters {
      export type GroupPk = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
    }
    export type RequestBody = Components.Schemas.GroupMembershipRequest
    namespace Responses {
      export type $201 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsMembershipsDestroy {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace GroupsMembershipsList {
    namespace Parameters {
      export type GroupPk = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
    }
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership[]
    }
  }
  namespace GroupsMembershipsPartialUpdate {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedGroupMembershipRequest
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsMembershipsRetrieve {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsMembershipsUpdate {
    namespace Parameters {
      export type GroupPk = number
      export type Id = number
    }
    export interface PathParameters {
      group_pk: Parameters.GroupPk
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.GroupMembershipRequest
    namespace Responses {
      export type $200 = Components.Schemas.GroupMembership
    }
  }
  namespace GroupsPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedGroupRequest
    namespace Responses {
      export type $200 = Components.Schemas.Group
    }
  }
  namespace GroupsRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.Group
    }
  }
  namespace GroupsUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.GroupRequest
    namespace Responses {
      export type $200 = Components.Schemas.Group
    }
  }
  namespace SubjectsCreate {
    export type RequestBody = Components.Schemas.SubjectRequest
    namespace Responses {
      export type $201 = Components.Schemas.Subject
    }
  }
  namespace SubjectsDestroy {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace SubjectsList {
    namespace Responses {
      export type $200 = Components.Schemas.Subject[]
    }
  }
  namespace SubjectsPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedSubjectRequest
    namespace Responses {
      export type $200 = Components.Schemas.Subject
    }
  }
  namespace SubjectsRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.Subject
    }
  }
  namespace SubjectsUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.SubjectRequest
    namespace Responses {
      export type $200 = Components.Schemas.Subject
    }
  }
  namespace TasksCreate {
    export type RequestBody = Components.Schemas.TaskRequest
    namespace Responses {
      export type $201 = Components.Schemas.Task
    }
  }
  namespace TasksDestroy {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export interface $204 {}
    }
  }
  namespace TasksList {
    namespace Responses {
      export type $200 = Components.Schemas.Task[]
    }
  }
  namespace TasksPartialUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.PatchedTaskRequest
    namespace Responses {
      export type $200 = Components.Schemas.Task
    }
  }
  namespace TasksRetrieve {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    namespace Responses {
      export type $200 = Components.Schemas.Task
    }
  }
  namespace TasksUpdate {
    namespace Parameters {
      export type Id = number
    }
    export interface PathParameters {
      id: Parameters.Id
    }
    export type RequestBody = Components.Schemas.TaskRequest
    namespace Responses {
      export type $200 = Components.Schemas.Task
    }
  }
  namespace TokenCreate {
    export type RequestBody = Components.Schemas.TokenObtainPairRequest
    namespace Responses {
      export type $200 = Components.Schemas.TokenObtainPair
    }
  }
  namespace TokenRefreshCreate {
    export type RequestBody = Components.Schemas.TokenRefreshRequest
    namespace Responses {
      export type $200 = Components.Schemas.TokenRefresh
    }
  }
  namespace UsersCreate {
    export type RequestBody = Components.Schemas.UserRequest
    namespace Responses {
      export type $201 = Components.Schemas.User
    }
  }
  namespace UsersMePartialUpdate {
    export type RequestBody = Components.Schemas.PatchedMyProfileRequest
    namespace Responses {
      export type $200 = Components.Schemas.MyProfile
    }
  }
  namespace UsersMePasswordPartialUpdate {
    export type RequestBody = Components.Schemas.PatchedMyPasswordRequest
    namespace Responses {
      export type $200 = Components.Schemas.MyPassword
    }
  }
  namespace UsersMePasswordUpdate {
    export type RequestBody = Components.Schemas.MyPasswordRequest
    namespace Responses {
      export type $200 = Components.Schemas.MyPassword
    }
  }
  namespace UsersMeRetrieve {
    namespace Responses {
      export type $200 = Components.Schemas.MyProfile
    }
  }
  namespace UsersMeUpdate {
    export type RequestBody = Components.Schemas.MyProfileRequest
    namespace Responses {
      export type $200 = Components.Schemas.MyProfile
    }
  }
}
