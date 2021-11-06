declare namespace Definitions {
  export interface Group {
    /**
     * Url
     */
    url?: string // uri
    /**
     * Name
     */
    name: string
  }
  export interface User {
    /**
     * Url
     */
    url?: string // uri
    /**
     * Username
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string // ^[\w.@+-]+$
    /**
     * Email address
     */
    email?: string // email
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     */
    groups?: string /* uri */[]
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
    namespace Parameters {
      /**
       * A page number within the paginated result set.
       */
      export type Page = number
    }
    export interface QueryParameters {
      page?: /* A page number within the paginated result set. */ Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        next?: string // uri
        previous?: string // uri
        results: Definitions.Group[]
      }
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
  namespace Users$Id {
    namespace Parameters {
      /**
       * A unique integer value identifying this user.
       */
      export type Id = number
    }
    export interface PathParameters {
      id: /* A unique integer value identifying this user. */ Parameters.Id
    }
  }
  namespace UsersCreate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.User
    }
    namespace Responses {
      export type $201 = Definitions.User
    }
  }
  namespace UsersList {
    namespace Parameters {
      /**
       * A page number within the paginated result set.
       */
      export type Page = number
    }
    export interface QueryParameters {
      page?: /* A page number within the paginated result set. */ Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        next?: string // uri
        previous?: string // uri
        results: Definitions.User[]
      }
    }
  }
  namespace UsersPartialUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.User
    }
    namespace Responses {
      export type $200 = Definitions.User
    }
  }
  namespace UsersRead {
    namespace Responses {
      export type $200 = Definitions.User
    }
  }
  namespace UsersUpdate {
    export interface BodyParameters {
      data: Parameters.Data
    }
    namespace Parameters {
      export type Data = Definitions.User
    }
    namespace Responses {
      export type $200 = Definitions.User
    }
  }
}
