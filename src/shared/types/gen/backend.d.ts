declare namespace Components {
  namespace Schemas {
    export interface Group {
      id: number
      number: string
      subjects: Subject[]
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
      /**
       * Имя
       */
      first_name?: string
      /**
       * Фамилия
       */
      last_name?: string
      /**
       * Почта
       */
      email: string // email
    }
    export interface MyProfileRequest {
      /**
       * Имя
       */
      first_name?: string
      /**
       * Фамилия
       */
      last_name?: string
      /**
       * Почта
       */
      email: string // email
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
      /**
       * Имя
       */
      first_name?: string
      /**
       * Фамилия
       */
      last_name?: string
      /**
       * Почта
       */
      email?: string // email
    }
    export interface PatchedSubjectRequest {
      name?: string
      description?: string | null
      group_id?: number
    }
    export interface PatchedTaskRequest {
      name?: string
      description?: string
      subject?: string // uri
    }
    export interface Subject {
      id: number
      name: string
      description?: string | null
      tasks: Task[]
      group_id: number
    }
    export interface SubjectRequest {
      name: string
      description?: string | null
      group_id: number
    }
    export interface Task {
      id: number
      name: string
      description: string
      subject: string // uri
    }
    export interface TaskRequest {
      name: string
      description: string
      subject: string // uri
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
      /**
       * Имя
       */
      first_name?: string
      /**
       * Фамилия
       */
      last_name?: string
      /**
       * Почта
       */
      email: string // email
    }
    export interface UserRequest {
      /**
       * Имя
       */
      first_name?: string
      /**
       * Фамилия
       */
      last_name?: string
      /**
       * Почта
       */
      email: string // email
      password: string
    }
  }
}
declare namespace Paths {
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
  namespace SchemaRetrieve {
    namespace Parameters {
      export type Format = 'json' | 'yaml'
      export type Lang =
        | 'af'
        | 'ar'
        | 'ar-dz'
        | 'ast'
        | 'az'
        | 'be'
        | 'bg'
        | 'bn'
        | 'br'
        | 'bs'
        | 'ca'
        | 'cs'
        | 'cy'
        | 'da'
        | 'de'
        | 'dsb'
        | 'el'
        | 'en'
        | 'en-au'
        | 'en-gb'
        | 'eo'
        | 'es'
        | 'es-ar'
        | 'es-co'
        | 'es-mx'
        | 'es-ni'
        | 'es-ve'
        | 'et'
        | 'eu'
        | 'fa'
        | 'fi'
        | 'fr'
        | 'fy'
        | 'ga'
        | 'gd'
        | 'gl'
        | 'he'
        | 'hi'
        | 'hr'
        | 'hsb'
        | 'hu'
        | 'hy'
        | 'ia'
        | 'id'
        | 'ig'
        | 'io'
        | 'is'
        | 'it'
        | 'ja'
        | 'ka'
        | 'kab'
        | 'kk'
        | 'km'
        | 'kn'
        | 'ko'
        | 'ky'
        | 'lb'
        | 'lt'
        | 'lv'
        | 'mk'
        | 'ml'
        | 'mn'
        | 'mr'
        | 'my'
        | 'nb'
        | 'ne'
        | 'nl'
        | 'nn'
        | 'os'
        | 'pa'
        | 'pl'
        | 'pt'
        | 'pt-br'
        | 'ro'
        | 'ru'
        | 'sk'
        | 'sl'
        | 'sq'
        | 'sr'
        | 'sr-latn'
        | 'sv'
        | 'sw'
        | 'ta'
        | 'te'
        | 'tg'
        | 'th'
        | 'tk'
        | 'tr'
        | 'tt'
        | 'udm'
        | 'uk'
        | 'ur'
        | 'uz'
        | 'vi'
        | 'zh-hans'
        | 'zh-hant'
    }
    export interface QueryParameters {
      format?: Parameters.Format
      lang?: Parameters.Lang
    }
    namespace Responses {
      export interface $200 {
        [name: string]: any
      }
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
