
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DefaultPreference
 * 
 */
export type DefaultPreference = $Result.DefaultSelection<Prisma.$DefaultPreferencePayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model UserQuietHours
 * 
 */
export type UserQuietHours = $Result.DefaultSelection<Prisma.$UserQuietHoursPayload>
/**
 * Model GlobalPolicy
 * 
 */
export type GlobalPolicy = $Result.DefaultSelection<Prisma.$GlobalPolicyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationType: {
  TRANSACTIONAL_EMAIL: 'TRANSACTIONAL_EMAIL',
  MARKETING_EMAIL: 'MARKETING_EMAIL',
  TRANSACTIONAL_SMS: 'TRANSACTIONAL_SMS',
  MARKETING_SMS: 'MARKETING_SMS',
  TRANSACTIONAL_PUSH: 'TRANSACTIONAL_PUSH',
  MARKETING_PUSH: 'MARKETING_PUSH',
  TRANSACTIONAL_MESSENGER: 'TRANSACTIONAL_MESSENGER',
  MARKETING_MESSENGER: 'MARKETING_MESSENGER'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const Channel: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PUSH: 'PUSH',
  MESSENGER: 'MESSENGER'
};

export type Channel = (typeof Channel)[keyof typeof Channel]


export const PolicyAction: {
  DENY: 'DENY'
};

export type PolicyAction = (typeof PolicyAction)[keyof typeof PolicyAction]

}

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type Channel = $Enums.Channel

export const Channel: typeof $Enums.Channel

export type PolicyAction = $Enums.PolicyAction

