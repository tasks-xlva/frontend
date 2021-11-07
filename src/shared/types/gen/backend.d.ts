declare namespace Definitions {
  export interface Group {
    /**
     * ID
     */
    id?: number
    /**
     * Number
     */
    number: string
    subjects?: Subject[]
  }
  export interface Subject {
    /**
     * ID
     */
    id?: number
    /**
     * Name
     */
    name: string
    /**
     * Description
     */
    description?: string
    tasks?: Task[]
  }
  export interface Task {
    /**
     * Name
     */
    name: string
    /**
     * Description
     */
    description: string
    /**
     * Subject
     */
    subject: string // uri
  }
  export interface TokenObtainPair {
    /**
     * Username
     */
    username: string
    /**
     * Password
     */
    password: string
  }
  export interface TokenObtainPairResponse {
    /**
     * Access
     */
    access: string
    /**
     * Refresh
     */
    refresh: string
  }
  export interface TokenRefresh {
    /**
     * Refresh
     */
    refresh: string
    /**
     * Access
     */
    access?: string
  }
  export interface TokenRefreshResponse {
    /**
     * Access
     */
    access: string
  }
}
declare namespace Paths {
  namespace Groups$Id {
    namespace Parameters {
      /**
       * A unique integer value identifying this group.
       */
      export type Id = number
    }
    export interface PathParameters {
      id: /* A unique integer value identifying this group. */ Parameters.Id
    }
  }
  namespace GroupsCreate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Group
    }
    namespace Responses {
      export type $201 = Definitions.Group
    }
  }
  namespace GroupsList {
    namespace Responses {
      export type $200 = Definitions.Group[]
    }
  }
  namespace GroupsPartialUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Group
    }
    namespace Responses {
      export type $200 = Definitions.Group
    }
  }
  namespace GroupsRead {
    namespace Responses {
      export type $200 = Definitions.Group
    }
  }
  namespace GroupsUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Group
    }
    namespace Responses {
      export type $200 = Definitions.Group
    }
  }
  namespace Subjects$Id {
    namespace Parameters {
      /**
       * A unique integer value identifying this subject.
       */
      export type Id = number
    }
    export interface PathParameters {
      id: /* A unique integer value identifying this subject. */ Parameters.Id
    }
  }
  namespace SubjectsCreate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Subject
    }
    namespace Responses {
      export type $201 = Definitions.Subject
    }
  }
  namespace SubjectsList {
    namespace Responses {
      export type $200 = Definitions.Subject[]
    }
  }
  namespace SubjectsPartialUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Subject
    }
    namespace Responses {
      export type $200 = Definitions.Subject
    }
  }
  namespace SubjectsRead {
    namespace Responses {
      export type $200 = Definitions.Subject
    }
  }
  namespace SubjectsUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Subject
    }
    namespace Responses {
      export type $200 = Definitions.Subject
    }
  }
  namespace Tasks$Id {
    namespace Parameters {
      /**
       * A unique integer value identifying this task.
       */
      export type Id = number
    }
    export interface PathParameters {
      id: /* A unique integer value identifying this task. */ Parameters.Id
    }
  }
  namespace TasksCreate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Task
    }
    namespace Responses {
      export type $201 = Definitions.Task
    }
  }
  namespace TasksList {
    namespace Responses {
      export type $200 = Definitions.Task[]
    }
  }
  namespace TasksPartialUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Task
    }
    namespace Responses {
      export type $200 = Definitions.Task
    }
  }
  namespace TasksRead {
    namespace Responses {
      export type $200 = Definitions.Task
    }
  }
  namespace TasksUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.Task
    }
    namespace Responses {
      export type $200 = Definitions.Task
    }
  }
  namespace TokenCreate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.TokenObtainPair
    }
    namespace Responses {
      export type $200 = Definitions.TokenObtainPairResponse
    }
  }
  namespace TokenRefreshCreate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.TokenRefresh
    }
    namespace Responses {
      export type $200 = Definitions.TokenRefreshResponse
    }
  }
}