export const PolicyAction: typeof $Enums.PolicyAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more DefaultPreferences
 * const defaultPreferences = await prisma.defaultPreference.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more DefaultPreferences
   * const defaultPreferences = await prisma.defaultPreference.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.defaultPreference`: Exposes CRUD operations for the **DefaultPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DefaultPreferences
    * const defaultPreferences = await prisma.defaultPreference.findMany()
    * ```
    */
  get defaultPreference(): Prisma.DefaultPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuietHours`: Exposes CRUD operations for the **UserQuietHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuietHours
    * const userQuietHours = await prisma.userQuietHours.findMany()
    * ```
    */
  get userQuietHours(): Prisma.UserQuietHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalPolicy`: Exposes CRUD operations for the **GlobalPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalPolicies
    * const globalPolicies = await prisma.globalPolicy.findMany()
    * ```
    */
  get globalPolicy(): Prisma.GlobalPolicyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DefaultPreference: 'DefaultPreference',
    UserPreference: 'UserPreference',
    UserQuietHours: 'UserQuietHours',
    GlobalPolicy: 'GlobalPolicy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "defaultPreference" | "userPreference" | "userQuietHours" | "globalPolicy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DefaultPreference: {
        payload: Prisma.$DefaultPreferencePayload<ExtArgs>
        fields: Prisma.DefaultPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefaultPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefaultPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>
          }
          findFirst: {
            args: Prisma.DefaultPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefaultPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>
          }
          findMany: {
            args: Prisma.DefaultPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>[]
          }
          create: {
            args: Prisma.DefaultPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>
          }
          createMany: {
            args: Prisma.DefaultPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefaultPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>[]
          }
          delete: {
            args: Prisma.DefaultPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>
          }
          update: {
            args: Prisma.DefaultPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>
          }
          deleteMany: {
            args: Prisma.DefaultPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefaultPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefaultPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>[]
          }
          upsert: {
            args: Prisma.DefaultPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultPreferencePayload>
          }
          aggregate: {
            args: Prisma.DefaultPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefaultPreference>
          }
          groupBy: {
            args: Prisma.DefaultPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefaultPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefaultPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<DefaultPreferenceCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      UserQuietHours: {
        payload: Prisma.$UserQuietHoursPayload<ExtArgs>
        fields: Prisma.UserQuietHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuietHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuietHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>
          }
          findFirst: {
            args: Prisma.UserQuietHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuietHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>
          }
          findMany: {
            args: Prisma.UserQuietHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>[]
          }
          create: {
            args: Prisma.UserQuietHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>
          }
          createMany: {
            args: Prisma.UserQuietHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuietHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>[]
          }
          delete: {
            args: Prisma.UserQuietHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>
          }
          update: {
            args: Prisma.UserQuietHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>
          }
          deleteMany: {
            args: Prisma.UserQuietHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuietHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuietHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>[]
          }
          upsert: {
            args: Prisma.UserQuietHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuietHoursPayload>
          }
          aggregate: {
            args: Prisma.UserQuietHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuietHours>
          }
          groupBy: {
            args: Prisma.UserQuietHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuietHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuietHoursCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuietHoursCountAggregateOutputType> | number
          }
        }
      }
      GlobalPolicy: {
        payload: Prisma.$GlobalPolicyPayload<ExtArgs>
        fields: Prisma.GlobalPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>
          }
          findFirst: {
            args: Prisma.GlobalPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>
          }
          findMany: {
            args: Prisma.GlobalPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>[]
          }
          create: {
            args: Prisma.GlobalPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>
          }
          createMany: {
            args: Prisma.GlobalPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>[]
          }
          delete: {
            args: Prisma.GlobalPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>
          }
          update: {
            args: Prisma.GlobalPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>
          }
          deleteMany: {
            args: Prisma.GlobalPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>[]
          }
          upsert: {
            args: Prisma.GlobalPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPolicyPayload>
          }
          aggregate: {
            args: Prisma.GlobalPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalPolicy>
          }
          groupBy: {
            args: Prisma.GlobalPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalPolicyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    defaultPreference?: DefaultPreferenceOmit
    userPreference?: UserPreferenceOmit
    userQuietHours?: UserQuietHoursOmit
    globalPolicy?: GlobalPolicyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model DefaultPreference
   */

  export type AggregateDefaultPreference = {
    _count: DefaultPreferenceCountAggregateOutputType | null
    _min: DefaultPreferenceMinAggregateOutputType | null
    _max: DefaultPreferenceMaxAggregateOutputType | null
  }

  export type DefaultPreferenceMinAggregateOutputType = {
    id: string | null
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DefaultPreferenceMaxAggregateOutputType = {
    id: string | null
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DefaultPreferenceCountAggregateOutputType = {
    id: number
    notificationType: number
    channel: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DefaultPreferenceMinAggregateInputType = {
    id?: true
    notificationType?: true
    channel?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DefaultPreferenceMaxAggregateInputType = {
    id?: true
    notificationType?: true
    channel?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DefaultPreferenceCountAggregateInputType = {
    id?: true
    notificationType?: true
    channel?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DefaultPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultPreference to aggregate.
     */
    where?: DefaultPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultPreferences to fetch.
     */
    orderBy?: DefaultPreferenceOrderByWithRelationInput | DefaultPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefaultPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DefaultPreferences
    **/
    _count?: true | DefaultPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefaultPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefaultPreferenceMaxAggregateInputType
  }

  export type GetDefaultPreferenceAggregateType<T extends DefaultPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateDefaultPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefaultPreference[P]>
      : GetScalarType<T[P], AggregateDefaultPreference[P]>
  }




  export type DefaultPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefaultPreferenceWhereInput
    orderBy?: DefaultPreferenceOrderByWithAggregationInput | DefaultPreferenceOrderByWithAggregationInput[]
    by: DefaultPreferenceScalarFieldEnum[] | DefaultPreferenceScalarFieldEnum
    having?: DefaultPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefaultPreferenceCountAggregateInputType | true
    _min?: DefaultPreferenceMinAggregateInputType
    _max?: DefaultPreferenceMaxAggregateInputType
  }

  export type DefaultPreferenceGroupByOutputType = {
    id: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: DefaultPreferenceCountAggregateOutputType | null
    _min: DefaultPreferenceMinAggregateOutputType | null
    _max: DefaultPreferenceMaxAggregateOutputType | null
  }

  type GetDefaultPreferenceGroupByPayload<T extends DefaultPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefaultPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefaultPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefaultPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], DefaultPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type DefaultPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["defaultPreference"]>

  export type DefaultPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["defaultPreference"]>

  export type DefaultPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["defaultPreference"]>

  export type DefaultPreferenceSelectScalar = {
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DefaultPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationType" | "channel" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["defaultPreference"]>

  export type $DefaultPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DefaultPreference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationType: $Enums.NotificationType
      channel: $Enums.Channel
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["defaultPreference"]>
    composites: {}
  }

  type DefaultPreferenceGetPayload<S extends boolean | null | undefined | DefaultPreferenceDefaultArgs> = $Result.GetResult<Prisma.$DefaultPreferencePayload, S>

  type DefaultPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefaultPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefaultPreferenceCountAggregateInputType | true
    }

  export interface DefaultPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DefaultPreference'], meta: { name: 'DefaultPreference' } }
    /**
     * Find zero or one DefaultPreference that matches the filter.
     * @param {DefaultPreferenceFindUniqueArgs} args - Arguments to find a DefaultPreference
     * @example
     * // Get one DefaultPreference
     * const defaultPreference = await prisma.defaultPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefaultPreferenceFindUniqueArgs>(args: SelectSubset<T, DefaultPreferenceFindUniqueArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DefaultPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefaultPreferenceFindUniqueOrThrowArgs} args - Arguments to find a DefaultPreference
     * @example
     * // Get one DefaultPreference
     * const defaultPreference = await prisma.defaultPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefaultPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, DefaultPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceFindFirstArgs} args - Arguments to find a DefaultPreference
     * @example
     * // Get one DefaultPreference
     * const defaultPreference = await prisma.defaultPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefaultPreferenceFindFirstArgs>(args?: SelectSubset<T, DefaultPreferenceFindFirstArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceFindFirstOrThrowArgs} args - Arguments to find a DefaultPreference
     * @example
     * // Get one DefaultPreference
     * const defaultPreference = await prisma.defaultPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefaultPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, DefaultPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DefaultPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DefaultPreferences
     * const defaultPreferences = await prisma.defaultPreference.findMany()
     * 
     * // Get first 10 DefaultPreferences
     * const defaultPreferences = await prisma.defaultPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const defaultPreferenceWithIdOnly = await prisma.defaultPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DefaultPreferenceFindManyArgs>(args?: SelectSubset<T, DefaultPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DefaultPreference.
     * @param {DefaultPreferenceCreateArgs} args - Arguments to create a DefaultPreference.
     * @example
     * // Create one DefaultPreference
     * const DefaultPreference = await prisma.defaultPreference.create({
     *   data: {
     *     // ... data to create a DefaultPreference
     *   }
     * })
     * 
     */
    create<T extends DefaultPreferenceCreateArgs>(args: SelectSubset<T, DefaultPreferenceCreateArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DefaultPreferences.
     * @param {DefaultPreferenceCreateManyArgs} args - Arguments to create many DefaultPreferences.
     * @example
     * // Create many DefaultPreferences
     * const defaultPreference = await prisma.defaultPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefaultPreferenceCreateManyArgs>(args?: SelectSubset<T, DefaultPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DefaultPreferences and returns the data saved in the database.
     * @param {DefaultPreferenceCreateManyAndReturnArgs} args - Arguments to create many DefaultPreferences.
     * @example
     * // Create many DefaultPreferences
     * const defaultPreference = await prisma.defaultPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DefaultPreferences and only return the `id`
     * const defaultPreferenceWithIdOnly = await prisma.defaultPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefaultPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, DefaultPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DefaultPreference.
     * @param {DefaultPreferenceDeleteArgs} args - Arguments to delete one DefaultPreference.
     * @example
     * // Delete one DefaultPreference
     * const DefaultPreference = await prisma.defaultPreference.delete({
     *   where: {
     *     // ... filter to delete one DefaultPreference
     *   }
     * })
     * 
     */
    delete<T extends DefaultPreferenceDeleteArgs>(args: SelectSubset<T, DefaultPreferenceDeleteArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DefaultPreference.
     * @param {DefaultPreferenceUpdateArgs} args - Arguments to update one DefaultPreference.
     * @example
     * // Update one DefaultPreference
     * const defaultPreference = await prisma.defaultPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefaultPreferenceUpdateArgs>(args: SelectSubset<T, DefaultPreferenceUpdateArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DefaultPreferences.
     * @param {DefaultPreferenceDeleteManyArgs} args - Arguments to filter DefaultPreferences to delete.
     * @example
     * // Delete a few DefaultPreferences
     * const { count } = await prisma.defaultPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefaultPreferenceDeleteManyArgs>(args?: SelectSubset<T, DefaultPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DefaultPreferences
     * const defaultPreference = await prisma.defaultPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefaultPreferenceUpdateManyArgs>(args: SelectSubset<T, DefaultPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultPreferences and returns the data updated in the database.
     * @param {DefaultPreferenceUpdateManyAndReturnArgs} args - Arguments to update many DefaultPreferences.
     * @example
     * // Update many DefaultPreferences
     * const defaultPreference = await prisma.defaultPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DefaultPreferences and only return the `id`
     * const defaultPreferenceWithIdOnly = await prisma.defaultPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DefaultPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, DefaultPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DefaultPreference.
     * @param {DefaultPreferenceUpsertArgs} args - Arguments to update or create a DefaultPreference.
     * @example
     * // Update or create a DefaultPreference
     * const defaultPreference = await prisma.defaultPreference.upsert({
     *   create: {
     *     // ... data to create a DefaultPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DefaultPreference we want to update
     *   }
     * })
     */
    upsert<T extends DefaultPreferenceUpsertArgs>(args: SelectSubset<T, DefaultPreferenceUpsertArgs<ExtArgs>>): Prisma__DefaultPreferenceClient<$Result.GetResult<Prisma.$DefaultPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DefaultPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceCountArgs} args - Arguments to filter DefaultPreferences to count.
     * @example
     * // Count the number of DefaultPreferences
     * const count = await prisma.defaultPreference.count({
     *   where: {
     *     // ... the filter for the DefaultPreferences we want to count
     *   }
     * })
    **/
    count<T extends DefaultPreferenceCountArgs>(
      args?: Subset<T, DefaultPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefaultPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DefaultPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DefaultPreferenceAggregateArgs>(args: Subset<T, DefaultPreferenceAggregateArgs>): Prisma.PrismaPromise<GetDefaultPreferenceAggregateType<T>>

    /**
     * Group by DefaultPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DefaultPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefaultPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: DefaultPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DefaultPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefaultPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DefaultPreference model
   */
  readonly fields: DefaultPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DefaultPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefaultPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DefaultPreference model
   */
  interface DefaultPreferenceFieldRefs {
    readonly id: FieldRef<"DefaultPreference", 'String'>
    readonly notificationType: FieldRef<"DefaultPreference", 'NotificationType'>
    readonly channel: FieldRef<"DefaultPreference", 'Channel'>
    readonly enabled: FieldRef<"DefaultPreference", 'Boolean'>
    readonly createdAt: FieldRef<"DefaultPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"DefaultPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DefaultPreference findUnique
   */
  export type DefaultPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which DefaultPreference to fetch.
     */
    where: DefaultPreferenceWhereUniqueInput
  }

  /**
   * DefaultPreference findUniqueOrThrow
   */
  export type DefaultPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which DefaultPreference to fetch.
     */
    where: DefaultPreferenceWhereUniqueInput
  }

  /**
   * DefaultPreference findFirst
   */
  export type DefaultPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which DefaultPreference to fetch.
     */
    where?: DefaultPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultPreferences to fetch.
     */
    orderBy?: DefaultPreferenceOrderByWithRelationInput | DefaultPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultPreferences.
     */
    cursor?: DefaultPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultPreferences.
     */
    distinct?: DefaultPreferenceScalarFieldEnum | DefaultPreferenceScalarFieldEnum[]
  }

  /**
   * DefaultPreference findFirstOrThrow
   */
  export type DefaultPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which DefaultPreference to fetch.
     */
    where?: DefaultPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultPreferences to fetch.
     */
    orderBy?: DefaultPreferenceOrderByWithRelationInput | DefaultPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultPreferences.
     */
    cursor?: DefaultPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultPreferences.
     */
    distinct?: DefaultPreferenceScalarFieldEnum | DefaultPreferenceScalarFieldEnum[]
  }

  /**
   * DefaultPreference findMany
   */
  export type DefaultPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which DefaultPreferences to fetch.
     */
    where?: DefaultPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultPreferences to fetch.
     */
    orderBy?: DefaultPreferenceOrderByWithRelationInput | DefaultPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DefaultPreferences.
     */
    cursor?: DefaultPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultPreferences.
     */
    distinct?: DefaultPreferenceScalarFieldEnum | DefaultPreferenceScalarFieldEnum[]
  }

  /**
   * DefaultPreference create
   */
  export type DefaultPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to create a DefaultPreference.
     */
    data: XOR<DefaultPreferenceCreateInput, DefaultPreferenceUncheckedCreateInput>
  }

  /**
   * DefaultPreference createMany
   */
  export type DefaultPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DefaultPreferences.
     */
    data: DefaultPreferenceCreateManyInput | DefaultPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DefaultPreference createManyAndReturn
   */
  export type DefaultPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many DefaultPreferences.
     */
    data: DefaultPreferenceCreateManyInput | DefaultPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DefaultPreference update
   */
  export type DefaultPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to update a DefaultPreference.
     */
    data: XOR<DefaultPreferenceUpdateInput, DefaultPreferenceUncheckedUpdateInput>
    /**
     * Choose, which DefaultPreference to update.
     */
    where: DefaultPreferenceWhereUniqueInput
  }

  /**
   * DefaultPreference updateMany
   */
  export type DefaultPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DefaultPreferences.
     */
    data: XOR<DefaultPreferenceUpdateManyMutationInput, DefaultPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which DefaultPreferences to update
     */
    where?: DefaultPreferenceWhereInput
    /**
     * Limit how many DefaultPreferences to update.
     */
    limit?: number
  }

  /**
   * DefaultPreference updateManyAndReturn
   */
  export type DefaultPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update DefaultPreferences.
     */
    data: XOR<DefaultPreferenceUpdateManyMutationInput, DefaultPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which DefaultPreferences to update
     */
    where?: DefaultPreferenceWhereInput
    /**
     * Limit how many DefaultPreferences to update.
     */
    limit?: number
  }

  /**
   * DefaultPreference upsert
   */
  export type DefaultPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * The filter to search for the DefaultPreference to update in case it exists.
     */
    where: DefaultPreferenceWhereUniqueInput
    /**
     * In case the DefaultPreference found by the `where` argument doesn't exist, create a new DefaultPreference with this data.
     */
    create: XOR<DefaultPreferenceCreateInput, DefaultPreferenceUncheckedCreateInput>
    /**
     * In case the DefaultPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefaultPreferenceUpdateInput, DefaultPreferenceUncheckedUpdateInput>
  }

  /**
   * DefaultPreference delete
   */
  export type DefaultPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
    /**
     * Filter which DefaultPreference to delete.
     */
    where: DefaultPreferenceWhereUniqueInput
  }

  /**
   * DefaultPreference deleteMany
   */
  export type DefaultPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultPreferences to delete
     */
    where?: DefaultPreferenceWhereInput
    /**
     * Limit how many DefaultPreferences to delete.
     */
    limit?: number
  }

  /**
   * DefaultPreference without action
   */
  export type DefaultPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultPreference
     */
    select?: DefaultPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultPreference
     */
    omit?: DefaultPreferenceOmit<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    notificationType: number
    channel: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    notificationType?: true
    channel?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    notificationType?: true
    channel?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    notificationType?: true
    channel?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: string
    userId: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    notificationType?: boolean
    channel?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "notificationType" | "channel" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      notificationType: $Enums.NotificationType
      channel: $Enums.Channel
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'String'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly notificationType: FieldRef<"UserPreference", 'NotificationType'>
    readonly channel: FieldRef<"UserPreference", 'Channel'>
    readonly enabled: FieldRef<"UserPreference", 'Boolean'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
  }


  /**
   * Model UserQuietHours
   */

  export type AggregateUserQuietHours = {
    _count: UserQuietHoursCountAggregateOutputType | null
    _min: UserQuietHoursMinAggregateOutputType | null
    _max: UserQuietHoursMaxAggregateOutputType | null
  }

  export type UserQuietHoursMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    timezone: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuietHoursMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    timezone: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuietHoursCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    timezone: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserQuietHoursMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    timezone?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuietHoursMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    timezone?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuietHoursCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    timezone?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserQuietHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuietHours to aggregate.
     */
    where?: UserQuietHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuietHours to fetch.
     */
    orderBy?: UserQuietHoursOrderByWithRelationInput | UserQuietHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuietHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuietHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuietHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuietHours
    **/
    _count?: true | UserQuietHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuietHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuietHoursMaxAggregateInputType
  }

  export type GetUserQuietHoursAggregateType<T extends UserQuietHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuietHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuietHours[P]>
      : GetScalarType<T[P], AggregateUserQuietHours[P]>
  }




  export type UserQuietHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuietHoursWhereInput
    orderBy?: UserQuietHoursOrderByWithAggregationInput | UserQuietHoursOrderByWithAggregationInput[]
    by: UserQuietHoursScalarFieldEnum[] | UserQuietHoursScalarFieldEnum
    having?: UserQuietHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuietHoursCountAggregateInputType | true
    _min?: UserQuietHoursMinAggregateInputType
    _max?: UserQuietHoursMaxAggregateInputType
  }

  export type UserQuietHoursGroupByOutputType = {
    id: string
    userId: string
    startTime: Date
    endTime: Date
    timezone: string
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserQuietHoursCountAggregateOutputType | null
    _min: UserQuietHoursMinAggregateOutputType | null
    _max: UserQuietHoursMaxAggregateOutputType | null
  }

  type GetUserQuietHoursGroupByPayload<T extends UserQuietHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuietHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuietHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuietHoursGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuietHoursGroupByOutputType[P]>
        }
      >
    >


  export type UserQuietHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userQuietHours"]>

  export type UserQuietHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userQuietHours"]>

  export type UserQuietHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userQuietHours"]>

  export type UserQuietHoursSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserQuietHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startTime" | "endTime" | "timezone" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["userQuietHours"]>

  export type $UserQuietHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuietHours"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startTime: Date
      endTime: Date
      timezone: string
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userQuietHours"]>
    composites: {}
  }

  type UserQuietHoursGetPayload<S extends boolean | null | undefined | UserQuietHoursDefaultArgs> = $Result.GetResult<Prisma.$UserQuietHoursPayload, S>

  type UserQuietHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuietHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuietHoursCountAggregateInputType | true
    }

  export interface UserQuietHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuietHours'], meta: { name: 'UserQuietHours' } }
    /**
     * Find zero or one UserQuietHours that matches the filter.
     * @param {UserQuietHoursFindUniqueArgs} args - Arguments to find a UserQuietHours
     * @example
     * // Get one UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuietHoursFindUniqueArgs>(args: SelectSubset<T, UserQuietHoursFindUniqueArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuietHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuietHoursFindUniqueOrThrowArgs} args - Arguments to find a UserQuietHours
     * @example
     * // Get one UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuietHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuietHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuietHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursFindFirstArgs} args - Arguments to find a UserQuietHours
     * @example
     * // Get one UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuietHoursFindFirstArgs>(args?: SelectSubset<T, UserQuietHoursFindFirstArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuietHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursFindFirstOrThrowArgs} args - Arguments to find a UserQuietHours
     * @example
     * // Get one UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuietHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuietHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuietHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.findMany()
     * 
     * // Get first 10 UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuietHoursWithIdOnly = await prisma.userQuietHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuietHoursFindManyArgs>(args?: SelectSubset<T, UserQuietHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuietHours.
     * @param {UserQuietHoursCreateArgs} args - Arguments to create a UserQuietHours.
     * @example
     * // Create one UserQuietHours
     * const UserQuietHours = await prisma.userQuietHours.create({
     *   data: {
     *     // ... data to create a UserQuietHours
     *   }
     * })
     * 
     */
    create<T extends UserQuietHoursCreateArgs>(args: SelectSubset<T, UserQuietHoursCreateArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuietHours.
     * @param {UserQuietHoursCreateManyArgs} args - Arguments to create many UserQuietHours.
     * @example
     * // Create many UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuietHoursCreateManyArgs>(args?: SelectSubset<T, UserQuietHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuietHours and returns the data saved in the database.
     * @param {UserQuietHoursCreateManyAndReturnArgs} args - Arguments to create many UserQuietHours.
     * @example
     * // Create many UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuietHours and only return the `id`
     * const userQuietHoursWithIdOnly = await prisma.userQuietHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuietHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuietHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuietHours.
     * @param {UserQuietHoursDeleteArgs} args - Arguments to delete one UserQuietHours.
     * @example
     * // Delete one UserQuietHours
     * const UserQuietHours = await prisma.userQuietHours.delete({
     *   where: {
     *     // ... filter to delete one UserQuietHours
     *   }
     * })
     * 
     */
    delete<T extends UserQuietHoursDeleteArgs>(args: SelectSubset<T, UserQuietHoursDeleteArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuietHours.
     * @param {UserQuietHoursUpdateArgs} args - Arguments to update one UserQuietHours.
     * @example
     * // Update one UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuietHoursUpdateArgs>(args: SelectSubset<T, UserQuietHoursUpdateArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuietHours.
     * @param {UserQuietHoursDeleteManyArgs} args - Arguments to filter UserQuietHours to delete.
     * @example
     * // Delete a few UserQuietHours
     * const { count } = await prisma.userQuietHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuietHoursDeleteManyArgs>(args?: SelectSubset<T, UserQuietHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuietHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuietHoursUpdateManyArgs>(args: SelectSubset<T, UserQuietHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuietHours and returns the data updated in the database.
     * @param {UserQuietHoursUpdateManyAndReturnArgs} args - Arguments to update many UserQuietHours.
     * @example
     * // Update many UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuietHours and only return the `id`
     * const userQuietHoursWithIdOnly = await prisma.userQuietHours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserQuietHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuietHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuietHours.
     * @param {UserQuietHoursUpsertArgs} args - Arguments to update or create a UserQuietHours.
     * @example
     * // Update or create a UserQuietHours
     * const userQuietHours = await prisma.userQuietHours.upsert({
     *   create: {
     *     // ... data to create a UserQuietHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuietHours we want to update
     *   }
     * })
     */
    upsert<T extends UserQuietHoursUpsertArgs>(args: SelectSubset<T, UserQuietHoursUpsertArgs<ExtArgs>>): Prisma__UserQuietHoursClient<$Result.GetResult<Prisma.$UserQuietHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuietHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursCountArgs} args - Arguments to filter UserQuietHours to count.
     * @example
     * // Count the number of UserQuietHours
     * const count = await prisma.userQuietHours.count({
     *   where: {
     *     // ... the filter for the UserQuietHours we want to count
     *   }
     * })
    **/
    count<T extends UserQuietHoursCountArgs>(
      args?: Subset<T, UserQuietHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuietHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuietHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuietHoursAggregateArgs>(args: Subset<T, UserQuietHoursAggregateArgs>): Prisma.PrismaPromise<GetUserQuietHoursAggregateType<T>>

    /**
     * Group by UserQuietHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuietHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuietHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuietHoursGroupByArgs['orderBy'] }
        : { orderBy?: UserQuietHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuietHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuietHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuietHours model
   */
  readonly fields: UserQuietHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuietHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuietHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserQuietHours model
   */
  interface UserQuietHoursFieldRefs {
    readonly id: FieldRef<"UserQuietHours", 'String'>
    readonly userId: FieldRef<"UserQuietHours", 'String'>
    readonly startTime: FieldRef<"UserQuietHours", 'DateTime'>
    readonly endTime: FieldRef<"UserQuietHours", 'DateTime'>
    readonly timezone: FieldRef<"UserQuietHours", 'String'>
    readonly enabled: FieldRef<"UserQuietHours", 'Boolean'>
    readonly createdAt: FieldRef<"UserQuietHours", 'DateTime'>
    readonly updatedAt: FieldRef<"UserQuietHours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuietHours findUnique
   */
  export type UserQuietHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * Filter, which UserQuietHours to fetch.
     */
    where: UserQuietHoursWhereUniqueInput
  }

  /**
   * UserQuietHours findUniqueOrThrow
   */
  export type UserQuietHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * Filter, which UserQuietHours to fetch.
     */
    where: UserQuietHoursWhereUniqueInput
  }

  /**
   * UserQuietHours findFirst
   */
  export type UserQuietHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * Filter, which UserQuietHours to fetch.
     */
    where?: UserQuietHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuietHours to fetch.
     */
    orderBy?: UserQuietHoursOrderByWithRelationInput | UserQuietHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuietHours.
     */
    cursor?: UserQuietHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuietHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuietHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuietHours.
     */
    distinct?: UserQuietHoursScalarFieldEnum | UserQuietHoursScalarFieldEnum[]
  }

  /**
   * UserQuietHours findFirstOrThrow
   */
  export type UserQuietHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * Filter, which UserQuietHours to fetch.
     */
    where?: UserQuietHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuietHours to fetch.
     */
    orderBy?: UserQuietHoursOrderByWithRelationInput | UserQuietHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuietHours.
     */
    cursor?: UserQuietHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuietHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuietHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuietHours.
     */
    distinct?: UserQuietHoursScalarFieldEnum | UserQuietHoursScalarFieldEnum[]
  }

  /**
   * UserQuietHours findMany
   */
  export type UserQuietHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * Filter, which UserQuietHours to fetch.
     */
    where?: UserQuietHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuietHours to fetch.
     */
    orderBy?: UserQuietHoursOrderByWithRelationInput | UserQuietHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuietHours.
     */
    cursor?: UserQuietHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuietHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuietHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuietHours.
     */
    distinct?: UserQuietHoursScalarFieldEnum | UserQuietHoursScalarFieldEnum[]
  }

  /**
   * UserQuietHours create
   */
  export type UserQuietHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * The data needed to create a UserQuietHours.
     */
    data: XOR<UserQuietHoursCreateInput, UserQuietHoursUncheckedCreateInput>
  }

  /**
   * UserQuietHours createMany
   */
  export type UserQuietHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuietHours.
     */
    data: UserQuietHoursCreateManyInput | UserQuietHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuietHours createManyAndReturn
   */
  export type UserQuietHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuietHours.
     */
    data: UserQuietHoursCreateManyInput | UserQuietHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuietHours update
   */
  export type UserQuietHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * The data needed to update a UserQuietHours.
     */
    data: XOR<UserQuietHoursUpdateInput, UserQuietHoursUncheckedUpdateInput>
    /**
     * Choose, which UserQuietHours to update.
     */
    where: UserQuietHoursWhereUniqueInput
  }

  /**
   * UserQuietHours updateMany
   */
  export type UserQuietHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuietHours.
     */
    data: XOR<UserQuietHoursUpdateManyMutationInput, UserQuietHoursUncheckedUpdateManyInput>
    /**
     * Filter which UserQuietHours to update
     */
    where?: UserQuietHoursWhereInput
    /**
     * Limit how many UserQuietHours to update.
     */
    limit?: number
  }

  /**
   * UserQuietHours updateManyAndReturn
   */
  export type UserQuietHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * The data used to update UserQuietHours.
     */
    data: XOR<UserQuietHoursUpdateManyMutationInput, UserQuietHoursUncheckedUpdateManyInput>
    /**
     * Filter which UserQuietHours to update
     */
    where?: UserQuietHoursWhereInput
    /**
     * Limit how many UserQuietHours to update.
     */
    limit?: number
  }

  /**
   * UserQuietHours upsert
   */
  export type UserQuietHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * The filter to search for the UserQuietHours to update in case it exists.
     */
    where: UserQuietHoursWhereUniqueInput
    /**
     * In case the UserQuietHours found by the `where` argument doesn't exist, create a new UserQuietHours with this data.
     */
    create: XOR<UserQuietHoursCreateInput, UserQuietHoursUncheckedCreateInput>
    /**
     * In case the UserQuietHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuietHoursUpdateInput, UserQuietHoursUncheckedUpdateInput>
  }

  /**
   * UserQuietHours delete
   */
  export type UserQuietHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
    /**
     * Filter which UserQuietHours to delete.
     */
    where: UserQuietHoursWhereUniqueInput
  }

  /**
   * UserQuietHours deleteMany
   */
  export type UserQuietHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuietHours to delete
     */
    where?: UserQuietHoursWhereInput
    /**
     * Limit how many UserQuietHours to delete.
     */
    limit?: number
  }

  /**
   * UserQuietHours without action
   */
  export type UserQuietHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuietHours
     */
    select?: UserQuietHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuietHours
     */
    omit?: UserQuietHoursOmit<ExtArgs> | null
  }


  /**
   * Model GlobalPolicy
   */

  export type AggregateGlobalPolicy = {
    _count: GlobalPolicyCountAggregateOutputType | null
    _min: GlobalPolicyMinAggregateOutputType | null
    _max: GlobalPolicyMaxAggregateOutputType | null
  }

  export type GlobalPolicyMinAggregateOutputType = {
    id: string | null
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    region: string | null
    action: $Enums.PolicyAction | null
    reason: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalPolicyMaxAggregateOutputType = {
    id: string | null
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    region: string | null
    action: $Enums.PolicyAction | null
    reason: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalPolicyCountAggregateOutputType = {
    id: number
    notificationType: number
    channel: number
    region: number
    action: number
    reason: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlobalPolicyMinAggregateInputType = {
    id?: true
    notificationType?: true
    channel?: true
    region?: true
    action?: true
    reason?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalPolicyMaxAggregateInputType = {
    id?: true
    notificationType?: true
    channel?: true
    region?: true
    action?: true
    reason?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalPolicyCountAggregateInputType = {
    id?: true
    notificationType?: true
    channel?: true
    region?: true
    action?: true
    reason?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPolicy to aggregate.
     */
    where?: GlobalPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPolicies to fetch.
     */
    orderBy?: GlobalPolicyOrderByWithRelationInput | GlobalPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalPolicies
    **/
    _count?: true | GlobalPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalPolicyMaxAggregateInputType
  }

  export type GetGlobalPolicyAggregateType<T extends GlobalPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalPolicy[P]>
      : GetScalarType<T[P], AggregateGlobalPolicy[P]>
  }




  export type GlobalPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalPolicyWhereInput
    orderBy?: GlobalPolicyOrderByWithAggregationInput | GlobalPolicyOrderByWithAggregationInput[]
    by: GlobalPolicyScalarFieldEnum[] | GlobalPolicyScalarFieldEnum
    having?: GlobalPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalPolicyCountAggregateInputType | true
    _min?: GlobalPolicyMinAggregateInputType
    _max?: GlobalPolicyMaxAggregateInputType
  }

  export type GlobalPolicyGroupByOutputType = {
    id: string
    notificationType: $Enums.NotificationType | null
    channel: $Enums.Channel | null
    region: string | null
    action: $Enums.PolicyAction
    reason: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: GlobalPolicyCountAggregateOutputType | null
    _min: GlobalPolicyMinAggregateOutputType | null
    _max: GlobalPolicyMaxAggregateOutputType | null
  }

  type GetGlobalPolicyGroupByPayload<T extends GlobalPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalPolicyGroupByOutputType[P]>
        }
      >
    >


  export type GlobalPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    region?: boolean
    action?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPolicy"]>

  export type GlobalPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    region?: boolean
    action?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPolicy"]>

  export type GlobalPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    region?: boolean
    action?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPolicy"]>

  export type GlobalPolicySelectScalar = {
    id?: boolean
    notificationType?: boolean
    channel?: boolean
    region?: boolean
    action?: boolean
    reason?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlobalPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationType" | "channel" | "region" | "action" | "reason" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["globalPolicy"]>

  export type $GlobalPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationType: $Enums.NotificationType | null
      channel: $Enums.Channel | null
      region: string | null
      action: $Enums.PolicyAction
      reason: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["globalPolicy"]>
    composites: {}
  }

  type GlobalPolicyGetPayload<S extends boolean | null | undefined | GlobalPolicyDefaultArgs> = $Result.GetResult<Prisma.$GlobalPolicyPayload, S>

  type GlobalPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalPolicyCountAggregateInputType | true
    }

  export interface GlobalPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalPolicy'], meta: { name: 'GlobalPolicy' } }
    /**
     * Find zero or one GlobalPolicy that matches the filter.
     * @param {GlobalPolicyFindUniqueArgs} args - Arguments to find a GlobalPolicy
     * @example
     * // Get one GlobalPolicy
     * const globalPolicy = await prisma.globalPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalPolicyFindUniqueArgs>(args: SelectSubset<T, GlobalPolicyFindUniqueArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalPolicyFindUniqueOrThrowArgs} args - Arguments to find a GlobalPolicy
     * @example
     * // Get one GlobalPolicy
     * const globalPolicy = await prisma.globalPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyFindFirstArgs} args - Arguments to find a GlobalPolicy
     * @example
     * // Get one GlobalPolicy
     * const globalPolicy = await prisma.globalPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalPolicyFindFirstArgs>(args?: SelectSubset<T, GlobalPolicyFindFirstArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyFindFirstOrThrowArgs} args - Arguments to find a GlobalPolicy
     * @example
     * // Get one GlobalPolicy
     * const globalPolicy = await prisma.globalPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalPolicies
     * const globalPolicies = await prisma.globalPolicy.findMany()
     * 
     * // Get first 10 GlobalPolicies
     * const globalPolicies = await prisma.globalPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalPolicyWithIdOnly = await prisma.globalPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalPolicyFindManyArgs>(args?: SelectSubset<T, GlobalPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalPolicy.
     * @param {GlobalPolicyCreateArgs} args - Arguments to create a GlobalPolicy.
     * @example
     * // Create one GlobalPolicy
     * const GlobalPolicy = await prisma.globalPolicy.create({
     *   data: {
     *     // ... data to create a GlobalPolicy
     *   }
     * })
     * 
     */
    create<T extends GlobalPolicyCreateArgs>(args: SelectSubset<T, GlobalPolicyCreateArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalPolicies.
     * @param {GlobalPolicyCreateManyArgs} args - Arguments to create many GlobalPolicies.
     * @example
     * // Create many GlobalPolicies
     * const globalPolicy = await prisma.globalPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalPolicyCreateManyArgs>(args?: SelectSubset<T, GlobalPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalPolicies and returns the data saved in the database.
     * @param {GlobalPolicyCreateManyAndReturnArgs} args - Arguments to create many GlobalPolicies.
     * @example
     * // Create many GlobalPolicies
     * const globalPolicy = await prisma.globalPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalPolicies and only return the `id`
     * const globalPolicyWithIdOnly = await prisma.globalPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalPolicy.
     * @param {GlobalPolicyDeleteArgs} args - Arguments to delete one GlobalPolicy.
     * @example
     * // Delete one GlobalPolicy
     * const GlobalPolicy = await prisma.globalPolicy.delete({
     *   where: {
     *     // ... filter to delete one GlobalPolicy
     *   }
     * })
     * 
     */
    delete<T extends GlobalPolicyDeleteArgs>(args: SelectSubset<T, GlobalPolicyDeleteArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalPolicy.
     * @param {GlobalPolicyUpdateArgs} args - Arguments to update one GlobalPolicy.
     * @example
     * // Update one GlobalPolicy
     * const globalPolicy = await prisma.globalPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalPolicyUpdateArgs>(args: SelectSubset<T, GlobalPolicyUpdateArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalPolicies.
     * @param {GlobalPolicyDeleteManyArgs} args - Arguments to filter GlobalPolicies to delete.
     * @example
     * // Delete a few GlobalPolicies
     * const { count } = await prisma.globalPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalPolicyDeleteManyArgs>(args?: SelectSubset<T, GlobalPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalPolicies
     * const globalPolicy = await prisma.globalPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalPolicyUpdateManyArgs>(args: SelectSubset<T, GlobalPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPolicies and returns the data updated in the database.
     * @param {GlobalPolicyUpdateManyAndReturnArgs} args - Arguments to update many GlobalPolicies.
     * @example
     * // Update many GlobalPolicies
     * const globalPolicy = await prisma.globalPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalPolicies and only return the `id`
     * const globalPolicyWithIdOnly = await prisma.globalPolicy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalPolicy.
     * @param {GlobalPolicyUpsertArgs} args - Arguments to update or create a GlobalPolicy.
     * @example
     * // Update or create a GlobalPolicy
     * const globalPolicy = await prisma.globalPolicy.upsert({
     *   create: {
     *     // ... data to create a GlobalPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalPolicy we want to update
     *   }
     * })
     */
    upsert<T extends GlobalPolicyUpsertArgs>(args: SelectSubset<T, GlobalPolicyUpsertArgs<ExtArgs>>): Prisma__GlobalPolicyClient<$Result.GetResult<Prisma.$GlobalPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyCountArgs} args - Arguments to filter GlobalPolicies to count.
     * @example
     * // Count the number of GlobalPolicies
     * const count = await prisma.globalPolicy.count({
     *   where: {
     *     // ... the filter for the GlobalPolicies we want to count
     *   }
     * })
    **/
    count<T extends GlobalPolicyCountArgs>(
      args?: Subset<T, GlobalPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalPolicyAggregateArgs>(args: Subset<T, GlobalPolicyAggregateArgs>): Prisma.PrismaPromise<GetGlobalPolicyAggregateType<T>>

    /**
     * Group by GlobalPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalPolicyGroupByArgs['orderBy'] }
        : { orderBy?: GlobalPolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalPolicy model
   */
  readonly fields: GlobalPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalPolicy model
   */
  interface GlobalPolicyFieldRefs {
    readonly id: FieldRef<"GlobalPolicy", 'String'>
    readonly notificationType: FieldRef<"GlobalPolicy", 'NotificationType'>
    readonly channel: FieldRef<"GlobalPolicy", 'Channel'>
    readonly region: FieldRef<"GlobalPolicy", 'String'>
    readonly action: FieldRef<"GlobalPolicy", 'PolicyAction'>
    readonly reason: FieldRef<"GlobalPolicy", 'String'>
    readonly isActive: FieldRef<"GlobalPolicy", 'Boolean'>
    readonly createdAt: FieldRef<"GlobalPolicy", 'DateTime'>
    readonly updatedAt: FieldRef<"GlobalPolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalPolicy findUnique
   */
  export type GlobalPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPolicy to fetch.
     */
    where: GlobalPolicyWhereUniqueInput
  }

  /**
   * GlobalPolicy findUniqueOrThrow
   */
  export type GlobalPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPolicy to fetch.
     */
    where: GlobalPolicyWhereUniqueInput
  }

  /**
   * GlobalPolicy findFirst
   */
  export type GlobalPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPolicy to fetch.
     */
    where?: GlobalPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPolicies to fetch.
     */
    orderBy?: GlobalPolicyOrderByWithRelationInput | GlobalPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPolicies.
     */
    cursor?: GlobalPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPolicies.
     */
    distinct?: GlobalPolicyScalarFieldEnum | GlobalPolicyScalarFieldEnum[]
  }

  /**
   * GlobalPolicy findFirstOrThrow
   */
  export type GlobalPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPolicy to fetch.
     */
    where?: GlobalPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPolicies to fetch.
     */
    orderBy?: GlobalPolicyOrderByWithRelationInput | GlobalPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPolicies.
     */
    cursor?: GlobalPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPolicies.
     */
    distinct?: GlobalPolicyScalarFieldEnum | GlobalPolicyScalarFieldEnum[]
  }

  /**
   * GlobalPolicy findMany
   */
  export type GlobalPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPolicies to fetch.
     */
    where?: GlobalPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPolicies to fetch.
     */
    orderBy?: GlobalPolicyOrderByWithRelationInput | GlobalPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalPolicies.
     */
    cursor?: GlobalPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPolicies.
     */
    distinct?: GlobalPolicyScalarFieldEnum | GlobalPolicyScalarFieldEnum[]
  }

  /**
   * GlobalPolicy create
   */
  export type GlobalPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalPolicy.
     */
    data: XOR<GlobalPolicyCreateInput, GlobalPolicyUncheckedCreateInput>
  }

  /**
   * GlobalPolicy createMany
   */
  export type GlobalPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalPolicies.
     */
    data: GlobalPolicyCreateManyInput | GlobalPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPolicy createManyAndReturn
   */
  export type GlobalPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalPolicies.
     */
    data: GlobalPolicyCreateManyInput | GlobalPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPolicy update
   */
  export type GlobalPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalPolicy.
     */
    data: XOR<GlobalPolicyUpdateInput, GlobalPolicyUncheckedUpdateInput>
    /**
     * Choose, which GlobalPolicy to update.
     */
    where: GlobalPolicyWhereUniqueInput
  }

  /**
   * GlobalPolicy updateMany
   */
  export type GlobalPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalPolicies.
     */
    data: XOR<GlobalPolicyUpdateManyMutationInput, GlobalPolicyUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPolicies to update
     */
    where?: GlobalPolicyWhereInput
    /**
     * Limit how many GlobalPolicies to update.
     */
    limit?: number
  }

  /**
   * GlobalPolicy updateManyAndReturn
   */
  export type GlobalPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * The data used to update GlobalPolicies.
     */
    data: XOR<GlobalPolicyUpdateManyMutationInput, GlobalPolicyUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPolicies to update
     */
    where?: GlobalPolicyWhereInput
    /**
     * Limit how many GlobalPolicies to update.
     */
    limit?: number
  }

  /**
   * GlobalPolicy upsert
   */
  export type GlobalPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalPolicy to update in case it exists.
     */
    where: GlobalPolicyWhereUniqueInput
    /**
     * In case the GlobalPolicy found by the `where` argument doesn't exist, create a new GlobalPolicy with this data.
     */
    create: XOR<GlobalPolicyCreateInput, GlobalPolicyUncheckedCreateInput>
    /**
     * In case the GlobalPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalPolicyUpdateInput, GlobalPolicyUncheckedUpdateInput>
  }

  /**
   * GlobalPolicy delete
   */
  export type GlobalPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
    /**
     * Filter which GlobalPolicy to delete.
     */
    where: GlobalPolicyWhereUniqueInput
  }

  /**
   * GlobalPolicy deleteMany
   */
  export type GlobalPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPolicies to delete
     */
    where?: GlobalPolicyWhereInput
    /**
     * Limit how many GlobalPolicies to delete.
     */
    limit?: number
  }

  /**
   * GlobalPolicy without action
   */
  export type GlobalPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPolicy
     */
    select?: GlobalPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPolicy
     */
    omit?: GlobalPolicyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DefaultPreferenceScalarFieldEnum: {
    id: 'id',
    notificationType: 'notificationType',
    channel: 'channel',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DefaultPreferenceScalarFieldEnum = (typeof DefaultPreferenceScalarFieldEnum)[keyof typeof DefaultPreferenceScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notificationType: 'notificationType',
    channel: 'channel',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const UserQuietHoursScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    timezone: 'timezone',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserQuietHoursScalarFieldEnum = (typeof UserQuietHoursScalarFieldEnum)[keyof typeof UserQuietHoursScalarFieldEnum]


  export const GlobalPolicyScalarFieldEnum: {
    id: 'id',
    notificationType: 'notificationType',
    channel: 'channel',
    region: 'region',
    action: 'action',
    reason: 'reason',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlobalPolicyScalarFieldEnum = (typeof GlobalPolicyScalarFieldEnum)[keyof typeof GlobalPolicyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Channel'
   */
  export type EnumChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Channel'>
    


  /**
   * Reference to a field of type 'Channel[]'
   */
  export type ListEnumChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Channel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PolicyAction'
   */
  export type EnumPolicyActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyAction'>
    


  /**
   * Reference to a field of type 'PolicyAction[]'
   */
  export type ListEnumPolicyActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyAction[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DefaultPreferenceWhereInput = {
    AND?: DefaultPreferenceWhereInput | DefaultPreferenceWhereInput[]
    OR?: DefaultPreferenceWhereInput[]
    NOT?: DefaultPreferenceWhereInput | DefaultPreferenceWhereInput[]
    id?: UuidFilter<"DefaultPreference"> | string
    notificationType?: EnumNotificationTypeFilter<"DefaultPreference"> | $Enums.NotificationType
    channel?: EnumChannelFilter<"DefaultPreference"> | $Enums.Channel
    enabled?: BoolFilter<"DefaultPreference"> | boolean
    createdAt?: DateTimeFilter<"DefaultPreference"> | Date | string
    updatedAt?: DateTimeFilter<"DefaultPreference"> | Date | string
  }

  export type DefaultPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DefaultPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    notificationType_channel?: DefaultPreferenceNotificationTypeChannelCompoundUniqueInput
    AND?: DefaultPreferenceWhereInput | DefaultPreferenceWhereInput[]
    OR?: DefaultPreferenceWhereInput[]
    NOT?: DefaultPreferenceWhereInput | DefaultPreferenceWhereInput[]
    notificationType?: EnumNotificationTypeFilter<"DefaultPreference"> | $Enums.NotificationType
    channel?: EnumChannelFilter<"DefaultPreference"> | $Enums.Channel
    enabled?: BoolFilter<"DefaultPreference"> | boolean
    createdAt?: DateTimeFilter<"DefaultPreference"> | Date | string
    updatedAt?: DateTimeFilter<"DefaultPreference"> | Date | string
  }, "id" | "notificationType_channel">

  export type DefaultPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DefaultPreferenceCountOrderByAggregateInput
    _max?: DefaultPreferenceMaxOrderByAggregateInput
    _min?: DefaultPreferenceMinOrderByAggregateInput
  }

  export type DefaultPreferenceScalarWhereWithAggregatesInput = {
    AND?: DefaultPreferenceScalarWhereWithAggregatesInput | DefaultPreferenceScalarWhereWithAggregatesInput[]
    OR?: DefaultPreferenceScalarWhereWithAggregatesInput[]
    NOT?: DefaultPreferenceScalarWhereWithAggregatesInput | DefaultPreferenceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DefaultPreference"> | string
    notificationType?: EnumNotificationTypeWithAggregatesFilter<"DefaultPreference"> | $Enums.NotificationType
    channel?: EnumChannelWithAggregatesFilter<"DefaultPreference"> | $Enums.Channel
    enabled?: BoolWithAggregatesFilter<"DefaultPreference"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DefaultPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DefaultPreference"> | Date | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: UuidFilter<"UserPreference"> | string
    userId?: StringFilter<"UserPreference"> | string
    notificationType?: EnumNotificationTypeFilter<"UserPreference"> | $Enums.NotificationType
    channel?: EnumChannelFilter<"UserPreference"> | $Enums.Channel
    enabled?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_notificationType_channel?: UserPreferenceUserIdNotificationTypeChannelCompoundUniqueInput
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    userId?: StringFilter<"UserPreference"> | string
    notificationType?: EnumNotificationTypeFilter<"UserPreference"> | $Enums.NotificationType
    channel?: EnumChannelFilter<"UserPreference"> | $Enums.Channel
    enabled?: BoolFilter<"UserPreference"> | boolean
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
  }, "id" | "userId_notificationType_channel">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserPreference"> | string
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    notificationType?: EnumNotificationTypeWithAggregatesFilter<"UserPreference"> | $Enums.NotificationType
    channel?: EnumChannelWithAggregatesFilter<"UserPreference"> | $Enums.Channel
    enabled?: BoolWithAggregatesFilter<"UserPreference"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  }

  export type UserQuietHoursWhereInput = {
    AND?: UserQuietHoursWhereInput | UserQuietHoursWhereInput[]
    OR?: UserQuietHoursWhereInput[]
    NOT?: UserQuietHoursWhereInput | UserQuietHoursWhereInput[]
    id?: UuidFilter<"UserQuietHours"> | string
    userId?: StringFilter<"UserQuietHours"> | string
    startTime?: DateTimeFilter<"UserQuietHours"> | Date | string
    endTime?: DateTimeFilter<"UserQuietHours"> | Date | string
    timezone?: StringFilter<"UserQuietHours"> | string
    enabled?: BoolFilter<"UserQuietHours"> | boolean
    createdAt?: DateTimeFilter<"UserQuietHours"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuietHours"> | Date | string
  }

  export type UserQuietHoursOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuietHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserQuietHoursWhereInput | UserQuietHoursWhereInput[]
    OR?: UserQuietHoursWhereInput[]
    NOT?: UserQuietHoursWhereInput | UserQuietHoursWhereInput[]
    startTime?: DateTimeFilter<"UserQuietHours"> | Date | string
    endTime?: DateTimeFilter<"UserQuietHours"> | Date | string
    timezone?: StringFilter<"UserQuietHours"> | string
    enabled?: BoolFilter<"UserQuietHours"> | boolean
    createdAt?: DateTimeFilter<"UserQuietHours"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuietHours"> | Date | string
  }, "id" | "userId">

  export type UserQuietHoursOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserQuietHoursCountOrderByAggregateInput
    _max?: UserQuietHoursMaxOrderByAggregateInput
    _min?: UserQuietHoursMinOrderByAggregateInput
  }

  export type UserQuietHoursScalarWhereWithAggregatesInput = {
    AND?: UserQuietHoursScalarWhereWithAggregatesInput | UserQuietHoursScalarWhereWithAggregatesInput[]
    OR?: UserQuietHoursScalarWhereWithAggregatesInput[]
    NOT?: UserQuietHoursScalarWhereWithAggregatesInput | UserQuietHoursScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserQuietHours"> | string
    userId?: StringWithAggregatesFilter<"UserQuietHours"> | string
    startTime?: DateTimeWithAggregatesFilter<"UserQuietHours"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"UserQuietHours"> | Date | string
    timezone?: StringWithAggregatesFilter<"UserQuietHours"> | string
    enabled?: BoolWithAggregatesFilter<"UserQuietHours"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserQuietHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserQuietHours"> | Date | string
  }

  export type GlobalPolicyWhereInput = {
    AND?: GlobalPolicyWhereInput | GlobalPolicyWhereInput[]
    OR?: GlobalPolicyWhereInput[]
    NOT?: GlobalPolicyWhereInput | GlobalPolicyWhereInput[]
    id?: UuidFilter<"GlobalPolicy"> | string
    notificationType?: EnumNotificationTypeNullableFilter<"GlobalPolicy"> | $Enums.NotificationType | null
    channel?: EnumChannelNullableFilter<"GlobalPolicy"> | $Enums.Channel | null
    region?: StringNullableFilter<"GlobalPolicy"> | string | null
    action?: EnumPolicyActionFilter<"GlobalPolicy"> | $Enums.PolicyAction
    reason?: StringFilter<"GlobalPolicy"> | string
    isActive?: BoolFilter<"GlobalPolicy"> | boolean
    createdAt?: DateTimeFilter<"GlobalPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalPolicy"> | Date | string
  }

  export type GlobalPolicyOrderByWithRelationInput = {
    id?: SortOrder
    notificationType?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    action?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalPolicyWhereInput | GlobalPolicyWhereInput[]
    OR?: GlobalPolicyWhereInput[]
    NOT?: GlobalPolicyWhereInput | GlobalPolicyWhereInput[]
    notificationType?: EnumNotificationTypeNullableFilter<"GlobalPolicy"> | $Enums.NotificationType | null
    channel?: EnumChannelNullableFilter<"GlobalPolicy"> | $Enums.Channel | null
    region?: StringNullableFilter<"GlobalPolicy"> | string | null
    action?: EnumPolicyActionFilter<"GlobalPolicy"> | $Enums.PolicyAction
    reason?: StringFilter<"GlobalPolicy"> | string
    isActive?: BoolFilter<"GlobalPolicy"> | boolean
    createdAt?: DateTimeFilter<"GlobalPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalPolicy"> | Date | string
  }, "id">

  export type GlobalPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    notificationType?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    action?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalPolicyCountOrderByAggregateInput
    _max?: GlobalPolicyMaxOrderByAggregateInput
    _min?: GlobalPolicyMinOrderByAggregateInput
  }

  export type GlobalPolicyScalarWhereWithAggregatesInput = {
    AND?: GlobalPolicyScalarWhereWithAggregatesInput | GlobalPolicyScalarWhereWithAggregatesInput[]
    OR?: GlobalPolicyScalarWhereWithAggregatesInput[]
    NOT?: GlobalPolicyScalarWhereWithAggregatesInput | GlobalPolicyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GlobalPolicy"> | string
    notificationType?: EnumNotificationTypeNullableWithAggregatesFilter<"GlobalPolicy"> | $Enums.NotificationType | null
    channel?: EnumChannelNullableWithAggregatesFilter<"GlobalPolicy"> | $Enums.Channel | null
    region?: StringNullableWithAggregatesFilter<"GlobalPolicy"> | string | null
    action?: EnumPolicyActionWithAggregatesFilter<"GlobalPolicy"> | $Enums.PolicyAction
    reason?: StringWithAggregatesFilter<"GlobalPolicy"> | string
    isActive?: BoolWithAggregatesFilter<"GlobalPolicy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GlobalPolicy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalPolicy"> | Date | string
  }

  export type DefaultPreferenceCreateInput = {
    id?: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DefaultPreferenceUncheckedCreateInput = {
    id?: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DefaultPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultPreferenceCreateManyInput = {
    id?: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DefaultPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateInput = {
    id?: string
    userId: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: string
    userId: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuietHoursCreateInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    timezone: string
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuietHoursUncheckedCreateInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    timezone: string
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuietHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuietHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuietHoursCreateManyInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    timezone: string
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuietHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuietHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPolicyCreateInput = {
    id?: string
    notificationType?: $Enums.NotificationType | null
    channel?: $Enums.Channel | null
    region?: string | null
    action?: $Enums.PolicyAction
    reason: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPolicyUncheckedCreateInput = {
    id?: string
    notificationType?: $Enums.NotificationType | null
    channel?: $Enums.Channel | null
    region?: string | null
    action?: $Enums.PolicyAction
    reason: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    channel?: NullableEnumChannelFieldUpdateOperationsInput | $Enums.Channel | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPolicyActionFieldUpdateOperationsInput | $Enums.PolicyAction
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    channel?: NullableEnumChannelFieldUpdateOperationsInput | $Enums.Channel | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPolicyActionFieldUpdateOperationsInput | $Enums.PolicyAction
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPolicyCreateManyInput = {
    id?: string
    notificationType?: $Enums.NotificationType | null
    channel?: $Enums.Channel | null
    region?: string | null
    action?: $Enums.PolicyAction
    reason: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    channel?: NullableEnumChannelFieldUpdateOperationsInput | $Enums.Channel | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPolicyActionFieldUpdateOperationsInput | $Enums.PolicyAction
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationType?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    channel?: NullableEnumChannelFieldUpdateOperationsInput | $Enums.Channel | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPolicyActionFieldUpdateOperationsInput | $Enums.PolicyAction
    reason?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelFilter<$PrismaModel> | $Enums.Channel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DefaultPreferenceNotificationTypeChannelCompoundUniqueInput = {
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
  }

  export type DefaultPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DefaultPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DefaultPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelWithAggregatesFilter<$PrismaModel> | $Enums.Channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelFilter<$PrismaModel>
    _max?: NestedEnumChannelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserPreferenceUserIdNotificationTypeChannelCompoundUniqueInput = {
    userId: string
    notificationType: $Enums.NotificationType
    channel: $Enums.Channel
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserQuietHoursCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuietHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuietHoursMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableFilter<$PrismaModel> | $Enums.NotificationType | null
  }

  export type EnumChannelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChannelNullableFilter<$PrismaModel> | $Enums.Channel | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPolicyActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyAction | EnumPolicyActionFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyActionFilter<$PrismaModel> | $Enums.PolicyAction
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GlobalPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    region?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    region?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    notificationType?: SortOrder
    channel?: SortOrder
    region?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
  }

  export type EnumChannelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChannelNullableWithAggregatesFilter<$PrismaModel> | $Enums.Channel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChannelNullableFilter<$PrismaModel>
    _max?: NestedEnumChannelNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPolicyActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyAction | EnumPolicyActionFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyActionWithAggregatesFilter<$PrismaModel> | $Enums.PolicyAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPolicyActionFilter<$PrismaModel>
    _max?: NestedEnumPolicyActionFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumChannelFieldUpdateOperationsInput = {
    set?: $Enums.Channel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType | null
  }

  export type NullableEnumChannelFieldUpdateOperationsInput = {
    set?: $Enums.Channel | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPolicyActionFieldUpdateOperationsInput = {
    set?: $Enums.PolicyAction
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelFilter<$PrismaModel> | $Enums.Channel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelWithAggregatesFilter<$PrismaModel> | $Enums.Channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelFilter<$PrismaModel>
    _max?: NestedEnumChannelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableFilter<$PrismaModel> | $Enums.NotificationType | null
  }

  export type NestedEnumChannelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChannelNullableFilter<$PrismaModel> | $Enums.Channel | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPolicyActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyAction | EnumPolicyActionFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyActionFilter<$PrismaModel> | $Enums.PolicyAction
  }

  export type NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumChannelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Channel[] | ListEnumChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChannelNullableWithAggregatesFilter<$PrismaModel> | $Enums.Channel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChannelNullableFilter<$PrismaModel>
    _max?: NestedEnumChannelNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPolicyActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyAction | EnumPolicyActionFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyAction[] | ListEnumPolicyActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyActionWithAggregatesFilter<$PrismaModel> | $Enums.PolicyAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPolicyActionFilter<$PrismaModel>
    _max?: NestedEnumPolicyActionFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}