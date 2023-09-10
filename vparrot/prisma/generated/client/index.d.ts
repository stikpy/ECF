
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model carPosts
 * 
 */
export type carPosts = $Result.DefaultSelection<Prisma.$carPostsPayload>
/**
 * Model carDetails
 * 
 */
export type carDetails = $Result.DefaultSelection<Prisma.$carDetailsPayload>
/**
 * Model testimonials
 * 
 */
export type testimonials = $Result.DefaultSelection<Prisma.$testimonialsPayload>
/**
 * Model GearBox
 * 
 */
export type GearBox = $Result.DefaultSelection<Prisma.$GearBoxPayload>
/**
 * Model CritAir
 * 
 */
export type CritAir = $Result.DefaultSelection<Prisma.$CritAirPayload>
/**
 * Model EmissionCo2
 * 
 */
export type EmissionCo2 = $Result.DefaultSelection<Prisma.$EmissionCo2Payload>
/**
 * Model Energy
 * 
 */
export type Energy = $Result.DefaultSelection<Prisma.$EnergyPayload>
/**
 * Model EuroStandard
 * 
 */
export type EuroStandard = $Result.DefaultSelection<Prisma.$EuroStandardPayload>
/**
 * Model ExteriorColor
 * 
 */
export type ExteriorColor = $Result.DefaultSelection<Prisma.$ExteriorColorPayload>
/**
 * Model Origin
 * 
 */
export type Origin = $Result.DefaultSelection<Prisma.$OriginPayload>
/**
 * Model Upholstery
 * 
 */
export type Upholstery = $Result.DefaultSelection<Prisma.$UpholsteryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.carPosts`: Exposes CRUD operations for the **carPosts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarPosts
    * const carPosts = await prisma.carPosts.findMany()
    * ```
    */
  get carPosts(): Prisma.carPostsDelegate<ExtArgs>;

  /**
   * `prisma.carDetails`: Exposes CRUD operations for the **carDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarDetails
    * const carDetails = await prisma.carDetails.findMany()
    * ```
    */
  get carDetails(): Prisma.carDetailsDelegate<ExtArgs>;

  /**
   * `prisma.testimonials`: Exposes CRUD operations for the **testimonials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonials.findMany()
    * ```
    */
  get testimonials(): Prisma.testimonialsDelegate<ExtArgs>;

  /**
   * `prisma.gearBox`: Exposes CRUD operations for the **GearBox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GearBoxes
    * const gearBoxes = await prisma.gearBox.findMany()
    * ```
    */
  get gearBox(): Prisma.GearBoxDelegate<ExtArgs>;

  /**
   * `prisma.critAir`: Exposes CRUD operations for the **CritAir** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CritAirs
    * const critAirs = await prisma.critAir.findMany()
    * ```
    */
  get critAir(): Prisma.CritAirDelegate<ExtArgs>;

  /**
   * `prisma.emissionCo2`: Exposes CRUD operations for the **EmissionCo2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmissionCo2s
    * const emissionCo2s = await prisma.emissionCo2.findMany()
    * ```
    */
  get emissionCo2(): Prisma.EmissionCo2Delegate<ExtArgs>;

  /**
   * `prisma.energy`: Exposes CRUD operations for the **Energy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Energy
    * const energy = await prisma.energy.findMany()
    * ```
    */
  get energy(): Prisma.EnergyDelegate<ExtArgs>;

  /**
   * `prisma.euroStandard`: Exposes CRUD operations for the **EuroStandard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EuroStandards
    * const euroStandards = await prisma.euroStandard.findMany()
    * ```
    */
  get euroStandard(): Prisma.EuroStandardDelegate<ExtArgs>;

  /**
   * `prisma.exteriorColor`: Exposes CRUD operations for the **ExteriorColor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExteriorColors
    * const exteriorColors = await prisma.exteriorColor.findMany()
    * ```
    */
  get exteriorColor(): Prisma.ExteriorColorDelegate<ExtArgs>;

  /**
   * `prisma.origin`: Exposes CRUD operations for the **Origin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Origins
    * const origins = await prisma.origin.findMany()
    * ```
    */
  get origin(): Prisma.OriginDelegate<ExtArgs>;

  /**
   * `prisma.upholstery`: Exposes CRUD operations for the **Upholstery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upholsteries
    * const upholsteries = await prisma.upholstery.findMany()
    * ```
    */
  get upholstery(): Prisma.UpholsteryDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Users: 'Users',
    Account: 'Account',
    Session: 'Session',
    carPosts: 'carPosts',
    carDetails: 'carDetails',
    testimonials: 'testimonials',
    GearBox: 'GearBox',
    CritAir: 'CritAir',
    EmissionCo2: 'EmissionCo2',
    Energy: 'Energy',
    EuroStandard: 'EuroStandard',
    ExteriorColor: 'ExteriorColor',
    Origin: 'Origin',
    Upholstery: 'Upholstery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'account' | 'session' | 'carPosts' | 'carDetails' | 'testimonials' | 'gearBox' | 'critAir' | 'emissionCo2' | 'energy' | 'euroStandard' | 'exteriorColor' | 'origin' | 'upholstery'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      carPosts: {
        payload: Prisma.$carPostsPayload<ExtArgs>
        fields: Prisma.carPostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carPostsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carPostsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>
          }
          findFirst: {
            args: Prisma.carPostsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carPostsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>
          }
          findMany: {
            args: Prisma.carPostsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>[]
          }
          create: {
            args: Prisma.carPostsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>
          }
          createMany: {
            args: Prisma.carPostsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.carPostsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>
          }
          update: {
            args: Prisma.carPostsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>
          }
          deleteMany: {
            args: Prisma.carPostsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.carPostsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.carPostsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carPostsPayload>
          }
          aggregate: {
            args: Prisma.CarPostsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarPosts>
          }
          groupBy: {
            args: Prisma.carPostsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarPostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.carPostsCountArgs<ExtArgs>,
            result: $Utils.Optional<CarPostsCountAggregateOutputType> | number
          }
        }
      }
      carDetails: {
        payload: Prisma.$carDetailsPayload<ExtArgs>
        fields: Prisma.carDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>
          }
          findFirst: {
            args: Prisma.carDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>
          }
          findMany: {
            args: Prisma.carDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>[]
          }
          create: {
            args: Prisma.carDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>
          }
          createMany: {
            args: Prisma.carDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.carDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>
          }
          update: {
            args: Prisma.carDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>
          }
          deleteMany: {
            args: Prisma.carDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.carDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.carDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carDetailsPayload>
          }
          aggregate: {
            args: Prisma.CarDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarDetails>
          }
          groupBy: {
            args: Prisma.carDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.carDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<CarDetailsCountAggregateOutputType> | number
          }
        }
      }
      testimonials: {
        payload: Prisma.$testimonialsPayload<ExtArgs>
        fields: Prisma.testimonialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testimonialsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testimonialsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          findFirst: {
            args: Prisma.testimonialsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testimonialsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          findMany: {
            args: Prisma.testimonialsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>[]
          }
          create: {
            args: Prisma.testimonialsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          createMany: {
            args: Prisma.testimonialsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.testimonialsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          update: {
            args: Prisma.testimonialsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          deleteMany: {
            args: Prisma.testimonialsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.testimonialsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.testimonialsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          aggregate: {
            args: Prisma.TestimonialsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTestimonials>
          }
          groupBy: {
            args: Prisma.testimonialsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestimonialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.testimonialsCountArgs<ExtArgs>,
            result: $Utils.Optional<TestimonialsCountAggregateOutputType> | number
          }
        }
      }
      GearBox: {
        payload: Prisma.$GearBoxPayload<ExtArgs>
        fields: Prisma.GearBoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GearBoxFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GearBoxFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>
          }
          findFirst: {
            args: Prisma.GearBoxFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GearBoxFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>
          }
          findMany: {
            args: Prisma.GearBoxFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>[]
          }
          create: {
            args: Prisma.GearBoxCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>
          }
          createMany: {
            args: Prisma.GearBoxCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GearBoxDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>
          }
          update: {
            args: Prisma.GearBoxUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>
          }
          deleteMany: {
            args: Prisma.GearBoxDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GearBoxUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GearBoxUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GearBoxPayload>
          }
          aggregate: {
            args: Prisma.GearBoxAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGearBox>
          }
          groupBy: {
            args: Prisma.GearBoxGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GearBoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.GearBoxCountArgs<ExtArgs>,
            result: $Utils.Optional<GearBoxCountAggregateOutputType> | number
          }
        }
      }
      CritAir: {
        payload: Prisma.$CritAirPayload<ExtArgs>
        fields: Prisma.CritAirFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CritAirFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CritAirFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>
          }
          findFirst: {
            args: Prisma.CritAirFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CritAirFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>
          }
          findMany: {
            args: Prisma.CritAirFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>[]
          }
          create: {
            args: Prisma.CritAirCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>
          }
          createMany: {
            args: Prisma.CritAirCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CritAirDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>
          }
          update: {
            args: Prisma.CritAirUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>
          }
          deleteMany: {
            args: Prisma.CritAirDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CritAirUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CritAirUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CritAirPayload>
          }
          aggregate: {
            args: Prisma.CritAirAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCritAir>
          }
          groupBy: {
            args: Prisma.CritAirGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CritAirGroupByOutputType>[]
          }
          count: {
            args: Prisma.CritAirCountArgs<ExtArgs>,
            result: $Utils.Optional<CritAirCountAggregateOutputType> | number
          }
        }
      }
      EmissionCo2: {
        payload: Prisma.$EmissionCo2Payload<ExtArgs>
        fields: Prisma.EmissionCo2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmissionCo2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmissionCo2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>
          }
          findFirst: {
            args: Prisma.EmissionCo2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmissionCo2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>
          }
          findMany: {
            args: Prisma.EmissionCo2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>[]
          }
          create: {
            args: Prisma.EmissionCo2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>
          }
          createMany: {
            args: Prisma.EmissionCo2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmissionCo2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>
          }
          update: {
            args: Prisma.EmissionCo2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>
          }
          deleteMany: {
            args: Prisma.EmissionCo2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmissionCo2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmissionCo2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmissionCo2Payload>
          }
          aggregate: {
            args: Prisma.EmissionCo2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmissionCo2>
          }
          groupBy: {
            args: Prisma.EmissionCo2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmissionCo2GroupByOutputType>[]
          }
          count: {
            args: Prisma.EmissionCo2CountArgs<ExtArgs>,
            result: $Utils.Optional<EmissionCo2CountAggregateOutputType> | number
          }
        }
      }
      Energy: {
        payload: Prisma.$EnergyPayload<ExtArgs>
        fields: Prisma.EnergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnergyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnergyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          findFirst: {
            args: Prisma.EnergyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnergyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          findMany: {
            args: Prisma.EnergyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>[]
          }
          create: {
            args: Prisma.EnergyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          createMany: {
            args: Prisma.EnergyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EnergyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          update: {
            args: Prisma.EnergyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          deleteMany: {
            args: Prisma.EnergyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EnergyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EnergyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnergyPayload>
          }
          aggregate: {
            args: Prisma.EnergyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnergy>
          }
          groupBy: {
            args: Prisma.EnergyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnergyCountArgs<ExtArgs>,
            result: $Utils.Optional<EnergyCountAggregateOutputType> | number
          }
        }
      }
      EuroStandard: {
        payload: Prisma.$EuroStandardPayload<ExtArgs>
        fields: Prisma.EuroStandardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EuroStandardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EuroStandardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>
          }
          findFirst: {
            args: Prisma.EuroStandardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EuroStandardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>
          }
          findMany: {
            args: Prisma.EuroStandardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>[]
          }
          create: {
            args: Prisma.EuroStandardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>
          }
          createMany: {
            args: Prisma.EuroStandardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EuroStandardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>
          }
          update: {
            args: Prisma.EuroStandardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>
          }
          deleteMany: {
            args: Prisma.EuroStandardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EuroStandardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EuroStandardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EuroStandardPayload>
          }
          aggregate: {
            args: Prisma.EuroStandardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEuroStandard>
          }
          groupBy: {
            args: Prisma.EuroStandardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EuroStandardGroupByOutputType>[]
          }
          count: {
            args: Prisma.EuroStandardCountArgs<ExtArgs>,
            result: $Utils.Optional<EuroStandardCountAggregateOutputType> | number
          }
        }
      }
      ExteriorColor: {
        payload: Prisma.$ExteriorColorPayload<ExtArgs>
        fields: Prisma.ExteriorColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExteriorColorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExteriorColorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>
          }
          findFirst: {
            args: Prisma.ExteriorColorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExteriorColorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>
          }
          findMany: {
            args: Prisma.ExteriorColorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>[]
          }
          create: {
            args: Prisma.ExteriorColorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>
          }
          createMany: {
            args: Prisma.ExteriorColorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExteriorColorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>
          }
          update: {
            args: Prisma.ExteriorColorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>
          }
          deleteMany: {
            args: Prisma.ExteriorColorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExteriorColorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExteriorColorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExteriorColorPayload>
          }
          aggregate: {
            args: Prisma.ExteriorColorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExteriorColor>
          }
          groupBy: {
            args: Prisma.ExteriorColorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExteriorColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExteriorColorCountArgs<ExtArgs>,
            result: $Utils.Optional<ExteriorColorCountAggregateOutputType> | number
          }
        }
      }
      Origin: {
        payload: Prisma.$OriginPayload<ExtArgs>
        fields: Prisma.OriginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          findFirst: {
            args: Prisma.OriginFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          findMany: {
            args: Prisma.OriginFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          create: {
            args: Prisma.OriginCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          createMany: {
            args: Prisma.OriginCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OriginDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          update: {
            args: Prisma.OriginUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          deleteMany: {
            args: Prisma.OriginDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OriginUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OriginUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          aggregate: {
            args: Prisma.OriginAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrigin>
          }
          groupBy: {
            args: Prisma.OriginGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OriginGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginCountArgs<ExtArgs>,
            result: $Utils.Optional<OriginCountAggregateOutputType> | number
          }
        }
      }
      Upholstery: {
        payload: Prisma.$UpholsteryPayload<ExtArgs>
        fields: Prisma.UpholsteryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpholsteryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpholsteryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>
          }
          findFirst: {
            args: Prisma.UpholsteryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpholsteryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>
          }
          findMany: {
            args: Prisma.UpholsteryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>[]
          }
          create: {
            args: Prisma.UpholsteryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>
          }
          createMany: {
            args: Prisma.UpholsteryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UpholsteryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>
          }
          update: {
            args: Prisma.UpholsteryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>
          }
          deleteMany: {
            args: Prisma.UpholsteryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UpholsteryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UpholsteryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UpholsteryPayload>
          }
          aggregate: {
            args: Prisma.UpholsteryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUpholstery>
          }
          groupBy: {
            args: Prisma.UpholsteryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UpholsteryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpholsteryCountArgs<ExtArgs>,
            result: $Utils.Optional<UpholsteryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    accounts: number
    carPosts: number
    sessions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
    carPosts?: boolean | UsersCountOutputTypeCountCarPostsArgs
    sessions?: boolean | UsersCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCarPostsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carPostsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type CarDetailsCountOutputType
   */

  export type CarDetailsCountOutputType = {
    carPosts: number
  }

  export type CarDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carPosts?: boolean | CarDetailsCountOutputTypeCountCarPostsArgs
  }

  // Custom InputTypes

  /**
   * CarDetailsCountOutputType without action
   */
  export type CarDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarDetailsCountOutputType
     */
    select?: CarDetailsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CarDetailsCountOutputType without action
   */
  export type CarDetailsCountOutputTypeCountCarPostsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carPostsWhereInput
  }



  /**
   * Count Type GearBoxCountOutputType
   */

  export type GearBoxCountOutputType = {
    carDetailss: number
  }

  export type GearBoxCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | GearBoxCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * GearBoxCountOutputType without action
   */
  export type GearBoxCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBoxCountOutputType
     */
    select?: GearBoxCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GearBoxCountOutputType without action
   */
  export type GearBoxCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type CritAirCountOutputType
   */

  export type CritAirCountOutputType = {
    carDetailss: number
  }

  export type CritAirCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | CritAirCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * CritAirCountOutputType without action
   */
  export type CritAirCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAirCountOutputType
     */
    select?: CritAirCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CritAirCountOutputType without action
   */
  export type CritAirCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type EmissionCo2CountOutputType
   */

  export type EmissionCo2CountOutputType = {
    carDetailss: number
  }

  export type EmissionCo2CountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | EmissionCo2CountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * EmissionCo2CountOutputType without action
   */
  export type EmissionCo2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2CountOutputType
     */
    select?: EmissionCo2CountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EmissionCo2CountOutputType without action
   */
  export type EmissionCo2CountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type EnergyCountOutputType
   */

  export type EnergyCountOutputType = {
    carDetailss: number
  }

  export type EnergyCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | EnergyCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * EnergyCountOutputType without action
   */
  export type EnergyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyCountOutputType
     */
    select?: EnergyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EnergyCountOutputType without action
   */
  export type EnergyCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type EuroStandardCountOutputType
   */

  export type EuroStandardCountOutputType = {
    carDetailss: number
  }

  export type EuroStandardCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | EuroStandardCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * EuroStandardCountOutputType without action
   */
  export type EuroStandardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandardCountOutputType
     */
    select?: EuroStandardCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EuroStandardCountOutputType without action
   */
  export type EuroStandardCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type ExteriorColorCountOutputType
   */

  export type ExteriorColorCountOutputType = {
    carDetailss: number
  }

  export type ExteriorColorCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | ExteriorColorCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * ExteriorColorCountOutputType without action
   */
  export type ExteriorColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColorCountOutputType
     */
    select?: ExteriorColorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExteriorColorCountOutputType without action
   */
  export type ExteriorColorCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type OriginCountOutputType
   */

  export type OriginCountOutputType = {
    carDetailss: number
  }

  export type OriginCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | OriginCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * OriginCountOutputType without action
   */
  export type OriginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginCountOutputType
     */
    select?: OriginCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OriginCountOutputType without action
   */
  export type OriginCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Count Type UpholsteryCountOutputType
   */

  export type UpholsteryCountOutputType = {
    carDetailss: number
  }

  export type UpholsteryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | UpholsteryCountOutputTypeCountCarDetailssArgs
  }

  // Custom InputTypes

  /**
   * UpholsteryCountOutputType without action
   */
  export type UpholsteryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpholsteryCountOutputType
     */
    select?: UpholsteryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UpholsteryCountOutputType without action
   */
  export type UpholsteryCountOutputTypeCountCarDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstname: number
    lastname: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    carPosts?: boolean | Users$carPostsArgs<ExtArgs>
    sessions?: boolean | Users$sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    carPosts?: boolean | Users$carPostsArgs<ExtArgs>
    sessions?: boolean | Users$sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      carPosts: Prisma.$carPostsPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      email: string | null
      password: string | null
      firstname: string | null
      lastname: string | null
      role: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends Users$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Users$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    carPosts<T extends Users$carPostsArgs<ExtArgs> = {}>(args?: Subset<T, Users$carPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends Users$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly firstname: FieldRef<"Users", 'String'>
    readonly lastname: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data?: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.accounts
   */
  export type Users$accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Users.carPosts
   */
  export type Users$carPostsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    where?: carPostsWhereInput
    orderBy?: carPostsOrderByWithRelationInput | carPostsOrderByWithRelationInput[]
    cursor?: carPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarPostsScalarFieldEnum | CarPostsScalarFieldEnum[]
  }


  /**
   * Users.sessions
   */
  export type Users$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    providerType: number
    providerId: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: number | null
      providerType: string | null
      providerId: string | null
      providerAccountId: string | null
      refreshToken: string | null
      accessToken: string | null
      accessTokenExpires: Date | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Account$userArgs<ExtArgs> = {}>(args?: Subset<T, Account$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly providerType: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpires: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data?: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account.user
   */
  export type Account$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    accessToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: number | null
      expires: Date | null
      sessionToken: string | null
      accessToken: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Session$userArgs<ExtArgs> = {}>(args?: Subset<T, Session$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data?: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session.user
   */
  export type Session$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model carPosts
   */

  export type AggregateCarPosts = {
    _count: CarPostsCountAggregateOutputType | null
    _avg: CarPostsAvgAggregateOutputType | null
    _sum: CarPostsSumAggregateOutputType | null
    _min: CarPostsMinAggregateOutputType | null
    _max: CarPostsMaxAggregateOutputType | null
  }

  export type CarPostsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    km: number | null
    year: number | null
    userId: number | null
    carDetailsId: number | null
  }

  export type CarPostsSumAggregateOutputType = {
    id: number | null
    price: number | null
    km: number | null
    year: number | null
    userId: number | null
    carDetailsId: number | null
  }

  export type CarPostsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    km: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    userId: number | null
    carDetailsId: number | null
  }

  export type CarPostsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    km: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    userId: number | null
    carDetailsId: number | null
  }

  export type CarPostsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    imageUrl: number
    km: number
    year: number
    createdAt: number
    updatedAt: number
    status: number
    userId: number
    carDetailsId: number
    _all: number
  }


  export type CarPostsAvgAggregateInputType = {
    id?: true
    price?: true
    km?: true
    year?: true
    userId?: true
    carDetailsId?: true
  }

  export type CarPostsSumAggregateInputType = {
    id?: true
    price?: true
    km?: true
    year?: true
    userId?: true
    carDetailsId?: true
  }

  export type CarPostsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    imageUrl?: true
    km?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    userId?: true
    carDetailsId?: true
  }

  export type CarPostsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    imageUrl?: true
    km?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    userId?: true
    carDetailsId?: true
  }

  export type CarPostsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    imageUrl?: true
    km?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    userId?: true
    carDetailsId?: true
    _all?: true
  }

  export type CarPostsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which carPosts to aggregate.
     */
    where?: carPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carPosts to fetch.
     */
    orderBy?: carPostsOrderByWithRelationInput | carPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carPosts
    **/
    _count?: true | CarPostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarPostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarPostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarPostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarPostsMaxAggregateInputType
  }

  export type GetCarPostsAggregateType<T extends CarPostsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarPosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarPosts[P]>
      : GetScalarType<T[P], AggregateCarPosts[P]>
  }




  export type carPostsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carPostsWhereInput
    orderBy?: carPostsOrderByWithAggregationInput | carPostsOrderByWithAggregationInput[]
    by: CarPostsScalarFieldEnum[] | CarPostsScalarFieldEnum
    having?: carPostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarPostsCountAggregateInputType | true
    _avg?: CarPostsAvgAggregateInputType
    _sum?: CarPostsSumAggregateInputType
    _min?: CarPostsMinAggregateInputType
    _max?: CarPostsMaxAggregateInputType
  }

  export type CarPostsGroupByOutputType = {
    id: number
    title: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    km: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    userId: number | null
    carDetailsId: number | null
    _count: CarPostsCountAggregateOutputType | null
    _avg: CarPostsAvgAggregateOutputType | null
    _sum: CarPostsSumAggregateOutputType | null
    _min: CarPostsMinAggregateOutputType | null
    _max: CarPostsMaxAggregateOutputType | null
  }

  type GetCarPostsGroupByPayload<T extends carPostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarPostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarPostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarPostsGroupByOutputType[P]>
            : GetScalarType<T[P], CarPostsGroupByOutputType[P]>
        }
      >
    >


  export type carPostsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    km?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    userId?: boolean
    carDetailsId?: boolean
    user?: boolean | carPosts$userArgs<ExtArgs>
    carDetails?: boolean | carPosts$carDetailsArgs<ExtArgs>
  }, ExtArgs["result"]["carPosts"]>

  export type carPostsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    km?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    userId?: boolean
    carDetailsId?: boolean
  }

  export type carPostsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | carPosts$userArgs<ExtArgs>
    carDetails?: boolean | carPosts$carDetailsArgs<ExtArgs>
  }


  export type $carPostsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "carPosts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      carDetails: Prisma.$carDetailsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string | null
      description: string | null
      price: number | null
      imageUrl: string | null
      km: number | null
      year: number | null
      createdAt: Date | null
      updatedAt: Date | null
      status: string | null
      userId: number | null
      carDetailsId: number | null
    }, ExtArgs["result"]["carPosts"]>
    composites: {}
  }


  type carPostsGetPayload<S extends boolean | null | undefined | carPostsDefaultArgs> = $Result.GetResult<Prisma.$carPostsPayload, S>

  type carPostsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<carPostsFindManyArgs, 'select' | 'include'> & {
      select?: CarPostsCountAggregateInputType | true
    }

  export interface carPostsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carPosts'], meta: { name: 'carPosts' } }
    /**
     * Find zero or one CarPosts that matches the filter.
     * @param {carPostsFindUniqueArgs} args - Arguments to find a CarPosts
     * @example
     * // Get one CarPosts
     * const carPosts = await prisma.carPosts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends carPostsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, carPostsFindUniqueArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarPosts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {carPostsFindUniqueOrThrowArgs} args - Arguments to find a CarPosts
     * @example
     * // Get one CarPosts
     * const carPosts = await prisma.carPosts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends carPostsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carPostsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carPostsFindFirstArgs} args - Arguments to find a CarPosts
     * @example
     * // Get one CarPosts
     * const carPosts = await prisma.carPosts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends carPostsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, carPostsFindFirstArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarPosts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carPostsFindFirstOrThrowArgs} args - Arguments to find a CarPosts
     * @example
     * // Get one CarPosts
     * const carPosts = await prisma.carPosts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends carPostsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carPostsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carPostsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarPosts
     * const carPosts = await prisma.carPosts.findMany()
     * 
     * // Get first 10 CarPosts
     * const carPosts = await prisma.carPosts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carPostsWithIdOnly = await prisma.carPosts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends carPostsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carPostsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarPosts.
     * @param {carPostsCreateArgs} args - Arguments to create a CarPosts.
     * @example
     * // Create one CarPosts
     * const CarPosts = await prisma.carPosts.create({
     *   data: {
     *     // ... data to create a CarPosts
     *   }
     * })
     * 
    **/
    create<T extends carPostsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, carPostsCreateArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarPosts.
     *     @param {carPostsCreateManyArgs} args - Arguments to create many CarPosts.
     *     @example
     *     // Create many CarPosts
     *     const carPosts = await prisma.carPosts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends carPostsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carPostsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarPosts.
     * @param {carPostsDeleteArgs} args - Arguments to delete one CarPosts.
     * @example
     * // Delete one CarPosts
     * const CarPosts = await prisma.carPosts.delete({
     *   where: {
     *     // ... filter to delete one CarPosts
     *   }
     * })
     * 
    **/
    delete<T extends carPostsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, carPostsDeleteArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarPosts.
     * @param {carPostsUpdateArgs} args - Arguments to update one CarPosts.
     * @example
     * // Update one CarPosts
     * const carPosts = await prisma.carPosts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends carPostsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, carPostsUpdateArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarPosts.
     * @param {carPostsDeleteManyArgs} args - Arguments to filter CarPosts to delete.
     * @example
     * // Delete a few CarPosts
     * const { count } = await prisma.carPosts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends carPostsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carPostsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carPostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarPosts
     * const carPosts = await prisma.carPosts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends carPostsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, carPostsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarPosts.
     * @param {carPostsUpsertArgs} args - Arguments to update or create a CarPosts.
     * @example
     * // Update or create a CarPosts
     * const carPosts = await prisma.carPosts.upsert({
     *   create: {
     *     // ... data to create a CarPosts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarPosts we want to update
     *   }
     * })
    **/
    upsert<T extends carPostsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, carPostsUpsertArgs<ExtArgs>>
    ): Prisma__carPostsClient<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carPostsCountArgs} args - Arguments to filter CarPosts to count.
     * @example
     * // Count the number of CarPosts
     * const count = await prisma.carPosts.count({
     *   where: {
     *     // ... the filter for the CarPosts we want to count
     *   }
     * })
    **/
    count<T extends carPostsCountArgs>(
      args?: Subset<T, carPostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarPostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarPostsAggregateArgs>(args: Subset<T, CarPostsAggregateArgs>): Prisma.PrismaPromise<GetCarPostsAggregateType<T>>

    /**
     * Group by CarPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carPostsGroupByArgs} args - Group by arguments.
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
      T extends carPostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carPostsGroupByArgs['orderBy'] }
        : { orderBy?: carPostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carPostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carPosts model
   */
  readonly fields: carPostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carPosts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carPostsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends carPosts$userArgs<ExtArgs> = {}>(args?: Subset<T, carPosts$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    carDetails<T extends carPosts$carDetailsArgs<ExtArgs> = {}>(args?: Subset<T, carPosts$carDetailsArgs<ExtArgs>>): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the carPosts model
   */ 
  interface carPostsFieldRefs {
    readonly id: FieldRef<"carPosts", 'Int'>
    readonly title: FieldRef<"carPosts", 'String'>
    readonly description: FieldRef<"carPosts", 'String'>
    readonly price: FieldRef<"carPosts", 'Int'>
    readonly imageUrl: FieldRef<"carPosts", 'String'>
    readonly km: FieldRef<"carPosts", 'Int'>
    readonly year: FieldRef<"carPosts", 'Int'>
    readonly createdAt: FieldRef<"carPosts", 'DateTime'>
    readonly updatedAt: FieldRef<"carPosts", 'DateTime'>
    readonly status: FieldRef<"carPosts", 'String'>
    readonly userId: FieldRef<"carPosts", 'Int'>
    readonly carDetailsId: FieldRef<"carPosts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * carPosts findUnique
   */
  export type carPostsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * Filter, which carPosts to fetch.
     */
    where: carPostsWhereUniqueInput
  }


  /**
   * carPosts findUniqueOrThrow
   */
  export type carPostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * Filter, which carPosts to fetch.
     */
    where: carPostsWhereUniqueInput
  }


  /**
   * carPosts findFirst
   */
  export type carPostsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * Filter, which carPosts to fetch.
     */
    where?: carPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carPosts to fetch.
     */
    orderBy?: carPostsOrderByWithRelationInput | carPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carPosts.
     */
    cursor?: carPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carPosts.
     */
    distinct?: CarPostsScalarFieldEnum | CarPostsScalarFieldEnum[]
  }


  /**
   * carPosts findFirstOrThrow
   */
  export type carPostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * Filter, which carPosts to fetch.
     */
    where?: carPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carPosts to fetch.
     */
    orderBy?: carPostsOrderByWithRelationInput | carPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carPosts.
     */
    cursor?: carPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carPosts.
     */
    distinct?: CarPostsScalarFieldEnum | CarPostsScalarFieldEnum[]
  }


  /**
   * carPosts findMany
   */
  export type carPostsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * Filter, which carPosts to fetch.
     */
    where?: carPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carPosts to fetch.
     */
    orderBy?: carPostsOrderByWithRelationInput | carPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carPosts.
     */
    cursor?: carPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carPosts.
     */
    skip?: number
    distinct?: CarPostsScalarFieldEnum | CarPostsScalarFieldEnum[]
  }


  /**
   * carPosts create
   */
  export type carPostsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * The data needed to create a carPosts.
     */
    data?: XOR<carPostsCreateInput, carPostsUncheckedCreateInput>
  }


  /**
   * carPosts createMany
   */
  export type carPostsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carPosts.
     */
    data: carPostsCreateManyInput | carPostsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * carPosts update
   */
  export type carPostsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * The data needed to update a carPosts.
     */
    data: XOR<carPostsUpdateInput, carPostsUncheckedUpdateInput>
    /**
     * Choose, which carPosts to update.
     */
    where: carPostsWhereUniqueInput
  }


  /**
   * carPosts updateMany
   */
  export type carPostsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carPosts.
     */
    data: XOR<carPostsUpdateManyMutationInput, carPostsUncheckedUpdateManyInput>
    /**
     * Filter which carPosts to update
     */
    where?: carPostsWhereInput
  }


  /**
   * carPosts upsert
   */
  export type carPostsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * The filter to search for the carPosts to update in case it exists.
     */
    where: carPostsWhereUniqueInput
    /**
     * In case the carPosts found by the `where` argument doesn't exist, create a new carPosts with this data.
     */
    create: XOR<carPostsCreateInput, carPostsUncheckedCreateInput>
    /**
     * In case the carPosts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carPostsUpdateInput, carPostsUncheckedUpdateInput>
  }


  /**
   * carPosts delete
   */
  export type carPostsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    /**
     * Filter which carPosts to delete.
     */
    where: carPostsWhereUniqueInput
  }


  /**
   * carPosts deleteMany
   */
  export type carPostsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which carPosts to delete
     */
    where?: carPostsWhereInput
  }


  /**
   * carPosts.user
   */
  export type carPosts$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }


  /**
   * carPosts.carDetails
   */
  export type carPosts$carDetailsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
  }


  /**
   * carPosts without action
   */
  export type carPostsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
  }



  /**
   * Model carDetails
   */

  export type AggregateCarDetails = {
    _count: CarDetailsCountAggregateOutputType | null
    _avg: CarDetailsAvgAggregateOutputType | null
    _sum: CarDetailsSumAggregateOutputType | null
    _min: CarDetailsMinAggregateOutputType | null
    _max: CarDetailsMaxAggregateOutputType | null
  }

  export type CarDetailsAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    provenanceId: number | null
    energieId: number | null
    boiteDeVitesseId: number | null
    couleurExterieurId: number | null
    sellerieId: number | null
    nbPortes: number | null
    nbPlaces: number | null
    volumeCoffre: number | null
    puissanceFiscale: number | null
    puissanceDin: number | null
    normeEuroId: number | null
    critAirId: number | null
    consommationMixte: number | null
    emissionCo2Id: number | null
  }

  export type CarDetailsSumAggregateOutputType = {
    id: number | null
    carId: number | null
    provenanceId: number | null
    energieId: number | null
    boiteDeVitesseId: number | null
    couleurExterieurId: number | null
    sellerieId: number | null
    nbPortes: number | null
    nbPlaces: number | null
    volumeCoffre: number | null
    puissanceFiscale: number | null
    puissanceDin: number | null
    normeEuroId: number | null
    critAirId: number | null
    consommationMixte: number | null
    emissionCo2Id: number | null
  }

  export type CarDetailsMinAggregateOutputType = {
    id: number | null
    carId: number | null
    provenanceId: number | null
    dateMiseEnCirculation: Date | null
    controleTechnique: boolean | null
    premiereMain: boolean | null
    energieId: number | null
    boiteDeVitesseId: number | null
    couleurExterieurId: number | null
    sellerieId: number | null
    nbPortes: number | null
    nbPlaces: number | null
    volumeCoffre: number | null
    puissanceFiscale: number | null
    puissanceDin: number | null
    normeEuroId: number | null
    critAirId: number | null
    consommationMixte: number | null
    emissionCo2Id: number | null
  }

  export type CarDetailsMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    provenanceId: number | null
    dateMiseEnCirculation: Date | null
    controleTechnique: boolean | null
    premiereMain: boolean | null
    energieId: number | null
    boiteDeVitesseId: number | null
    couleurExterieurId: number | null
    sellerieId: number | null
    nbPortes: number | null
    nbPlaces: number | null
    volumeCoffre: number | null
    puissanceFiscale: number | null
    puissanceDin: number | null
    normeEuroId: number | null
    critAirId: number | null
    consommationMixte: number | null
    emissionCo2Id: number | null
  }

  export type CarDetailsCountAggregateOutputType = {
    id: number
    carId: number
    provenanceId: number
    dateMiseEnCirculation: number
    controleTechnique: number
    premiereMain: number
    energieId: number
    boiteDeVitesseId: number
    couleurExterieurId: number
    sellerieId: number
    nbPortes: number
    nbPlaces: number
    volumeCoffre: number
    puissanceFiscale: number
    puissanceDin: number
    normeEuroId: number
    critAirId: number
    consommationMixte: number
    emissionCo2Id: number
    _all: number
  }


  export type CarDetailsAvgAggregateInputType = {
    id?: true
    carId?: true
    provenanceId?: true
    energieId?: true
    boiteDeVitesseId?: true
    couleurExterieurId?: true
    sellerieId?: true
    nbPortes?: true
    nbPlaces?: true
    volumeCoffre?: true
    puissanceFiscale?: true
    puissanceDin?: true
    normeEuroId?: true
    critAirId?: true
    consommationMixte?: true
    emissionCo2Id?: true
  }

  export type CarDetailsSumAggregateInputType = {
    id?: true
    carId?: true
    provenanceId?: true
    energieId?: true
    boiteDeVitesseId?: true
    couleurExterieurId?: true
    sellerieId?: true
    nbPortes?: true
    nbPlaces?: true
    volumeCoffre?: true
    puissanceFiscale?: true
    puissanceDin?: true
    normeEuroId?: true
    critAirId?: true
    consommationMixte?: true
    emissionCo2Id?: true
  }

  export type CarDetailsMinAggregateInputType = {
    id?: true
    carId?: true
    provenanceId?: true
    dateMiseEnCirculation?: true
    controleTechnique?: true
    premiereMain?: true
    energieId?: true
    boiteDeVitesseId?: true
    couleurExterieurId?: true
    sellerieId?: true
    nbPortes?: true
    nbPlaces?: true
    volumeCoffre?: true
    puissanceFiscale?: true
    puissanceDin?: true
    normeEuroId?: true
    critAirId?: true
    consommationMixte?: true
    emissionCo2Id?: true
  }

  export type CarDetailsMaxAggregateInputType = {
    id?: true
    carId?: true
    provenanceId?: true
    dateMiseEnCirculation?: true
    controleTechnique?: true
    premiereMain?: true
    energieId?: true
    boiteDeVitesseId?: true
    couleurExterieurId?: true
    sellerieId?: true
    nbPortes?: true
    nbPlaces?: true
    volumeCoffre?: true
    puissanceFiscale?: true
    puissanceDin?: true
    normeEuroId?: true
    critAirId?: true
    consommationMixte?: true
    emissionCo2Id?: true
  }

  export type CarDetailsCountAggregateInputType = {
    id?: true
    carId?: true
    provenanceId?: true
    dateMiseEnCirculation?: true
    controleTechnique?: true
    premiereMain?: true
    energieId?: true
    boiteDeVitesseId?: true
    couleurExterieurId?: true
    sellerieId?: true
    nbPortes?: true
    nbPlaces?: true
    volumeCoffre?: true
    puissanceFiscale?: true
    puissanceDin?: true
    normeEuroId?: true
    critAirId?: true
    consommationMixte?: true
    emissionCo2Id?: true
    _all?: true
  }

  export type CarDetailsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which carDetails to aggregate.
     */
    where?: carDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carDetails to fetch.
     */
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carDetails
    **/
    _count?: true | CarDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarDetailsMaxAggregateInputType
  }

  export type GetCarDetailsAggregateType<T extends CarDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarDetails[P]>
      : GetScalarType<T[P], AggregateCarDetails[P]>
  }




  export type carDetailsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithAggregationInput | carDetailsOrderByWithAggregationInput[]
    by: CarDetailsScalarFieldEnum[] | CarDetailsScalarFieldEnum
    having?: carDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarDetailsCountAggregateInputType | true
    _avg?: CarDetailsAvgAggregateInputType
    _sum?: CarDetailsSumAggregateInputType
    _min?: CarDetailsMinAggregateInputType
    _max?: CarDetailsMaxAggregateInputType
  }

  export type CarDetailsGroupByOutputType = {
    id: number
    carId: number | null
    provenanceId: number | null
    dateMiseEnCirculation: Date | null
    controleTechnique: boolean | null
    premiereMain: boolean | null
    energieId: number | null
    boiteDeVitesseId: number | null
    couleurExterieurId: number | null
    sellerieId: number | null
    nbPortes: number | null
    nbPlaces: number | null
    volumeCoffre: number | null
    puissanceFiscale: number | null
    puissanceDin: number | null
    normeEuroId: number | null
    critAirId: number | null
    consommationMixte: number | null
    emissionCo2Id: number | null
    _count: CarDetailsCountAggregateOutputType | null
    _avg: CarDetailsAvgAggregateOutputType | null
    _sum: CarDetailsSumAggregateOutputType | null
    _min: CarDetailsMinAggregateOutputType | null
    _max: CarDetailsMaxAggregateOutputType | null
  }

  type GetCarDetailsGroupByPayload<T extends carDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], CarDetailsGroupByOutputType[P]>
        }
      >
    >


  export type carDetailsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    provenanceId?: boolean
    dateMiseEnCirculation?: boolean
    controleTechnique?: boolean
    premiereMain?: boolean
    energieId?: boolean
    boiteDeVitesseId?: boolean
    couleurExterieurId?: boolean
    sellerieId?: boolean
    nbPortes?: boolean
    nbPlaces?: boolean
    volumeCoffre?: boolean
    puissanceFiscale?: boolean
    puissanceDin?: boolean
    normeEuroId?: boolean
    critAirId?: boolean
    consommationMixte?: boolean
    emissionCo2Id?: boolean
    gearbox?: boolean | carDetails$gearboxArgs<ExtArgs>
    exteriorColor?: boolean | carDetails$exteriorColorArgs<ExtArgs>
    critAir?: boolean | carDetails$critAirArgs<ExtArgs>
    emissionCo2?: boolean | carDetails$emissionCo2Args<ExtArgs>
    energy?: boolean | carDetails$energyArgs<ExtArgs>
    euroStandard?: boolean | carDetails$euroStandardArgs<ExtArgs>
    origin?: boolean | carDetails$originArgs<ExtArgs>
    upholstery?: boolean | carDetails$upholsteryArgs<ExtArgs>
    carPosts?: boolean | carDetails$carPostsArgs<ExtArgs>
    _count?: boolean | CarDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carDetails"]>

  export type carDetailsSelectScalar = {
    id?: boolean
    carId?: boolean
    provenanceId?: boolean
    dateMiseEnCirculation?: boolean
    controleTechnique?: boolean
    premiereMain?: boolean
    energieId?: boolean
    boiteDeVitesseId?: boolean
    couleurExterieurId?: boolean
    sellerieId?: boolean
    nbPortes?: boolean
    nbPlaces?: boolean
    volumeCoffre?: boolean
    puissanceFiscale?: boolean
    puissanceDin?: boolean
    normeEuroId?: boolean
    critAirId?: boolean
    consommationMixte?: boolean
    emissionCo2Id?: boolean
  }

  export type carDetailsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    gearbox?: boolean | carDetails$gearboxArgs<ExtArgs>
    exteriorColor?: boolean | carDetails$exteriorColorArgs<ExtArgs>
    critAir?: boolean | carDetails$critAirArgs<ExtArgs>
    emissionCo2?: boolean | carDetails$emissionCo2Args<ExtArgs>
    energy?: boolean | carDetails$energyArgs<ExtArgs>
    euroStandard?: boolean | carDetails$euroStandardArgs<ExtArgs>
    origin?: boolean | carDetails$originArgs<ExtArgs>
    upholstery?: boolean | carDetails$upholsteryArgs<ExtArgs>
    carPosts?: boolean | carDetails$carPostsArgs<ExtArgs>
    _count?: boolean | CarDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $carDetailsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "carDetails"
    objects: {
      gearbox: Prisma.$GearBoxPayload<ExtArgs> | null
      exteriorColor: Prisma.$ExteriorColorPayload<ExtArgs> | null
      critAir: Prisma.$CritAirPayload<ExtArgs> | null
      emissionCo2: Prisma.$EmissionCo2Payload<ExtArgs> | null
      energy: Prisma.$EnergyPayload<ExtArgs> | null
      euroStandard: Prisma.$EuroStandardPayload<ExtArgs> | null
      origin: Prisma.$OriginPayload<ExtArgs> | null
      upholstery: Prisma.$UpholsteryPayload<ExtArgs> | null
      carPosts: Prisma.$carPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      carId: number | null
      provenanceId: number | null
      dateMiseEnCirculation: Date | null
      controleTechnique: boolean | null
      premiereMain: boolean | null
      energieId: number | null
      boiteDeVitesseId: number | null
      couleurExterieurId: number | null
      sellerieId: number | null
      nbPortes: number | null
      nbPlaces: number | null
      volumeCoffre: number | null
      puissanceFiscale: number | null
      puissanceDin: number | null
      normeEuroId: number | null
      critAirId: number | null
      consommationMixte: number | null
      emissionCo2Id: number | null
    }, ExtArgs["result"]["carDetails"]>
    composites: {}
  }


  type carDetailsGetPayload<S extends boolean | null | undefined | carDetailsDefaultArgs> = $Result.GetResult<Prisma.$carDetailsPayload, S>

  type carDetailsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<carDetailsFindManyArgs, 'select' | 'include'> & {
      select?: CarDetailsCountAggregateInputType | true
    }

  export interface carDetailsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carDetails'], meta: { name: 'carDetails' } }
    /**
     * Find zero or one CarDetails that matches the filter.
     * @param {carDetailsFindUniqueArgs} args - Arguments to find a CarDetails
     * @example
     * // Get one CarDetails
     * const carDetails = await prisma.carDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends carDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, carDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {carDetailsFindUniqueOrThrowArgs} args - Arguments to find a CarDetails
     * @example
     * // Get one CarDetails
     * const carDetails = await prisma.carDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends carDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carDetailsFindFirstArgs} args - Arguments to find a CarDetails
     * @example
     * // Get one CarDetails
     * const carDetails = await prisma.carDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends carDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, carDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carDetailsFindFirstOrThrowArgs} args - Arguments to find a CarDetails
     * @example
     * // Get one CarDetails
     * const carDetails = await prisma.carDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends carDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarDetails
     * const carDetails = await prisma.carDetails.findMany()
     * 
     * // Get first 10 CarDetails
     * const carDetails = await prisma.carDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carDetailsWithIdOnly = await prisma.carDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends carDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarDetails.
     * @param {carDetailsCreateArgs} args - Arguments to create a CarDetails.
     * @example
     * // Create one CarDetails
     * const CarDetails = await prisma.carDetails.create({
     *   data: {
     *     // ... data to create a CarDetails
     *   }
     * })
     * 
    **/
    create<T extends carDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, carDetailsCreateArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarDetails.
     *     @param {carDetailsCreateManyArgs} args - Arguments to create many CarDetails.
     *     @example
     *     // Create many CarDetails
     *     const carDetails = await prisma.carDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends carDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarDetails.
     * @param {carDetailsDeleteArgs} args - Arguments to delete one CarDetails.
     * @example
     * // Delete one CarDetails
     * const CarDetails = await prisma.carDetails.delete({
     *   where: {
     *     // ... filter to delete one CarDetails
     *   }
     * })
     * 
    **/
    delete<T extends carDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, carDetailsDeleteArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarDetails.
     * @param {carDetailsUpdateArgs} args - Arguments to update one CarDetails.
     * @example
     * // Update one CarDetails
     * const carDetails = await prisma.carDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends carDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, carDetailsUpdateArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarDetails.
     * @param {carDetailsDeleteManyArgs} args - Arguments to filter CarDetails to delete.
     * @example
     * // Delete a few CarDetails
     * const { count } = await prisma.carDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends carDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarDetails
     * const carDetails = await prisma.carDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends carDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, carDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarDetails.
     * @param {carDetailsUpsertArgs} args - Arguments to update or create a CarDetails.
     * @example
     * // Update or create a CarDetails
     * const carDetails = await prisma.carDetails.upsert({
     *   create: {
     *     // ... data to create a CarDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarDetails we want to update
     *   }
     * })
    **/
    upsert<T extends carDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, carDetailsUpsertArgs<ExtArgs>>
    ): Prisma__carDetailsClient<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carDetailsCountArgs} args - Arguments to filter CarDetails to count.
     * @example
     * // Count the number of CarDetails
     * const count = await prisma.carDetails.count({
     *   where: {
     *     // ... the filter for the CarDetails we want to count
     *   }
     * })
    **/
    count<T extends carDetailsCountArgs>(
      args?: Subset<T, carDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarDetailsAggregateArgs>(args: Subset<T, CarDetailsAggregateArgs>): Prisma.PrismaPromise<GetCarDetailsAggregateType<T>>

    /**
     * Group by CarDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carDetailsGroupByArgs} args - Group by arguments.
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
      T extends carDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carDetailsGroupByArgs['orderBy'] }
        : { orderBy?: carDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carDetails model
   */
  readonly fields: carDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carDetailsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    gearbox<T extends carDetails$gearboxArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$gearboxArgs<ExtArgs>>): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    exteriorColor<T extends carDetails$exteriorColorArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$exteriorColorArgs<ExtArgs>>): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    critAir<T extends carDetails$critAirArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$critAirArgs<ExtArgs>>): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    emissionCo2<T extends carDetails$emissionCo2Args<ExtArgs> = {}>(args?: Subset<T, carDetails$emissionCo2Args<ExtArgs>>): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    energy<T extends carDetails$energyArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$energyArgs<ExtArgs>>): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    euroStandard<T extends carDetails$euroStandardArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$euroStandardArgs<ExtArgs>>): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    origin<T extends carDetails$originArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$originArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    upholstery<T extends carDetails$upholsteryArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$upholsteryArgs<ExtArgs>>): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    carPosts<T extends carDetails$carPostsArgs<ExtArgs> = {}>(args?: Subset<T, carDetails$carPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPostsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the carDetails model
   */ 
  interface carDetailsFieldRefs {
    readonly id: FieldRef<"carDetails", 'Int'>
    readonly carId: FieldRef<"carDetails", 'Int'>
    readonly provenanceId: FieldRef<"carDetails", 'Int'>
    readonly dateMiseEnCirculation: FieldRef<"carDetails", 'DateTime'>
    readonly controleTechnique: FieldRef<"carDetails", 'Boolean'>
    readonly premiereMain: FieldRef<"carDetails", 'Boolean'>
    readonly energieId: FieldRef<"carDetails", 'Int'>
    readonly boiteDeVitesseId: FieldRef<"carDetails", 'Int'>
    readonly couleurExterieurId: FieldRef<"carDetails", 'Int'>
    readonly sellerieId: FieldRef<"carDetails", 'Int'>
    readonly nbPortes: FieldRef<"carDetails", 'Int'>
    readonly nbPlaces: FieldRef<"carDetails", 'Int'>
    readonly volumeCoffre: FieldRef<"carDetails", 'Int'>
    readonly puissanceFiscale: FieldRef<"carDetails", 'Int'>
    readonly puissanceDin: FieldRef<"carDetails", 'Int'>
    readonly normeEuroId: FieldRef<"carDetails", 'Int'>
    readonly critAirId: FieldRef<"carDetails", 'Int'>
    readonly consommationMixte: FieldRef<"carDetails", 'Float'>
    readonly emissionCo2Id: FieldRef<"carDetails", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * carDetails findUnique
   */
  export type carDetailsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * Filter, which carDetails to fetch.
     */
    where: carDetailsWhereUniqueInput
  }


  /**
   * carDetails findUniqueOrThrow
   */
  export type carDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * Filter, which carDetails to fetch.
     */
    where: carDetailsWhereUniqueInput
  }


  /**
   * carDetails findFirst
   */
  export type carDetailsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * Filter, which carDetails to fetch.
     */
    where?: carDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carDetails to fetch.
     */
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carDetails.
     */
    cursor?: carDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carDetails.
     */
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * carDetails findFirstOrThrow
   */
  export type carDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * Filter, which carDetails to fetch.
     */
    where?: carDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carDetails to fetch.
     */
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carDetails.
     */
    cursor?: carDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carDetails.
     */
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * carDetails findMany
   */
  export type carDetailsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * Filter, which carDetails to fetch.
     */
    where?: carDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carDetails to fetch.
     */
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carDetails.
     */
    cursor?: carDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carDetails.
     */
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * carDetails create
   */
  export type carDetailsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a carDetails.
     */
    data?: XOR<carDetailsCreateInput, carDetailsUncheckedCreateInput>
  }


  /**
   * carDetails createMany
   */
  export type carDetailsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carDetails.
     */
    data: carDetailsCreateManyInput | carDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * carDetails update
   */
  export type carDetailsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a carDetails.
     */
    data: XOR<carDetailsUpdateInput, carDetailsUncheckedUpdateInput>
    /**
     * Choose, which carDetails to update.
     */
    where: carDetailsWhereUniqueInput
  }


  /**
   * carDetails updateMany
   */
  export type carDetailsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carDetails.
     */
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyInput>
    /**
     * Filter which carDetails to update
     */
    where?: carDetailsWhereInput
  }


  /**
   * carDetails upsert
   */
  export type carDetailsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the carDetails to update in case it exists.
     */
    where: carDetailsWhereUniqueInput
    /**
     * In case the carDetails found by the `where` argument doesn't exist, create a new carDetails with this data.
     */
    create: XOR<carDetailsCreateInput, carDetailsUncheckedCreateInput>
    /**
     * In case the carDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carDetailsUpdateInput, carDetailsUncheckedUpdateInput>
  }


  /**
   * carDetails delete
   */
  export type carDetailsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    /**
     * Filter which carDetails to delete.
     */
    where: carDetailsWhereUniqueInput
  }


  /**
   * carDetails deleteMany
   */
  export type carDetailsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which carDetails to delete
     */
    where?: carDetailsWhereInput
  }


  /**
   * carDetails.gearbox
   */
  export type carDetails$gearboxArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    where?: GearBoxWhereInput
  }


  /**
   * carDetails.exteriorColor
   */
  export type carDetails$exteriorColorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    where?: ExteriorColorWhereInput
  }


  /**
   * carDetails.critAir
   */
  export type carDetails$critAirArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    where?: CritAirWhereInput
  }


  /**
   * carDetails.emissionCo2
   */
  export type carDetails$emissionCo2Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    where?: EmissionCo2WhereInput
  }


  /**
   * carDetails.energy
   */
  export type carDetails$energyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    where?: EnergyWhereInput
  }


  /**
   * carDetails.euroStandard
   */
  export type carDetails$euroStandardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    where?: EuroStandardWhereInput
  }


  /**
   * carDetails.origin
   */
  export type carDetails$originArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    where?: OriginWhereInput
  }


  /**
   * carDetails.upholstery
   */
  export type carDetails$upholsteryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    where?: UpholsteryWhereInput
  }


  /**
   * carDetails.carPosts
   */
  export type carDetails$carPostsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carPosts
     */
    select?: carPostsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carPostsInclude<ExtArgs> | null
    where?: carPostsWhereInput
    orderBy?: carPostsOrderByWithRelationInput | carPostsOrderByWithRelationInput[]
    cursor?: carPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarPostsScalarFieldEnum | CarPostsScalarFieldEnum[]
  }


  /**
   * carDetails without action
   */
  export type carDetailsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
  }



  /**
   * Model testimonials
   */

  export type AggregateTestimonials = {
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  export type TestimonialsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type TestimonialsSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type TestimonialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    rating: number | null
    message: string | null
    isValidated: boolean | null
    status: string | null
    email: string | null
  }

  export type TestimonialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    rating: number | null
    message: string | null
    isValidated: boolean | null
    status: string | null
    email: string | null
  }

  export type TestimonialsCountAggregateOutputType = {
    id: number
    name: number
    date: number
    rating: number
    message: number
    isValidated: number
    status: number
    email: number
    _all: number
  }


  export type TestimonialsAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type TestimonialsSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type TestimonialsMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    rating?: true
    message?: true
    isValidated?: true
    status?: true
    email?: true
  }

  export type TestimonialsMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    rating?: true
    message?: true
    isValidated?: true
    status?: true
    email?: true
  }

  export type TestimonialsCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    rating?: true
    message?: true
    isValidated?: true
    status?: true
    email?: true
    _all?: true
  }

  export type TestimonialsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonials to aggregate.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testimonials
    **/
    _count?: true | TestimonialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialsMaxAggregateInputType
  }

  export type GetTestimonialsAggregateType<T extends TestimonialsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonials[P]>
      : GetScalarType<T[P], AggregateTestimonials[P]>
  }




  export type testimonialsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: testimonialsWhereInput
    orderBy?: testimonialsOrderByWithAggregationInput | testimonialsOrderByWithAggregationInput[]
    by: TestimonialsScalarFieldEnum[] | TestimonialsScalarFieldEnum
    having?: testimonialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialsCountAggregateInputType | true
    _avg?: TestimonialsAvgAggregateInputType
    _sum?: TestimonialsSumAggregateInputType
    _min?: TestimonialsMinAggregateInputType
    _max?: TestimonialsMaxAggregateInputType
  }

  export type TestimonialsGroupByOutputType = {
    id: number
    name: string | null
    date: Date | null
    rating: number | null
    message: string | null
    isValidated: boolean | null
    status: string | null
    email: string | null
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  type GetTestimonialsGroupByPayload<T extends testimonialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
        }
      >
    >


  export type testimonialsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    rating?: boolean
    message?: boolean
    isValidated?: boolean
    status?: boolean
    email?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type testimonialsSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    rating?: boolean
    message?: boolean
    isValidated?: boolean
    status?: boolean
    email?: boolean
  }


  export type $testimonialsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "testimonials"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
      date: Date | null
      rating: number | null
      message: string | null
      isValidated: boolean | null
      status: string | null
      email: string | null
    }, ExtArgs["result"]["testimonials"]>
    composites: {}
  }


  type testimonialsGetPayload<S extends boolean | null | undefined | testimonialsDefaultArgs> = $Result.GetResult<Prisma.$testimonialsPayload, S>

  type testimonialsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<testimonialsFindManyArgs, 'select' | 'include'> & {
      select?: TestimonialsCountAggregateInputType | true
    }

  export interface testimonialsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testimonials'], meta: { name: 'testimonials' } }
    /**
     * Find zero or one Testimonials that matches the filter.
     * @param {testimonialsFindUniqueArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends testimonialsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, testimonialsFindUniqueArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Testimonials that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {testimonialsFindUniqueOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends testimonialsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testimonialsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsFindFirstArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends testimonialsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, testimonialsFindFirstArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Testimonials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsFindFirstOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends testimonialsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testimonialsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonials.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends testimonialsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testimonialsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Testimonials.
     * @param {testimonialsCreateArgs} args - Arguments to create a Testimonials.
     * @example
     * // Create one Testimonials
     * const Testimonials = await prisma.testimonials.create({
     *   data: {
     *     // ... data to create a Testimonials
     *   }
     * })
     * 
    **/
    create<T extends testimonialsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, testimonialsCreateArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Testimonials.
     *     @param {testimonialsCreateManyArgs} args - Arguments to create many Testimonials.
     *     @example
     *     // Create many Testimonials
     *     const testimonials = await prisma.testimonials.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends testimonialsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testimonialsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testimonials.
     * @param {testimonialsDeleteArgs} args - Arguments to delete one Testimonials.
     * @example
     * // Delete one Testimonials
     * const Testimonials = await prisma.testimonials.delete({
     *   where: {
     *     // ... filter to delete one Testimonials
     *   }
     * })
     * 
    **/
    delete<T extends testimonialsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, testimonialsDeleteArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Testimonials.
     * @param {testimonialsUpdateArgs} args - Arguments to update one Testimonials.
     * @example
     * // Update one Testimonials
     * const testimonials = await prisma.testimonials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends testimonialsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, testimonialsUpdateArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Testimonials.
     * @param {testimonialsDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends testimonialsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testimonialsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends testimonialsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, testimonialsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonials.
     * @param {testimonialsUpsertArgs} args - Arguments to update or create a Testimonials.
     * @example
     * // Update or create a Testimonials
     * const testimonials = await prisma.testimonials.upsert({
     *   create: {
     *     // ... data to create a Testimonials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonials we want to update
     *   }
     * })
    **/
    upsert<T extends testimonialsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, testimonialsUpsertArgs<ExtArgs>>
    ): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonials.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends testimonialsCountArgs>(
      args?: Subset<T, testimonialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialsAggregateArgs>(args: Subset<T, TestimonialsAggregateArgs>): Prisma.PrismaPromise<GetTestimonialsAggregateType<T>>

    /**
     * Group by Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsGroupByArgs} args - Group by arguments.
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
      T extends testimonialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testimonialsGroupByArgs['orderBy'] }
        : { orderBy?: testimonialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testimonialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testimonials model
   */
  readonly fields: testimonialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testimonials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testimonialsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the testimonials model
   */ 
  interface testimonialsFieldRefs {
    readonly id: FieldRef<"testimonials", 'Int'>
    readonly name: FieldRef<"testimonials", 'String'>
    readonly date: FieldRef<"testimonials", 'DateTime'>
    readonly rating: FieldRef<"testimonials", 'Int'>
    readonly message: FieldRef<"testimonials", 'String'>
    readonly isValidated: FieldRef<"testimonials", 'Boolean'>
    readonly status: FieldRef<"testimonials", 'String'>
    readonly email: FieldRef<"testimonials", 'String'>
  }
    

  // Custom InputTypes

  /**
   * testimonials findUnique
   */
  export type testimonialsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where: testimonialsWhereUniqueInput
  }


  /**
   * testimonials findUniqueOrThrow
   */
  export type testimonialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where: testimonialsWhereUniqueInput
  }


  /**
   * testimonials findFirst
   */
  export type testimonialsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }


  /**
   * testimonials findFirstOrThrow
   */
  export type testimonialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }


  /**
   * testimonials findMany
   */
  export type testimonialsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testimonials.
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }


  /**
   * testimonials create
   */
  export type testimonialsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * The data needed to create a testimonials.
     */
    data?: XOR<testimonialsCreateInput, testimonialsUncheckedCreateInput>
  }


  /**
   * testimonials createMany
   */
  export type testimonialsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testimonials.
     */
    data: testimonialsCreateManyInput | testimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * testimonials update
   */
  export type testimonialsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * The data needed to update a testimonials.
     */
    data: XOR<testimonialsUpdateInput, testimonialsUncheckedUpdateInput>
    /**
     * Choose, which testimonials to update.
     */
    where: testimonialsWhereUniqueInput
  }


  /**
   * testimonials updateMany
   */
  export type testimonialsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testimonials.
     */
    data: XOR<testimonialsUpdateManyMutationInput, testimonialsUncheckedUpdateManyInput>
    /**
     * Filter which testimonials to update
     */
    where?: testimonialsWhereInput
  }


  /**
   * testimonials upsert
   */
  export type testimonialsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * The filter to search for the testimonials to update in case it exists.
     */
    where: testimonialsWhereUniqueInput
    /**
     * In case the testimonials found by the `where` argument doesn't exist, create a new testimonials with this data.
     */
    create: XOR<testimonialsCreateInput, testimonialsUncheckedCreateInput>
    /**
     * In case the testimonials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testimonialsUpdateInput, testimonialsUncheckedUpdateInput>
  }


  /**
   * testimonials delete
   */
  export type testimonialsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter which testimonials to delete.
     */
    where: testimonialsWhereUniqueInput
  }


  /**
   * testimonials deleteMany
   */
  export type testimonialsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonials to delete
     */
    where?: testimonialsWhereInput
  }


  /**
   * testimonials without action
   */
  export type testimonialsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
  }



  /**
   * Model GearBox
   */

  export type AggregateGearBox = {
    _count: GearBoxCountAggregateOutputType | null
    _avg: GearBoxAvgAggregateOutputType | null
    _sum: GearBoxSumAggregateOutputType | null
    _min: GearBoxMinAggregateOutputType | null
    _max: GearBoxMaxAggregateOutputType | null
  }

  export type GearBoxAvgAggregateOutputType = {
    id: number | null
  }

  export type GearBoxSumAggregateOutputType = {
    id: number | null
  }

  export type GearBoxMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GearBoxMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GearBoxCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GearBoxAvgAggregateInputType = {
    id?: true
  }

  export type GearBoxSumAggregateInputType = {
    id?: true
  }

  export type GearBoxMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GearBoxMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GearBoxCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GearBoxAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GearBox to aggregate.
     */
    where?: GearBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearBoxes to fetch.
     */
    orderBy?: GearBoxOrderByWithRelationInput | GearBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GearBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GearBoxes
    **/
    _count?: true | GearBoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GearBoxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GearBoxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GearBoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GearBoxMaxAggregateInputType
  }

  export type GetGearBoxAggregateType<T extends GearBoxAggregateArgs> = {
        [P in keyof T & keyof AggregateGearBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGearBox[P]>
      : GetScalarType<T[P], AggregateGearBox[P]>
  }




  export type GearBoxGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GearBoxWhereInput
    orderBy?: GearBoxOrderByWithAggregationInput | GearBoxOrderByWithAggregationInput[]
    by: GearBoxScalarFieldEnum[] | GearBoxScalarFieldEnum
    having?: GearBoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GearBoxCountAggregateInputType | true
    _avg?: GearBoxAvgAggregateInputType
    _sum?: GearBoxSumAggregateInputType
    _min?: GearBoxMinAggregateInputType
    _max?: GearBoxMaxAggregateInputType
  }

  export type GearBoxGroupByOutputType = {
    id: number
    name: string | null
    _count: GearBoxCountAggregateOutputType | null
    _avg: GearBoxAvgAggregateOutputType | null
    _sum: GearBoxSumAggregateOutputType | null
    _min: GearBoxMinAggregateOutputType | null
    _max: GearBoxMaxAggregateOutputType | null
  }

  type GetGearBoxGroupByPayload<T extends GearBoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GearBoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GearBoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GearBoxGroupByOutputType[P]>
            : GetScalarType<T[P], GearBoxGroupByOutputType[P]>
        }
      >
    >


  export type GearBoxSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | GearBox$carDetailssArgs<ExtArgs>
    _count?: boolean | GearBoxCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gearBox"]>

  export type GearBoxSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GearBoxInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | GearBox$carDetailssArgs<ExtArgs>
    _count?: boolean | GearBoxCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GearBoxPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GearBox"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["gearBox"]>
    composites: {}
  }


  type GearBoxGetPayload<S extends boolean | null | undefined | GearBoxDefaultArgs> = $Result.GetResult<Prisma.$GearBoxPayload, S>

  type GearBoxCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GearBoxFindManyArgs, 'select' | 'include'> & {
      select?: GearBoxCountAggregateInputType | true
    }

  export interface GearBoxDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GearBox'], meta: { name: 'GearBox' } }
    /**
     * Find zero or one GearBox that matches the filter.
     * @param {GearBoxFindUniqueArgs} args - Arguments to find a GearBox
     * @example
     * // Get one GearBox
     * const gearBox = await prisma.gearBox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GearBoxFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GearBoxFindUniqueArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GearBox that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GearBoxFindUniqueOrThrowArgs} args - Arguments to find a GearBox
     * @example
     * // Get one GearBox
     * const gearBox = await prisma.gearBox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GearBoxFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GearBoxFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GearBox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxFindFirstArgs} args - Arguments to find a GearBox
     * @example
     * // Get one GearBox
     * const gearBox = await prisma.gearBox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GearBoxFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GearBoxFindFirstArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GearBox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxFindFirstOrThrowArgs} args - Arguments to find a GearBox
     * @example
     * // Get one GearBox
     * const gearBox = await prisma.gearBox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GearBoxFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GearBoxFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GearBoxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GearBoxes
     * const gearBoxes = await prisma.gearBox.findMany()
     * 
     * // Get first 10 GearBoxes
     * const gearBoxes = await prisma.gearBox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gearBoxWithIdOnly = await prisma.gearBox.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GearBoxFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GearBoxFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GearBox.
     * @param {GearBoxCreateArgs} args - Arguments to create a GearBox.
     * @example
     * // Create one GearBox
     * const GearBox = await prisma.gearBox.create({
     *   data: {
     *     // ... data to create a GearBox
     *   }
     * })
     * 
    **/
    create<T extends GearBoxCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GearBoxCreateArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GearBoxes.
     *     @param {GearBoxCreateManyArgs} args - Arguments to create many GearBoxes.
     *     @example
     *     // Create many GearBoxes
     *     const gearBox = await prisma.gearBox.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GearBoxCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GearBoxCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GearBox.
     * @param {GearBoxDeleteArgs} args - Arguments to delete one GearBox.
     * @example
     * // Delete one GearBox
     * const GearBox = await prisma.gearBox.delete({
     *   where: {
     *     // ... filter to delete one GearBox
     *   }
     * })
     * 
    **/
    delete<T extends GearBoxDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GearBoxDeleteArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GearBox.
     * @param {GearBoxUpdateArgs} args - Arguments to update one GearBox.
     * @example
     * // Update one GearBox
     * const gearBox = await prisma.gearBox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GearBoxUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GearBoxUpdateArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GearBoxes.
     * @param {GearBoxDeleteManyArgs} args - Arguments to filter GearBoxes to delete.
     * @example
     * // Delete a few GearBoxes
     * const { count } = await prisma.gearBox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GearBoxDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GearBoxDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GearBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GearBoxes
     * const gearBox = await prisma.gearBox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GearBoxUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GearBoxUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GearBox.
     * @param {GearBoxUpsertArgs} args - Arguments to update or create a GearBox.
     * @example
     * // Update or create a GearBox
     * const gearBox = await prisma.gearBox.upsert({
     *   create: {
     *     // ... data to create a GearBox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GearBox we want to update
     *   }
     * })
    **/
    upsert<T extends GearBoxUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GearBoxUpsertArgs<ExtArgs>>
    ): Prisma__GearBoxClient<$Result.GetResult<Prisma.$GearBoxPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GearBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxCountArgs} args - Arguments to filter GearBoxes to count.
     * @example
     * // Count the number of GearBoxes
     * const count = await prisma.gearBox.count({
     *   where: {
     *     // ... the filter for the GearBoxes we want to count
     *   }
     * })
    **/
    count<T extends GearBoxCountArgs>(
      args?: Subset<T, GearBoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GearBoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GearBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GearBoxAggregateArgs>(args: Subset<T, GearBoxAggregateArgs>): Prisma.PrismaPromise<GetGearBoxAggregateType<T>>

    /**
     * Group by GearBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearBoxGroupByArgs} args - Group by arguments.
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
      T extends GearBoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GearBoxGroupByArgs['orderBy'] }
        : { orderBy?: GearBoxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GearBoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGearBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GearBox model
   */
  readonly fields: GearBoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GearBox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GearBoxClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends GearBox$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, GearBox$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GearBox model
   */ 
  interface GearBoxFieldRefs {
    readonly id: FieldRef<"GearBox", 'Int'>
    readonly name: FieldRef<"GearBox", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GearBox findUnique
   */
  export type GearBoxFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * Filter, which GearBox to fetch.
     */
    where: GearBoxWhereUniqueInput
  }


  /**
   * GearBox findUniqueOrThrow
   */
  export type GearBoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * Filter, which GearBox to fetch.
     */
    where: GearBoxWhereUniqueInput
  }


  /**
   * GearBox findFirst
   */
  export type GearBoxFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * Filter, which GearBox to fetch.
     */
    where?: GearBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearBoxes to fetch.
     */
    orderBy?: GearBoxOrderByWithRelationInput | GearBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GearBoxes.
     */
    cursor?: GearBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GearBoxes.
     */
    distinct?: GearBoxScalarFieldEnum | GearBoxScalarFieldEnum[]
  }


  /**
   * GearBox findFirstOrThrow
   */
  export type GearBoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * Filter, which GearBox to fetch.
     */
    where?: GearBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearBoxes to fetch.
     */
    orderBy?: GearBoxOrderByWithRelationInput | GearBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GearBoxes.
     */
    cursor?: GearBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GearBoxes.
     */
    distinct?: GearBoxScalarFieldEnum | GearBoxScalarFieldEnum[]
  }


  /**
   * GearBox findMany
   */
  export type GearBoxFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * Filter, which GearBoxes to fetch.
     */
    where?: GearBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearBoxes to fetch.
     */
    orderBy?: GearBoxOrderByWithRelationInput | GearBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GearBoxes.
     */
    cursor?: GearBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearBoxes.
     */
    skip?: number
    distinct?: GearBoxScalarFieldEnum | GearBoxScalarFieldEnum[]
  }


  /**
   * GearBox create
   */
  export type GearBoxCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * The data needed to create a GearBox.
     */
    data?: XOR<GearBoxCreateInput, GearBoxUncheckedCreateInput>
  }


  /**
   * GearBox createMany
   */
  export type GearBoxCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GearBoxes.
     */
    data: GearBoxCreateManyInput | GearBoxCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GearBox update
   */
  export type GearBoxUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * The data needed to update a GearBox.
     */
    data: XOR<GearBoxUpdateInput, GearBoxUncheckedUpdateInput>
    /**
     * Choose, which GearBox to update.
     */
    where: GearBoxWhereUniqueInput
  }


  /**
   * GearBox updateMany
   */
  export type GearBoxUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GearBoxes.
     */
    data: XOR<GearBoxUpdateManyMutationInput, GearBoxUncheckedUpdateManyInput>
    /**
     * Filter which GearBoxes to update
     */
    where?: GearBoxWhereInput
  }


  /**
   * GearBox upsert
   */
  export type GearBoxUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * The filter to search for the GearBox to update in case it exists.
     */
    where: GearBoxWhereUniqueInput
    /**
     * In case the GearBox found by the `where` argument doesn't exist, create a new GearBox with this data.
     */
    create: XOR<GearBoxCreateInput, GearBoxUncheckedCreateInput>
    /**
     * In case the GearBox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GearBoxUpdateInput, GearBoxUncheckedUpdateInput>
  }


  /**
   * GearBox delete
   */
  export type GearBoxDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
    /**
     * Filter which GearBox to delete.
     */
    where: GearBoxWhereUniqueInput
  }


  /**
   * GearBox deleteMany
   */
  export type GearBoxDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GearBoxes to delete
     */
    where?: GearBoxWhereInput
  }


  /**
   * GearBox.carDetailss
   */
  export type GearBox$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * GearBox without action
   */
  export type GearBoxDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearBox
     */
    select?: GearBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GearBoxInclude<ExtArgs> | null
  }



  /**
   * Model CritAir
   */

  export type AggregateCritAir = {
    _count: CritAirCountAggregateOutputType | null
    _avg: CritAirAvgAggregateOutputType | null
    _sum: CritAirSumAggregateOutputType | null
    _min: CritAirMinAggregateOutputType | null
    _max: CritAirMaxAggregateOutputType | null
  }

  export type CritAirAvgAggregateOutputType = {
    id: number | null
  }

  export type CritAirSumAggregateOutputType = {
    id: number | null
  }

  export type CritAirMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CritAirMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CritAirCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CritAirAvgAggregateInputType = {
    id?: true
  }

  export type CritAirSumAggregateInputType = {
    id?: true
  }

  export type CritAirMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CritAirMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CritAirCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CritAirAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CritAir to aggregate.
     */
    where?: CritAirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CritAirs to fetch.
     */
    orderBy?: CritAirOrderByWithRelationInput | CritAirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CritAirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CritAirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CritAirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CritAirs
    **/
    _count?: true | CritAirCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CritAirAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CritAirSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CritAirMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CritAirMaxAggregateInputType
  }

  export type GetCritAirAggregateType<T extends CritAirAggregateArgs> = {
        [P in keyof T & keyof AggregateCritAir]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCritAir[P]>
      : GetScalarType<T[P], AggregateCritAir[P]>
  }




  export type CritAirGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CritAirWhereInput
    orderBy?: CritAirOrderByWithAggregationInput | CritAirOrderByWithAggregationInput[]
    by: CritAirScalarFieldEnum[] | CritAirScalarFieldEnum
    having?: CritAirScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CritAirCountAggregateInputType | true
    _avg?: CritAirAvgAggregateInputType
    _sum?: CritAirSumAggregateInputType
    _min?: CritAirMinAggregateInputType
    _max?: CritAirMaxAggregateInputType
  }

  export type CritAirGroupByOutputType = {
    id: number
    name: string | null
    _count: CritAirCountAggregateOutputType | null
    _avg: CritAirAvgAggregateOutputType | null
    _sum: CritAirSumAggregateOutputType | null
    _min: CritAirMinAggregateOutputType | null
    _max: CritAirMaxAggregateOutputType | null
  }

  type GetCritAirGroupByPayload<T extends CritAirGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CritAirGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CritAirGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CritAirGroupByOutputType[P]>
            : GetScalarType<T[P], CritAirGroupByOutputType[P]>
        }
      >
    >


  export type CritAirSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | CritAir$carDetailssArgs<ExtArgs>
    _count?: boolean | CritAirCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["critAir"]>

  export type CritAirSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CritAirInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | CritAir$carDetailssArgs<ExtArgs>
    _count?: boolean | CritAirCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CritAirPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "CritAir"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["critAir"]>
    composites: {}
  }


  type CritAirGetPayload<S extends boolean | null | undefined | CritAirDefaultArgs> = $Result.GetResult<Prisma.$CritAirPayload, S>

  type CritAirCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CritAirFindManyArgs, 'select' | 'include'> & {
      select?: CritAirCountAggregateInputType | true
    }

  export interface CritAirDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CritAir'], meta: { name: 'CritAir' } }
    /**
     * Find zero or one CritAir that matches the filter.
     * @param {CritAirFindUniqueArgs} args - Arguments to find a CritAir
     * @example
     * // Get one CritAir
     * const critAir = await prisma.critAir.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CritAirFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CritAirFindUniqueArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CritAir that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CritAirFindUniqueOrThrowArgs} args - Arguments to find a CritAir
     * @example
     * // Get one CritAir
     * const critAir = await prisma.critAir.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CritAirFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CritAirFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CritAir that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirFindFirstArgs} args - Arguments to find a CritAir
     * @example
     * // Get one CritAir
     * const critAir = await prisma.critAir.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CritAirFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CritAirFindFirstArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CritAir that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirFindFirstOrThrowArgs} args - Arguments to find a CritAir
     * @example
     * // Get one CritAir
     * const critAir = await prisma.critAir.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CritAirFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CritAirFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CritAirs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CritAirs
     * const critAirs = await prisma.critAir.findMany()
     * 
     * // Get first 10 CritAirs
     * const critAirs = await prisma.critAir.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const critAirWithIdOnly = await prisma.critAir.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CritAirFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CritAirFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CritAir.
     * @param {CritAirCreateArgs} args - Arguments to create a CritAir.
     * @example
     * // Create one CritAir
     * const CritAir = await prisma.critAir.create({
     *   data: {
     *     // ... data to create a CritAir
     *   }
     * })
     * 
    **/
    create<T extends CritAirCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CritAirCreateArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CritAirs.
     *     @param {CritAirCreateManyArgs} args - Arguments to create many CritAirs.
     *     @example
     *     // Create many CritAirs
     *     const critAir = await prisma.critAir.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CritAirCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CritAirCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CritAir.
     * @param {CritAirDeleteArgs} args - Arguments to delete one CritAir.
     * @example
     * // Delete one CritAir
     * const CritAir = await prisma.critAir.delete({
     *   where: {
     *     // ... filter to delete one CritAir
     *   }
     * })
     * 
    **/
    delete<T extends CritAirDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CritAirDeleteArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CritAir.
     * @param {CritAirUpdateArgs} args - Arguments to update one CritAir.
     * @example
     * // Update one CritAir
     * const critAir = await prisma.critAir.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CritAirUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CritAirUpdateArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CritAirs.
     * @param {CritAirDeleteManyArgs} args - Arguments to filter CritAirs to delete.
     * @example
     * // Delete a few CritAirs
     * const { count } = await prisma.critAir.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CritAirDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CritAirDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CritAirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CritAirs
     * const critAir = await prisma.critAir.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CritAirUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CritAirUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CritAir.
     * @param {CritAirUpsertArgs} args - Arguments to update or create a CritAir.
     * @example
     * // Update or create a CritAir
     * const critAir = await prisma.critAir.upsert({
     *   create: {
     *     // ... data to create a CritAir
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CritAir we want to update
     *   }
     * })
    **/
    upsert<T extends CritAirUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CritAirUpsertArgs<ExtArgs>>
    ): Prisma__CritAirClient<$Result.GetResult<Prisma.$CritAirPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CritAirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirCountArgs} args - Arguments to filter CritAirs to count.
     * @example
     * // Count the number of CritAirs
     * const count = await prisma.critAir.count({
     *   where: {
     *     // ... the filter for the CritAirs we want to count
     *   }
     * })
    **/
    count<T extends CritAirCountArgs>(
      args?: Subset<T, CritAirCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CritAirCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CritAir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CritAirAggregateArgs>(args: Subset<T, CritAirAggregateArgs>): Prisma.PrismaPromise<GetCritAirAggregateType<T>>

    /**
     * Group by CritAir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CritAirGroupByArgs} args - Group by arguments.
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
      T extends CritAirGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CritAirGroupByArgs['orderBy'] }
        : { orderBy?: CritAirGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CritAirGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCritAirGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CritAir model
   */
  readonly fields: CritAirFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CritAir.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CritAirClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends CritAir$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, CritAir$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CritAir model
   */ 
  interface CritAirFieldRefs {
    readonly id: FieldRef<"CritAir", 'Int'>
    readonly name: FieldRef<"CritAir", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CritAir findUnique
   */
  export type CritAirFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * Filter, which CritAir to fetch.
     */
    where: CritAirWhereUniqueInput
  }


  /**
   * CritAir findUniqueOrThrow
   */
  export type CritAirFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * Filter, which CritAir to fetch.
     */
    where: CritAirWhereUniqueInput
  }


  /**
   * CritAir findFirst
   */
  export type CritAirFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * Filter, which CritAir to fetch.
     */
    where?: CritAirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CritAirs to fetch.
     */
    orderBy?: CritAirOrderByWithRelationInput | CritAirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CritAirs.
     */
    cursor?: CritAirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CritAirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CritAirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CritAirs.
     */
    distinct?: CritAirScalarFieldEnum | CritAirScalarFieldEnum[]
  }


  /**
   * CritAir findFirstOrThrow
   */
  export type CritAirFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * Filter, which CritAir to fetch.
     */
    where?: CritAirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CritAirs to fetch.
     */
    orderBy?: CritAirOrderByWithRelationInput | CritAirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CritAirs.
     */
    cursor?: CritAirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CritAirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CritAirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CritAirs.
     */
    distinct?: CritAirScalarFieldEnum | CritAirScalarFieldEnum[]
  }


  /**
   * CritAir findMany
   */
  export type CritAirFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * Filter, which CritAirs to fetch.
     */
    where?: CritAirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CritAirs to fetch.
     */
    orderBy?: CritAirOrderByWithRelationInput | CritAirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CritAirs.
     */
    cursor?: CritAirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CritAirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CritAirs.
     */
    skip?: number
    distinct?: CritAirScalarFieldEnum | CritAirScalarFieldEnum[]
  }


  /**
   * CritAir create
   */
  export type CritAirCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * The data needed to create a CritAir.
     */
    data?: XOR<CritAirCreateInput, CritAirUncheckedCreateInput>
  }


  /**
   * CritAir createMany
   */
  export type CritAirCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CritAirs.
     */
    data: CritAirCreateManyInput | CritAirCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CritAir update
   */
  export type CritAirUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * The data needed to update a CritAir.
     */
    data: XOR<CritAirUpdateInput, CritAirUncheckedUpdateInput>
    /**
     * Choose, which CritAir to update.
     */
    where: CritAirWhereUniqueInput
  }


  /**
   * CritAir updateMany
   */
  export type CritAirUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CritAirs.
     */
    data: XOR<CritAirUpdateManyMutationInput, CritAirUncheckedUpdateManyInput>
    /**
     * Filter which CritAirs to update
     */
    where?: CritAirWhereInput
  }


  /**
   * CritAir upsert
   */
  export type CritAirUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * The filter to search for the CritAir to update in case it exists.
     */
    where: CritAirWhereUniqueInput
    /**
     * In case the CritAir found by the `where` argument doesn't exist, create a new CritAir with this data.
     */
    create: XOR<CritAirCreateInput, CritAirUncheckedCreateInput>
    /**
     * In case the CritAir was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CritAirUpdateInput, CritAirUncheckedUpdateInput>
  }


  /**
   * CritAir delete
   */
  export type CritAirDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
    /**
     * Filter which CritAir to delete.
     */
    where: CritAirWhereUniqueInput
  }


  /**
   * CritAir deleteMany
   */
  export type CritAirDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CritAirs to delete
     */
    where?: CritAirWhereInput
  }


  /**
   * CritAir.carDetailss
   */
  export type CritAir$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * CritAir without action
   */
  export type CritAirDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CritAir
     */
    select?: CritAirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CritAirInclude<ExtArgs> | null
  }



  /**
   * Model EmissionCo2
   */

  export type AggregateEmissionCo2 = {
    _count: EmissionCo2CountAggregateOutputType | null
    _avg: EmissionCo2AvgAggregateOutputType | null
    _sum: EmissionCo2SumAggregateOutputType | null
    _min: EmissionCo2MinAggregateOutputType | null
    _max: EmissionCo2MaxAggregateOutputType | null
  }

  export type EmissionCo2AvgAggregateOutputType = {
    id: number | null
  }

  export type EmissionCo2SumAggregateOutputType = {
    id: number | null
  }

  export type EmissionCo2MinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EmissionCo2MaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EmissionCo2CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EmissionCo2AvgAggregateInputType = {
    id?: true
  }

  export type EmissionCo2SumAggregateInputType = {
    id?: true
  }

  export type EmissionCo2MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EmissionCo2MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EmissionCo2CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EmissionCo2AggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionCo2 to aggregate.
     */
    where?: EmissionCo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCo2s to fetch.
     */
    orderBy?: EmissionCo2OrderByWithRelationInput | EmissionCo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmissionCo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmissionCo2s
    **/
    _count?: true | EmissionCo2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmissionCo2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmissionCo2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmissionCo2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmissionCo2MaxAggregateInputType
  }

  export type GetEmissionCo2AggregateType<T extends EmissionCo2AggregateArgs> = {
        [P in keyof T & keyof AggregateEmissionCo2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmissionCo2[P]>
      : GetScalarType<T[P], AggregateEmissionCo2[P]>
  }




  export type EmissionCo2GroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmissionCo2WhereInput
    orderBy?: EmissionCo2OrderByWithAggregationInput | EmissionCo2OrderByWithAggregationInput[]
    by: EmissionCo2ScalarFieldEnum[] | EmissionCo2ScalarFieldEnum
    having?: EmissionCo2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmissionCo2CountAggregateInputType | true
    _avg?: EmissionCo2AvgAggregateInputType
    _sum?: EmissionCo2SumAggregateInputType
    _min?: EmissionCo2MinAggregateInputType
    _max?: EmissionCo2MaxAggregateInputType
  }

  export type EmissionCo2GroupByOutputType = {
    id: number
    name: string | null
    _count: EmissionCo2CountAggregateOutputType | null
    _avg: EmissionCo2AvgAggregateOutputType | null
    _sum: EmissionCo2SumAggregateOutputType | null
    _min: EmissionCo2MinAggregateOutputType | null
    _max: EmissionCo2MaxAggregateOutputType | null
  }

  type GetEmissionCo2GroupByPayload<T extends EmissionCo2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmissionCo2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmissionCo2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmissionCo2GroupByOutputType[P]>
            : GetScalarType<T[P], EmissionCo2GroupByOutputType[P]>
        }
      >
    >


  export type EmissionCo2Select<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | EmissionCo2$carDetailssArgs<ExtArgs>
    _count?: boolean | EmissionCo2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emissionCo2"]>

  export type EmissionCo2SelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EmissionCo2Include<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | EmissionCo2$carDetailssArgs<ExtArgs>
    _count?: boolean | EmissionCo2CountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EmissionCo2Payload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "EmissionCo2"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["emissionCo2"]>
    composites: {}
  }


  type EmissionCo2GetPayload<S extends boolean | null | undefined | EmissionCo2DefaultArgs> = $Result.GetResult<Prisma.$EmissionCo2Payload, S>

  type EmissionCo2CountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmissionCo2FindManyArgs, 'select' | 'include'> & {
      select?: EmissionCo2CountAggregateInputType | true
    }

  export interface EmissionCo2Delegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmissionCo2'], meta: { name: 'EmissionCo2' } }
    /**
     * Find zero or one EmissionCo2 that matches the filter.
     * @param {EmissionCo2FindUniqueArgs} args - Arguments to find a EmissionCo2
     * @example
     * // Get one EmissionCo2
     * const emissionCo2 = await prisma.emissionCo2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmissionCo2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmissionCo2FindUniqueArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EmissionCo2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmissionCo2FindUniqueOrThrowArgs} args - Arguments to find a EmissionCo2
     * @example
     * // Get one EmissionCo2
     * const emissionCo2 = await prisma.emissionCo2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmissionCo2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmissionCo2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EmissionCo2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2FindFirstArgs} args - Arguments to find a EmissionCo2
     * @example
     * // Get one EmissionCo2
     * const emissionCo2 = await prisma.emissionCo2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmissionCo2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmissionCo2FindFirstArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EmissionCo2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2FindFirstOrThrowArgs} args - Arguments to find a EmissionCo2
     * @example
     * // Get one EmissionCo2
     * const emissionCo2 = await prisma.emissionCo2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmissionCo2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmissionCo2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EmissionCo2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmissionCo2s
     * const emissionCo2s = await prisma.emissionCo2.findMany()
     * 
     * // Get first 10 EmissionCo2s
     * const emissionCo2s = await prisma.emissionCo2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emissionCo2WithIdOnly = await prisma.emissionCo2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmissionCo2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmissionCo2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EmissionCo2.
     * @param {EmissionCo2CreateArgs} args - Arguments to create a EmissionCo2.
     * @example
     * // Create one EmissionCo2
     * const EmissionCo2 = await prisma.emissionCo2.create({
     *   data: {
     *     // ... data to create a EmissionCo2
     *   }
     * })
     * 
    **/
    create<T extends EmissionCo2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmissionCo2CreateArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EmissionCo2s.
     *     @param {EmissionCo2CreateManyArgs} args - Arguments to create many EmissionCo2s.
     *     @example
     *     // Create many EmissionCo2s
     *     const emissionCo2 = await prisma.emissionCo2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmissionCo2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmissionCo2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmissionCo2.
     * @param {EmissionCo2DeleteArgs} args - Arguments to delete one EmissionCo2.
     * @example
     * // Delete one EmissionCo2
     * const EmissionCo2 = await prisma.emissionCo2.delete({
     *   where: {
     *     // ... filter to delete one EmissionCo2
     *   }
     * })
     * 
    **/
    delete<T extends EmissionCo2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmissionCo2DeleteArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EmissionCo2.
     * @param {EmissionCo2UpdateArgs} args - Arguments to update one EmissionCo2.
     * @example
     * // Update one EmissionCo2
     * const emissionCo2 = await prisma.emissionCo2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmissionCo2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmissionCo2UpdateArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EmissionCo2s.
     * @param {EmissionCo2DeleteManyArgs} args - Arguments to filter EmissionCo2s to delete.
     * @example
     * // Delete a few EmissionCo2s
     * const { count } = await prisma.emissionCo2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmissionCo2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmissionCo2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmissionCo2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmissionCo2s
     * const emissionCo2 = await prisma.emissionCo2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmissionCo2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmissionCo2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmissionCo2.
     * @param {EmissionCo2UpsertArgs} args - Arguments to update or create a EmissionCo2.
     * @example
     * // Update or create a EmissionCo2
     * const emissionCo2 = await prisma.emissionCo2.upsert({
     *   create: {
     *     // ... data to create a EmissionCo2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmissionCo2 we want to update
     *   }
     * })
    **/
    upsert<T extends EmissionCo2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmissionCo2UpsertArgs<ExtArgs>>
    ): Prisma__EmissionCo2Client<$Result.GetResult<Prisma.$EmissionCo2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EmissionCo2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2CountArgs} args - Arguments to filter EmissionCo2s to count.
     * @example
     * // Count the number of EmissionCo2s
     * const count = await prisma.emissionCo2.count({
     *   where: {
     *     // ... the filter for the EmissionCo2s we want to count
     *   }
     * })
    **/
    count<T extends EmissionCo2CountArgs>(
      args?: Subset<T, EmissionCo2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmissionCo2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmissionCo2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmissionCo2AggregateArgs>(args: Subset<T, EmissionCo2AggregateArgs>): Prisma.PrismaPromise<GetEmissionCo2AggregateType<T>>

    /**
     * Group by EmissionCo2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmissionCo2GroupByArgs} args - Group by arguments.
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
      T extends EmissionCo2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmissionCo2GroupByArgs['orderBy'] }
        : { orderBy?: EmissionCo2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmissionCo2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmissionCo2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmissionCo2 model
   */
  readonly fields: EmissionCo2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmissionCo2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmissionCo2Client<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends EmissionCo2$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, EmissionCo2$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EmissionCo2 model
   */ 
  interface EmissionCo2FieldRefs {
    readonly id: FieldRef<"EmissionCo2", 'Int'>
    readonly name: FieldRef<"EmissionCo2", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EmissionCo2 findUnique
   */
  export type EmissionCo2FindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * Filter, which EmissionCo2 to fetch.
     */
    where: EmissionCo2WhereUniqueInput
  }


  /**
   * EmissionCo2 findUniqueOrThrow
   */
  export type EmissionCo2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * Filter, which EmissionCo2 to fetch.
     */
    where: EmissionCo2WhereUniqueInput
  }


  /**
   * EmissionCo2 findFirst
   */
  export type EmissionCo2FindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * Filter, which EmissionCo2 to fetch.
     */
    where?: EmissionCo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCo2s to fetch.
     */
    orderBy?: EmissionCo2OrderByWithRelationInput | EmissionCo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionCo2s.
     */
    cursor?: EmissionCo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionCo2s.
     */
    distinct?: EmissionCo2ScalarFieldEnum | EmissionCo2ScalarFieldEnum[]
  }


  /**
   * EmissionCo2 findFirstOrThrow
   */
  export type EmissionCo2FindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * Filter, which EmissionCo2 to fetch.
     */
    where?: EmissionCo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCo2s to fetch.
     */
    orderBy?: EmissionCo2OrderByWithRelationInput | EmissionCo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmissionCo2s.
     */
    cursor?: EmissionCo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmissionCo2s.
     */
    distinct?: EmissionCo2ScalarFieldEnum | EmissionCo2ScalarFieldEnum[]
  }


  /**
   * EmissionCo2 findMany
   */
  export type EmissionCo2FindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * Filter, which EmissionCo2s to fetch.
     */
    where?: EmissionCo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmissionCo2s to fetch.
     */
    orderBy?: EmissionCo2OrderByWithRelationInput | EmissionCo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmissionCo2s.
     */
    cursor?: EmissionCo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmissionCo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmissionCo2s.
     */
    skip?: number
    distinct?: EmissionCo2ScalarFieldEnum | EmissionCo2ScalarFieldEnum[]
  }


  /**
   * EmissionCo2 create
   */
  export type EmissionCo2CreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * The data needed to create a EmissionCo2.
     */
    data?: XOR<EmissionCo2CreateInput, EmissionCo2UncheckedCreateInput>
  }


  /**
   * EmissionCo2 createMany
   */
  export type EmissionCo2CreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmissionCo2s.
     */
    data: EmissionCo2CreateManyInput | EmissionCo2CreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EmissionCo2 update
   */
  export type EmissionCo2UpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * The data needed to update a EmissionCo2.
     */
    data: XOR<EmissionCo2UpdateInput, EmissionCo2UncheckedUpdateInput>
    /**
     * Choose, which EmissionCo2 to update.
     */
    where: EmissionCo2WhereUniqueInput
  }


  /**
   * EmissionCo2 updateMany
   */
  export type EmissionCo2UpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmissionCo2s.
     */
    data: XOR<EmissionCo2UpdateManyMutationInput, EmissionCo2UncheckedUpdateManyInput>
    /**
     * Filter which EmissionCo2s to update
     */
    where?: EmissionCo2WhereInput
  }


  /**
   * EmissionCo2 upsert
   */
  export type EmissionCo2UpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * The filter to search for the EmissionCo2 to update in case it exists.
     */
    where: EmissionCo2WhereUniqueInput
    /**
     * In case the EmissionCo2 found by the `where` argument doesn't exist, create a new EmissionCo2 with this data.
     */
    create: XOR<EmissionCo2CreateInput, EmissionCo2UncheckedCreateInput>
    /**
     * In case the EmissionCo2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmissionCo2UpdateInput, EmissionCo2UncheckedUpdateInput>
  }


  /**
   * EmissionCo2 delete
   */
  export type EmissionCo2DeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
    /**
     * Filter which EmissionCo2 to delete.
     */
    where: EmissionCo2WhereUniqueInput
  }


  /**
   * EmissionCo2 deleteMany
   */
  export type EmissionCo2DeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmissionCo2s to delete
     */
    where?: EmissionCo2WhereInput
  }


  /**
   * EmissionCo2.carDetailss
   */
  export type EmissionCo2$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * EmissionCo2 without action
   */
  export type EmissionCo2DefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmissionCo2
     */
    select?: EmissionCo2Select<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmissionCo2Include<ExtArgs> | null
  }



  /**
   * Model Energy
   */

  export type AggregateEnergy = {
    _count: EnergyCountAggregateOutputType | null
    _avg: EnergyAvgAggregateOutputType | null
    _sum: EnergySumAggregateOutputType | null
    _min: EnergyMinAggregateOutputType | null
    _max: EnergyMaxAggregateOutputType | null
  }

  export type EnergyAvgAggregateOutputType = {
    id: number | null
  }

  export type EnergySumAggregateOutputType = {
    id: number | null
  }

  export type EnergyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EnergyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EnergyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EnergyAvgAggregateInputType = {
    id?: true
  }

  export type EnergySumAggregateInputType = {
    id?: true
  }

  export type EnergyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EnergyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EnergyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EnergyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Energy to aggregate.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Energy
    **/
    _count?: true | EnergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnergyMaxAggregateInputType
  }

  export type GetEnergyAggregateType<T extends EnergyAggregateArgs> = {
        [P in keyof T & keyof AggregateEnergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnergy[P]>
      : GetScalarType<T[P], AggregateEnergy[P]>
  }




  export type EnergyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnergyWhereInput
    orderBy?: EnergyOrderByWithAggregationInput | EnergyOrderByWithAggregationInput[]
    by: EnergyScalarFieldEnum[] | EnergyScalarFieldEnum
    having?: EnergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnergyCountAggregateInputType | true
    _avg?: EnergyAvgAggregateInputType
    _sum?: EnergySumAggregateInputType
    _min?: EnergyMinAggregateInputType
    _max?: EnergyMaxAggregateInputType
  }

  export type EnergyGroupByOutputType = {
    id: number
    name: string | null
    _count: EnergyCountAggregateOutputType | null
    _avg: EnergyAvgAggregateOutputType | null
    _sum: EnergySumAggregateOutputType | null
    _min: EnergyMinAggregateOutputType | null
    _max: EnergyMaxAggregateOutputType | null
  }

  type GetEnergyGroupByPayload<T extends EnergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnergyGroupByOutputType[P]>
            : GetScalarType<T[P], EnergyGroupByOutputType[P]>
        }
      >
    >


  export type EnergySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | Energy$carDetailssArgs<ExtArgs>
    _count?: boolean | EnergyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["energy"]>

  export type EnergySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EnergyInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | Energy$carDetailssArgs<ExtArgs>
    _count?: boolean | EnergyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EnergyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Energy"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["energy"]>
    composites: {}
  }


  type EnergyGetPayload<S extends boolean | null | undefined | EnergyDefaultArgs> = $Result.GetResult<Prisma.$EnergyPayload, S>

  type EnergyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EnergyFindManyArgs, 'select' | 'include'> & {
      select?: EnergyCountAggregateInputType | true
    }

  export interface EnergyDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Energy'], meta: { name: 'Energy' } }
    /**
     * Find zero or one Energy that matches the filter.
     * @param {EnergyFindUniqueArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnergyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EnergyFindUniqueArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Energy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EnergyFindUniqueOrThrowArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnergyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnergyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Energy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyFindFirstArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnergyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EnergyFindFirstArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Energy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyFindFirstOrThrowArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnergyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnergyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Energy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Energy
     * const energy = await prisma.energy.findMany()
     * 
     * // Get first 10 Energy
     * const energy = await prisma.energy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const energyWithIdOnly = await prisma.energy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnergyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnergyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Energy.
     * @param {EnergyCreateArgs} args - Arguments to create a Energy.
     * @example
     * // Create one Energy
     * const Energy = await prisma.energy.create({
     *   data: {
     *     // ... data to create a Energy
     *   }
     * })
     * 
    **/
    create<T extends EnergyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnergyCreateArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Energy.
     *     @param {EnergyCreateManyArgs} args - Arguments to create many Energy.
     *     @example
     *     // Create many Energy
     *     const energy = await prisma.energy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnergyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnergyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Energy.
     * @param {EnergyDeleteArgs} args - Arguments to delete one Energy.
     * @example
     * // Delete one Energy
     * const Energy = await prisma.energy.delete({
     *   where: {
     *     // ... filter to delete one Energy
     *   }
     * })
     * 
    **/
    delete<T extends EnergyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnergyDeleteArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Energy.
     * @param {EnergyUpdateArgs} args - Arguments to update one Energy.
     * @example
     * // Update one Energy
     * const energy = await prisma.energy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnergyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnergyUpdateArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Energy.
     * @param {EnergyDeleteManyArgs} args - Arguments to filter Energy to delete.
     * @example
     * // Delete a few Energy
     * const { count } = await prisma.energy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnergyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnergyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Energy
     * const energy = await prisma.energy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnergyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnergyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Energy.
     * @param {EnergyUpsertArgs} args - Arguments to update or create a Energy.
     * @example
     * // Update or create a Energy
     * const energy = await prisma.energy.upsert({
     *   create: {
     *     // ... data to create a Energy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Energy we want to update
     *   }
     * })
    **/
    upsert<T extends EnergyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnergyUpsertArgs<ExtArgs>>
    ): Prisma__EnergyClient<$Result.GetResult<Prisma.$EnergyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyCountArgs} args - Arguments to filter Energy to count.
     * @example
     * // Count the number of Energy
     * const count = await prisma.energy.count({
     *   where: {
     *     // ... the filter for the Energy we want to count
     *   }
     * })
    **/
    count<T extends EnergyCountArgs>(
      args?: Subset<T, EnergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnergyAggregateArgs>(args: Subset<T, EnergyAggregateArgs>): Prisma.PrismaPromise<GetEnergyAggregateType<T>>

    /**
     * Group by Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyGroupByArgs} args - Group by arguments.
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
      T extends EnergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnergyGroupByArgs['orderBy'] }
        : { orderBy?: EnergyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Energy model
   */
  readonly fields: EnergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Energy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnergyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends Energy$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, Energy$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Energy model
   */ 
  interface EnergyFieldRefs {
    readonly id: FieldRef<"Energy", 'Int'>
    readonly name: FieldRef<"Energy", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Energy findUnique
   */
  export type EnergyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where: EnergyWhereUniqueInput
  }


  /**
   * Energy findUniqueOrThrow
   */
  export type EnergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where: EnergyWhereUniqueInput
  }


  /**
   * Energy findFirst
   */
  export type EnergyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Energy.
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Energy.
     */
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }


  /**
   * Energy findFirstOrThrow
   */
  export type EnergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Energy.
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Energy.
     */
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }


  /**
   * Energy findMany
   */
  export type EnergyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * Filter, which Energy to fetch.
     */
    where?: EnergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Energy to fetch.
     */
    orderBy?: EnergyOrderByWithRelationInput | EnergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Energy.
     */
    cursor?: EnergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Energy.
     */
    skip?: number
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }


  /**
   * Energy create
   */
  export type EnergyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * The data needed to create a Energy.
     */
    data?: XOR<EnergyCreateInput, EnergyUncheckedCreateInput>
  }


  /**
   * Energy createMany
   */
  export type EnergyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Energy.
     */
    data: EnergyCreateManyInput | EnergyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Energy update
   */
  export type EnergyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * The data needed to update a Energy.
     */
    data: XOR<EnergyUpdateInput, EnergyUncheckedUpdateInput>
    /**
     * Choose, which Energy to update.
     */
    where: EnergyWhereUniqueInput
  }


  /**
   * Energy updateMany
   */
  export type EnergyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Energy.
     */
    data: XOR<EnergyUpdateManyMutationInput, EnergyUncheckedUpdateManyInput>
    /**
     * Filter which Energy to update
     */
    where?: EnergyWhereInput
  }


  /**
   * Energy upsert
   */
  export type EnergyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * The filter to search for the Energy to update in case it exists.
     */
    where: EnergyWhereUniqueInput
    /**
     * In case the Energy found by the `where` argument doesn't exist, create a new Energy with this data.
     */
    create: XOR<EnergyCreateInput, EnergyUncheckedCreateInput>
    /**
     * In case the Energy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnergyUpdateInput, EnergyUncheckedUpdateInput>
  }


  /**
   * Energy delete
   */
  export type EnergyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
    /**
     * Filter which Energy to delete.
     */
    where: EnergyWhereUniqueInput
  }


  /**
   * Energy deleteMany
   */
  export type EnergyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Energy to delete
     */
    where?: EnergyWhereInput
  }


  /**
   * Energy.carDetailss
   */
  export type Energy$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * Energy without action
   */
  export type EnergyDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Energy
     */
    select?: EnergySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnergyInclude<ExtArgs> | null
  }



  /**
   * Model EuroStandard
   */

  export type AggregateEuroStandard = {
    _count: EuroStandardCountAggregateOutputType | null
    _avg: EuroStandardAvgAggregateOutputType | null
    _sum: EuroStandardSumAggregateOutputType | null
    _min: EuroStandardMinAggregateOutputType | null
    _max: EuroStandardMaxAggregateOutputType | null
  }

  export type EuroStandardAvgAggregateOutputType = {
    id: number | null
  }

  export type EuroStandardSumAggregateOutputType = {
    id: number | null
  }

  export type EuroStandardMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EuroStandardMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EuroStandardCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EuroStandardAvgAggregateInputType = {
    id?: true
  }

  export type EuroStandardSumAggregateInputType = {
    id?: true
  }

  export type EuroStandardMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EuroStandardMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EuroStandardCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EuroStandardAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EuroStandard to aggregate.
     */
    where?: EuroStandardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EuroStandards to fetch.
     */
    orderBy?: EuroStandardOrderByWithRelationInput | EuroStandardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EuroStandardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EuroStandards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EuroStandards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EuroStandards
    **/
    _count?: true | EuroStandardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EuroStandardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EuroStandardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EuroStandardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EuroStandardMaxAggregateInputType
  }

  export type GetEuroStandardAggregateType<T extends EuroStandardAggregateArgs> = {
        [P in keyof T & keyof AggregateEuroStandard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEuroStandard[P]>
      : GetScalarType<T[P], AggregateEuroStandard[P]>
  }




  export type EuroStandardGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EuroStandardWhereInput
    orderBy?: EuroStandardOrderByWithAggregationInput | EuroStandardOrderByWithAggregationInput[]
    by: EuroStandardScalarFieldEnum[] | EuroStandardScalarFieldEnum
    having?: EuroStandardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EuroStandardCountAggregateInputType | true
    _avg?: EuroStandardAvgAggregateInputType
    _sum?: EuroStandardSumAggregateInputType
    _min?: EuroStandardMinAggregateInputType
    _max?: EuroStandardMaxAggregateInputType
  }

  export type EuroStandardGroupByOutputType = {
    id: number
    name: string | null
    _count: EuroStandardCountAggregateOutputType | null
    _avg: EuroStandardAvgAggregateOutputType | null
    _sum: EuroStandardSumAggregateOutputType | null
    _min: EuroStandardMinAggregateOutputType | null
    _max: EuroStandardMaxAggregateOutputType | null
  }

  type GetEuroStandardGroupByPayload<T extends EuroStandardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EuroStandardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EuroStandardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EuroStandardGroupByOutputType[P]>
            : GetScalarType<T[P], EuroStandardGroupByOutputType[P]>
        }
      >
    >


  export type EuroStandardSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | EuroStandard$carDetailssArgs<ExtArgs>
    _count?: boolean | EuroStandardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["euroStandard"]>

  export type EuroStandardSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EuroStandardInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | EuroStandard$carDetailssArgs<ExtArgs>
    _count?: boolean | EuroStandardCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EuroStandardPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "EuroStandard"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["euroStandard"]>
    composites: {}
  }


  type EuroStandardGetPayload<S extends boolean | null | undefined | EuroStandardDefaultArgs> = $Result.GetResult<Prisma.$EuroStandardPayload, S>

  type EuroStandardCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EuroStandardFindManyArgs, 'select' | 'include'> & {
      select?: EuroStandardCountAggregateInputType | true
    }

  export interface EuroStandardDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EuroStandard'], meta: { name: 'EuroStandard' } }
    /**
     * Find zero or one EuroStandard that matches the filter.
     * @param {EuroStandardFindUniqueArgs} args - Arguments to find a EuroStandard
     * @example
     * // Get one EuroStandard
     * const euroStandard = await prisma.euroStandard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EuroStandardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EuroStandardFindUniqueArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EuroStandard that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EuroStandardFindUniqueOrThrowArgs} args - Arguments to find a EuroStandard
     * @example
     * // Get one EuroStandard
     * const euroStandard = await prisma.euroStandard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EuroStandardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EuroStandardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EuroStandard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardFindFirstArgs} args - Arguments to find a EuroStandard
     * @example
     * // Get one EuroStandard
     * const euroStandard = await prisma.euroStandard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EuroStandardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EuroStandardFindFirstArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EuroStandard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardFindFirstOrThrowArgs} args - Arguments to find a EuroStandard
     * @example
     * // Get one EuroStandard
     * const euroStandard = await prisma.euroStandard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EuroStandardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EuroStandardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EuroStandards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EuroStandards
     * const euroStandards = await prisma.euroStandard.findMany()
     * 
     * // Get first 10 EuroStandards
     * const euroStandards = await prisma.euroStandard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const euroStandardWithIdOnly = await prisma.euroStandard.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EuroStandardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EuroStandardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EuroStandard.
     * @param {EuroStandardCreateArgs} args - Arguments to create a EuroStandard.
     * @example
     * // Create one EuroStandard
     * const EuroStandard = await prisma.euroStandard.create({
     *   data: {
     *     // ... data to create a EuroStandard
     *   }
     * })
     * 
    **/
    create<T extends EuroStandardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EuroStandardCreateArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EuroStandards.
     *     @param {EuroStandardCreateManyArgs} args - Arguments to create many EuroStandards.
     *     @example
     *     // Create many EuroStandards
     *     const euroStandard = await prisma.euroStandard.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EuroStandardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EuroStandardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EuroStandard.
     * @param {EuroStandardDeleteArgs} args - Arguments to delete one EuroStandard.
     * @example
     * // Delete one EuroStandard
     * const EuroStandard = await prisma.euroStandard.delete({
     *   where: {
     *     // ... filter to delete one EuroStandard
     *   }
     * })
     * 
    **/
    delete<T extends EuroStandardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EuroStandardDeleteArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EuroStandard.
     * @param {EuroStandardUpdateArgs} args - Arguments to update one EuroStandard.
     * @example
     * // Update one EuroStandard
     * const euroStandard = await prisma.euroStandard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EuroStandardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EuroStandardUpdateArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EuroStandards.
     * @param {EuroStandardDeleteManyArgs} args - Arguments to filter EuroStandards to delete.
     * @example
     * // Delete a few EuroStandards
     * const { count } = await prisma.euroStandard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EuroStandardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EuroStandardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EuroStandards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EuroStandards
     * const euroStandard = await prisma.euroStandard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EuroStandardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EuroStandardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EuroStandard.
     * @param {EuroStandardUpsertArgs} args - Arguments to update or create a EuroStandard.
     * @example
     * // Update or create a EuroStandard
     * const euroStandard = await prisma.euroStandard.upsert({
     *   create: {
     *     // ... data to create a EuroStandard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EuroStandard we want to update
     *   }
     * })
    **/
    upsert<T extends EuroStandardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EuroStandardUpsertArgs<ExtArgs>>
    ): Prisma__EuroStandardClient<$Result.GetResult<Prisma.$EuroStandardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EuroStandards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardCountArgs} args - Arguments to filter EuroStandards to count.
     * @example
     * // Count the number of EuroStandards
     * const count = await prisma.euroStandard.count({
     *   where: {
     *     // ... the filter for the EuroStandards we want to count
     *   }
     * })
    **/
    count<T extends EuroStandardCountArgs>(
      args?: Subset<T, EuroStandardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EuroStandardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EuroStandard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EuroStandardAggregateArgs>(args: Subset<T, EuroStandardAggregateArgs>): Prisma.PrismaPromise<GetEuroStandardAggregateType<T>>

    /**
     * Group by EuroStandard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EuroStandardGroupByArgs} args - Group by arguments.
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
      T extends EuroStandardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EuroStandardGroupByArgs['orderBy'] }
        : { orderBy?: EuroStandardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EuroStandardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEuroStandardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EuroStandard model
   */
  readonly fields: EuroStandardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EuroStandard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EuroStandardClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends EuroStandard$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, EuroStandard$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EuroStandard model
   */ 
  interface EuroStandardFieldRefs {
    readonly id: FieldRef<"EuroStandard", 'Int'>
    readonly name: FieldRef<"EuroStandard", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EuroStandard findUnique
   */
  export type EuroStandardFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * Filter, which EuroStandard to fetch.
     */
    where: EuroStandardWhereUniqueInput
  }


  /**
   * EuroStandard findUniqueOrThrow
   */
  export type EuroStandardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * Filter, which EuroStandard to fetch.
     */
    where: EuroStandardWhereUniqueInput
  }


  /**
   * EuroStandard findFirst
   */
  export type EuroStandardFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * Filter, which EuroStandard to fetch.
     */
    where?: EuroStandardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EuroStandards to fetch.
     */
    orderBy?: EuroStandardOrderByWithRelationInput | EuroStandardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EuroStandards.
     */
    cursor?: EuroStandardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EuroStandards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EuroStandards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EuroStandards.
     */
    distinct?: EuroStandardScalarFieldEnum | EuroStandardScalarFieldEnum[]
  }


  /**
   * EuroStandard findFirstOrThrow
   */
  export type EuroStandardFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * Filter, which EuroStandard to fetch.
     */
    where?: EuroStandardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EuroStandards to fetch.
     */
    orderBy?: EuroStandardOrderByWithRelationInput | EuroStandardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EuroStandards.
     */
    cursor?: EuroStandardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EuroStandards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EuroStandards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EuroStandards.
     */
    distinct?: EuroStandardScalarFieldEnum | EuroStandardScalarFieldEnum[]
  }


  /**
   * EuroStandard findMany
   */
  export type EuroStandardFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * Filter, which EuroStandards to fetch.
     */
    where?: EuroStandardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EuroStandards to fetch.
     */
    orderBy?: EuroStandardOrderByWithRelationInput | EuroStandardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EuroStandards.
     */
    cursor?: EuroStandardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EuroStandards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EuroStandards.
     */
    skip?: number
    distinct?: EuroStandardScalarFieldEnum | EuroStandardScalarFieldEnum[]
  }


  /**
   * EuroStandard create
   */
  export type EuroStandardCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * The data needed to create a EuroStandard.
     */
    data?: XOR<EuroStandardCreateInput, EuroStandardUncheckedCreateInput>
  }


  /**
   * EuroStandard createMany
   */
  export type EuroStandardCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EuroStandards.
     */
    data: EuroStandardCreateManyInput | EuroStandardCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EuroStandard update
   */
  export type EuroStandardUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * The data needed to update a EuroStandard.
     */
    data: XOR<EuroStandardUpdateInput, EuroStandardUncheckedUpdateInput>
    /**
     * Choose, which EuroStandard to update.
     */
    where: EuroStandardWhereUniqueInput
  }


  /**
   * EuroStandard updateMany
   */
  export type EuroStandardUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EuroStandards.
     */
    data: XOR<EuroStandardUpdateManyMutationInput, EuroStandardUncheckedUpdateManyInput>
    /**
     * Filter which EuroStandards to update
     */
    where?: EuroStandardWhereInput
  }


  /**
   * EuroStandard upsert
   */
  export type EuroStandardUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * The filter to search for the EuroStandard to update in case it exists.
     */
    where: EuroStandardWhereUniqueInput
    /**
     * In case the EuroStandard found by the `where` argument doesn't exist, create a new EuroStandard with this data.
     */
    create: XOR<EuroStandardCreateInput, EuroStandardUncheckedCreateInput>
    /**
     * In case the EuroStandard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EuroStandardUpdateInput, EuroStandardUncheckedUpdateInput>
  }


  /**
   * EuroStandard delete
   */
  export type EuroStandardDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
    /**
     * Filter which EuroStandard to delete.
     */
    where: EuroStandardWhereUniqueInput
  }


  /**
   * EuroStandard deleteMany
   */
  export type EuroStandardDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EuroStandards to delete
     */
    where?: EuroStandardWhereInput
  }


  /**
   * EuroStandard.carDetailss
   */
  export type EuroStandard$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * EuroStandard without action
   */
  export type EuroStandardDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EuroStandard
     */
    select?: EuroStandardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EuroStandardInclude<ExtArgs> | null
  }



  /**
   * Model ExteriorColor
   */

  export type AggregateExteriorColor = {
    _count: ExteriorColorCountAggregateOutputType | null
    _avg: ExteriorColorAvgAggregateOutputType | null
    _sum: ExteriorColorSumAggregateOutputType | null
    _min: ExteriorColorMinAggregateOutputType | null
    _max: ExteriorColorMaxAggregateOutputType | null
  }

  export type ExteriorColorAvgAggregateOutputType = {
    id: number | null
  }

  export type ExteriorColorSumAggregateOutputType = {
    id: number | null
  }

  export type ExteriorColorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ExteriorColorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ExteriorColorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ExteriorColorAvgAggregateInputType = {
    id?: true
  }

  export type ExteriorColorSumAggregateInputType = {
    id?: true
  }

  export type ExteriorColorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExteriorColorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExteriorColorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ExteriorColorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExteriorColor to aggregate.
     */
    where?: ExteriorColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExteriorColors to fetch.
     */
    orderBy?: ExteriorColorOrderByWithRelationInput | ExteriorColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExteriorColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExteriorColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExteriorColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExteriorColors
    **/
    _count?: true | ExteriorColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExteriorColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExteriorColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExteriorColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExteriorColorMaxAggregateInputType
  }

  export type GetExteriorColorAggregateType<T extends ExteriorColorAggregateArgs> = {
        [P in keyof T & keyof AggregateExteriorColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExteriorColor[P]>
      : GetScalarType<T[P], AggregateExteriorColor[P]>
  }




  export type ExteriorColorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExteriorColorWhereInput
    orderBy?: ExteriorColorOrderByWithAggregationInput | ExteriorColorOrderByWithAggregationInput[]
    by: ExteriorColorScalarFieldEnum[] | ExteriorColorScalarFieldEnum
    having?: ExteriorColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExteriorColorCountAggregateInputType | true
    _avg?: ExteriorColorAvgAggregateInputType
    _sum?: ExteriorColorSumAggregateInputType
    _min?: ExteriorColorMinAggregateInputType
    _max?: ExteriorColorMaxAggregateInputType
  }

  export type ExteriorColorGroupByOutputType = {
    id: number
    name: string | null
    _count: ExteriorColorCountAggregateOutputType | null
    _avg: ExteriorColorAvgAggregateOutputType | null
    _sum: ExteriorColorSumAggregateOutputType | null
    _min: ExteriorColorMinAggregateOutputType | null
    _max: ExteriorColorMaxAggregateOutputType | null
  }

  type GetExteriorColorGroupByPayload<T extends ExteriorColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExteriorColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExteriorColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExteriorColorGroupByOutputType[P]>
            : GetScalarType<T[P], ExteriorColorGroupByOutputType[P]>
        }
      >
    >


  export type ExteriorColorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | ExteriorColor$carDetailssArgs<ExtArgs>
    _count?: boolean | ExteriorColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exteriorColor"]>

  export type ExteriorColorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ExteriorColorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | ExteriorColor$carDetailssArgs<ExtArgs>
    _count?: boolean | ExteriorColorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ExteriorColorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ExteriorColor"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["exteriorColor"]>
    composites: {}
  }


  type ExteriorColorGetPayload<S extends boolean | null | undefined | ExteriorColorDefaultArgs> = $Result.GetResult<Prisma.$ExteriorColorPayload, S>

  type ExteriorColorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExteriorColorFindManyArgs, 'select' | 'include'> & {
      select?: ExteriorColorCountAggregateInputType | true
    }

  export interface ExteriorColorDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExteriorColor'], meta: { name: 'ExteriorColor' } }
    /**
     * Find zero or one ExteriorColor that matches the filter.
     * @param {ExteriorColorFindUniqueArgs} args - Arguments to find a ExteriorColor
     * @example
     * // Get one ExteriorColor
     * const exteriorColor = await prisma.exteriorColor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExteriorColorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExteriorColorFindUniqueArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExteriorColor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExteriorColorFindUniqueOrThrowArgs} args - Arguments to find a ExteriorColor
     * @example
     * // Get one ExteriorColor
     * const exteriorColor = await prisma.exteriorColor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExteriorColorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExteriorColorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExteriorColor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorFindFirstArgs} args - Arguments to find a ExteriorColor
     * @example
     * // Get one ExteriorColor
     * const exteriorColor = await prisma.exteriorColor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExteriorColorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExteriorColorFindFirstArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExteriorColor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorFindFirstOrThrowArgs} args - Arguments to find a ExteriorColor
     * @example
     * // Get one ExteriorColor
     * const exteriorColor = await prisma.exteriorColor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExteriorColorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExteriorColorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExteriorColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExteriorColors
     * const exteriorColors = await prisma.exteriorColor.findMany()
     * 
     * // Get first 10 ExteriorColors
     * const exteriorColors = await prisma.exteriorColor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exteriorColorWithIdOnly = await prisma.exteriorColor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExteriorColorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExteriorColorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExteriorColor.
     * @param {ExteriorColorCreateArgs} args - Arguments to create a ExteriorColor.
     * @example
     * // Create one ExteriorColor
     * const ExteriorColor = await prisma.exteriorColor.create({
     *   data: {
     *     // ... data to create a ExteriorColor
     *   }
     * })
     * 
    **/
    create<T extends ExteriorColorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExteriorColorCreateArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExteriorColors.
     *     @param {ExteriorColorCreateManyArgs} args - Arguments to create many ExteriorColors.
     *     @example
     *     // Create many ExteriorColors
     *     const exteriorColor = await prisma.exteriorColor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExteriorColorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExteriorColorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExteriorColor.
     * @param {ExteriorColorDeleteArgs} args - Arguments to delete one ExteriorColor.
     * @example
     * // Delete one ExteriorColor
     * const ExteriorColor = await prisma.exteriorColor.delete({
     *   where: {
     *     // ... filter to delete one ExteriorColor
     *   }
     * })
     * 
    **/
    delete<T extends ExteriorColorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExteriorColorDeleteArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExteriorColor.
     * @param {ExteriorColorUpdateArgs} args - Arguments to update one ExteriorColor.
     * @example
     * // Update one ExteriorColor
     * const exteriorColor = await prisma.exteriorColor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExteriorColorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExteriorColorUpdateArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExteriorColors.
     * @param {ExteriorColorDeleteManyArgs} args - Arguments to filter ExteriorColors to delete.
     * @example
     * // Delete a few ExteriorColors
     * const { count } = await prisma.exteriorColor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExteriorColorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExteriorColorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExteriorColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExteriorColors
     * const exteriorColor = await prisma.exteriorColor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExteriorColorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExteriorColorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExteriorColor.
     * @param {ExteriorColorUpsertArgs} args - Arguments to update or create a ExteriorColor.
     * @example
     * // Update or create a ExteriorColor
     * const exteriorColor = await prisma.exteriorColor.upsert({
     *   create: {
     *     // ... data to create a ExteriorColor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExteriorColor we want to update
     *   }
     * })
    **/
    upsert<T extends ExteriorColorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExteriorColorUpsertArgs<ExtArgs>>
    ): Prisma__ExteriorColorClient<$Result.GetResult<Prisma.$ExteriorColorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExteriorColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorCountArgs} args - Arguments to filter ExteriorColors to count.
     * @example
     * // Count the number of ExteriorColors
     * const count = await prisma.exteriorColor.count({
     *   where: {
     *     // ... the filter for the ExteriorColors we want to count
     *   }
     * })
    **/
    count<T extends ExteriorColorCountArgs>(
      args?: Subset<T, ExteriorColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExteriorColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExteriorColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExteriorColorAggregateArgs>(args: Subset<T, ExteriorColorAggregateArgs>): Prisma.PrismaPromise<GetExteriorColorAggregateType<T>>

    /**
     * Group by ExteriorColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExteriorColorGroupByArgs} args - Group by arguments.
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
      T extends ExteriorColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExteriorColorGroupByArgs['orderBy'] }
        : { orderBy?: ExteriorColorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExteriorColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExteriorColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExteriorColor model
   */
  readonly fields: ExteriorColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExteriorColor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExteriorColorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends ExteriorColor$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, ExteriorColor$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExteriorColor model
   */ 
  interface ExteriorColorFieldRefs {
    readonly id: FieldRef<"ExteriorColor", 'Int'>
    readonly name: FieldRef<"ExteriorColor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ExteriorColor findUnique
   */
  export type ExteriorColorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * Filter, which ExteriorColor to fetch.
     */
    where: ExteriorColorWhereUniqueInput
  }


  /**
   * ExteriorColor findUniqueOrThrow
   */
  export type ExteriorColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * Filter, which ExteriorColor to fetch.
     */
    where: ExteriorColorWhereUniqueInput
  }


  /**
   * ExteriorColor findFirst
   */
  export type ExteriorColorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * Filter, which ExteriorColor to fetch.
     */
    where?: ExteriorColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExteriorColors to fetch.
     */
    orderBy?: ExteriorColorOrderByWithRelationInput | ExteriorColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExteriorColors.
     */
    cursor?: ExteriorColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExteriorColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExteriorColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExteriorColors.
     */
    distinct?: ExteriorColorScalarFieldEnum | ExteriorColorScalarFieldEnum[]
  }


  /**
   * ExteriorColor findFirstOrThrow
   */
  export type ExteriorColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * Filter, which ExteriorColor to fetch.
     */
    where?: ExteriorColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExteriorColors to fetch.
     */
    orderBy?: ExteriorColorOrderByWithRelationInput | ExteriorColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExteriorColors.
     */
    cursor?: ExteriorColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExteriorColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExteriorColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExteriorColors.
     */
    distinct?: ExteriorColorScalarFieldEnum | ExteriorColorScalarFieldEnum[]
  }


  /**
   * ExteriorColor findMany
   */
  export type ExteriorColorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * Filter, which ExteriorColors to fetch.
     */
    where?: ExteriorColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExteriorColors to fetch.
     */
    orderBy?: ExteriorColorOrderByWithRelationInput | ExteriorColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExteriorColors.
     */
    cursor?: ExteriorColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExteriorColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExteriorColors.
     */
    skip?: number
    distinct?: ExteriorColorScalarFieldEnum | ExteriorColorScalarFieldEnum[]
  }


  /**
   * ExteriorColor create
   */
  export type ExteriorColorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * The data needed to create a ExteriorColor.
     */
    data?: XOR<ExteriorColorCreateInput, ExteriorColorUncheckedCreateInput>
  }


  /**
   * ExteriorColor createMany
   */
  export type ExteriorColorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExteriorColors.
     */
    data: ExteriorColorCreateManyInput | ExteriorColorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExteriorColor update
   */
  export type ExteriorColorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * The data needed to update a ExteriorColor.
     */
    data: XOR<ExteriorColorUpdateInput, ExteriorColorUncheckedUpdateInput>
    /**
     * Choose, which ExteriorColor to update.
     */
    where: ExteriorColorWhereUniqueInput
  }


  /**
   * ExteriorColor updateMany
   */
  export type ExteriorColorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExteriorColors.
     */
    data: XOR<ExteriorColorUpdateManyMutationInput, ExteriorColorUncheckedUpdateManyInput>
    /**
     * Filter which ExteriorColors to update
     */
    where?: ExteriorColorWhereInput
  }


  /**
   * ExteriorColor upsert
   */
  export type ExteriorColorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * The filter to search for the ExteriorColor to update in case it exists.
     */
    where: ExteriorColorWhereUniqueInput
    /**
     * In case the ExteriorColor found by the `where` argument doesn't exist, create a new ExteriorColor with this data.
     */
    create: XOR<ExteriorColorCreateInput, ExteriorColorUncheckedCreateInput>
    /**
     * In case the ExteriorColor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExteriorColorUpdateInput, ExteriorColorUncheckedUpdateInput>
  }


  /**
   * ExteriorColor delete
   */
  export type ExteriorColorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
    /**
     * Filter which ExteriorColor to delete.
     */
    where: ExteriorColorWhereUniqueInput
  }


  /**
   * ExteriorColor deleteMany
   */
  export type ExteriorColorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExteriorColors to delete
     */
    where?: ExteriorColorWhereInput
  }


  /**
   * ExteriorColor.carDetailss
   */
  export type ExteriorColor$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * ExteriorColor without action
   */
  export type ExteriorColorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExteriorColor
     */
    select?: ExteriorColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExteriorColorInclude<ExtArgs> | null
  }



  /**
   * Model Origin
   */

  export type AggregateOrigin = {
    _count: OriginCountAggregateOutputType | null
    _avg: OriginAvgAggregateOutputType | null
    _sum: OriginSumAggregateOutputType | null
    _min: OriginMinAggregateOutputType | null
    _max: OriginMaxAggregateOutputType | null
  }

  export type OriginAvgAggregateOutputType = {
    id: number | null
  }

  export type OriginSumAggregateOutputType = {
    id: number | null
  }

  export type OriginMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OriginMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OriginCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OriginAvgAggregateInputType = {
    id?: true
  }

  export type OriginSumAggregateInputType = {
    id?: true
  }

  export type OriginMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OriginMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OriginCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OriginAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Origin to aggregate.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Origins
    **/
    _count?: true | OriginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OriginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OriginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginMaxAggregateInputType
  }

  export type GetOriginAggregateType<T extends OriginAggregateArgs> = {
        [P in keyof T & keyof AggregateOrigin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrigin[P]>
      : GetScalarType<T[P], AggregateOrigin[P]>
  }




  export type OriginGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OriginWhereInput
    orderBy?: OriginOrderByWithAggregationInput | OriginOrderByWithAggregationInput[]
    by: OriginScalarFieldEnum[] | OriginScalarFieldEnum
    having?: OriginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginCountAggregateInputType | true
    _avg?: OriginAvgAggregateInputType
    _sum?: OriginSumAggregateInputType
    _min?: OriginMinAggregateInputType
    _max?: OriginMaxAggregateInputType
  }

  export type OriginGroupByOutputType = {
    id: number
    name: string | null
    _count: OriginCountAggregateOutputType | null
    _avg: OriginAvgAggregateOutputType | null
    _sum: OriginSumAggregateOutputType | null
    _min: OriginMinAggregateOutputType | null
    _max: OriginMaxAggregateOutputType | null
  }

  type GetOriginGroupByPayload<T extends OriginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginGroupByOutputType[P]>
            : GetScalarType<T[P], OriginGroupByOutputType[P]>
        }
      >
    >


  export type OriginSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | Origin$carDetailssArgs<ExtArgs>
    _count?: boolean | OriginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OriginInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | Origin$carDetailssArgs<ExtArgs>
    _count?: boolean | OriginCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OriginPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Origin"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["origin"]>
    composites: {}
  }


  type OriginGetPayload<S extends boolean | null | undefined | OriginDefaultArgs> = $Result.GetResult<Prisma.$OriginPayload, S>

  type OriginCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OriginFindManyArgs, 'select' | 'include'> & {
      select?: OriginCountAggregateInputType | true
    }

  export interface OriginDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Origin'], meta: { name: 'Origin' } }
    /**
     * Find zero or one Origin that matches the filter.
     * @param {OriginFindUniqueArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OriginFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OriginFindUniqueArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Origin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OriginFindUniqueOrThrowArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OriginFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OriginFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Origin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindFirstArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OriginFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OriginFindFirstArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Origin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindFirstOrThrowArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OriginFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OriginFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Origins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Origins
     * const origins = await prisma.origin.findMany()
     * 
     * // Get first 10 Origins
     * const origins = await prisma.origin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originWithIdOnly = await prisma.origin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OriginFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OriginFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Origin.
     * @param {OriginCreateArgs} args - Arguments to create a Origin.
     * @example
     * // Create one Origin
     * const Origin = await prisma.origin.create({
     *   data: {
     *     // ... data to create a Origin
     *   }
     * })
     * 
    **/
    create<T extends OriginCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OriginCreateArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Origins.
     *     @param {OriginCreateManyArgs} args - Arguments to create many Origins.
     *     @example
     *     // Create many Origins
     *     const origin = await prisma.origin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OriginCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OriginCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Origin.
     * @param {OriginDeleteArgs} args - Arguments to delete one Origin.
     * @example
     * // Delete one Origin
     * const Origin = await prisma.origin.delete({
     *   where: {
     *     // ... filter to delete one Origin
     *   }
     * })
     * 
    **/
    delete<T extends OriginDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OriginDeleteArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Origin.
     * @param {OriginUpdateArgs} args - Arguments to update one Origin.
     * @example
     * // Update one Origin
     * const origin = await prisma.origin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OriginUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OriginUpdateArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Origins.
     * @param {OriginDeleteManyArgs} args - Arguments to filter Origins to delete.
     * @example
     * // Delete a few Origins
     * const { count } = await prisma.origin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OriginDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OriginDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Origins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Origins
     * const origin = await prisma.origin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OriginUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OriginUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Origin.
     * @param {OriginUpsertArgs} args - Arguments to update or create a Origin.
     * @example
     * // Update or create a Origin
     * const origin = await prisma.origin.upsert({
     *   create: {
     *     // ... data to create a Origin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Origin we want to update
     *   }
     * })
    **/
    upsert<T extends OriginUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OriginUpsertArgs<ExtArgs>>
    ): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Origins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginCountArgs} args - Arguments to filter Origins to count.
     * @example
     * // Count the number of Origins
     * const count = await prisma.origin.count({
     *   where: {
     *     // ... the filter for the Origins we want to count
     *   }
     * })
    **/
    count<T extends OriginCountArgs>(
      args?: Subset<T, OriginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Origin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginAggregateArgs>(args: Subset<T, OriginAggregateArgs>): Prisma.PrismaPromise<GetOriginAggregateType<T>>

    /**
     * Group by Origin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginGroupByArgs} args - Group by arguments.
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
      T extends OriginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginGroupByArgs['orderBy'] }
        : { orderBy?: OriginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Origin model
   */
  readonly fields: OriginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Origin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends Origin$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, Origin$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Origin model
   */ 
  interface OriginFieldRefs {
    readonly id: FieldRef<"Origin", 'Int'>
    readonly name: FieldRef<"Origin", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Origin findUnique
   */
  export type OriginFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where: OriginWhereUniqueInput
  }


  /**
   * Origin findUniqueOrThrow
   */
  export type OriginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where: OriginWhereUniqueInput
  }


  /**
   * Origin findFirst
   */
  export type OriginFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Origins.
     */
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }


  /**
   * Origin findFirstOrThrow
   */
  export type OriginFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Origins.
     */
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }


  /**
   * Origin findMany
   */
  export type OriginFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origins to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }


  /**
   * Origin create
   */
  export type OriginCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The data needed to create a Origin.
     */
    data?: XOR<OriginCreateInput, OriginUncheckedCreateInput>
  }


  /**
   * Origin createMany
   */
  export type OriginCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Origins.
     */
    data: OriginCreateManyInput | OriginCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Origin update
   */
  export type OriginUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The data needed to update a Origin.
     */
    data: XOR<OriginUpdateInput, OriginUncheckedUpdateInput>
    /**
     * Choose, which Origin to update.
     */
    where: OriginWhereUniqueInput
  }


  /**
   * Origin updateMany
   */
  export type OriginUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Origins.
     */
    data: XOR<OriginUpdateManyMutationInput, OriginUncheckedUpdateManyInput>
    /**
     * Filter which Origins to update
     */
    where?: OriginWhereInput
  }


  /**
   * Origin upsert
   */
  export type OriginUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The filter to search for the Origin to update in case it exists.
     */
    where: OriginWhereUniqueInput
    /**
     * In case the Origin found by the `where` argument doesn't exist, create a new Origin with this data.
     */
    create: XOR<OriginCreateInput, OriginUncheckedCreateInput>
    /**
     * In case the Origin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginUpdateInput, OriginUncheckedUpdateInput>
  }


  /**
   * Origin delete
   */
  export type OriginDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter which Origin to delete.
     */
    where: OriginWhereUniqueInput
  }


  /**
   * Origin deleteMany
   */
  export type OriginDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Origins to delete
     */
    where?: OriginWhereInput
  }


  /**
   * Origin.carDetailss
   */
  export type Origin$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * Origin without action
   */
  export type OriginDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OriginInclude<ExtArgs> | null
  }



  /**
   * Model Upholstery
   */

  export type AggregateUpholstery = {
    _count: UpholsteryCountAggregateOutputType | null
    _avg: UpholsteryAvgAggregateOutputType | null
    _sum: UpholsterySumAggregateOutputType | null
    _min: UpholsteryMinAggregateOutputType | null
    _max: UpholsteryMaxAggregateOutputType | null
  }

  export type UpholsteryAvgAggregateOutputType = {
    id: number | null
  }

  export type UpholsterySumAggregateOutputType = {
    id: number | null
  }

  export type UpholsteryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UpholsteryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UpholsteryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UpholsteryAvgAggregateInputType = {
    id?: true
  }

  export type UpholsterySumAggregateInputType = {
    id?: true
  }

  export type UpholsteryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UpholsteryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UpholsteryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UpholsteryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upholstery to aggregate.
     */
    where?: UpholsteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upholsteries to fetch.
     */
    orderBy?: UpholsteryOrderByWithRelationInput | UpholsteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpholsteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upholsteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upholsteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upholsteries
    **/
    _count?: true | UpholsteryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UpholsteryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UpholsterySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpholsteryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpholsteryMaxAggregateInputType
  }

  export type GetUpholsteryAggregateType<T extends UpholsteryAggregateArgs> = {
        [P in keyof T & keyof AggregateUpholstery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpholstery[P]>
      : GetScalarType<T[P], AggregateUpholstery[P]>
  }




  export type UpholsteryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UpholsteryWhereInput
    orderBy?: UpholsteryOrderByWithAggregationInput | UpholsteryOrderByWithAggregationInput[]
    by: UpholsteryScalarFieldEnum[] | UpholsteryScalarFieldEnum
    having?: UpholsteryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpholsteryCountAggregateInputType | true
    _avg?: UpholsteryAvgAggregateInputType
    _sum?: UpholsterySumAggregateInputType
    _min?: UpholsteryMinAggregateInputType
    _max?: UpholsteryMaxAggregateInputType
  }

  export type UpholsteryGroupByOutputType = {
    id: number
    name: string | null
    _count: UpholsteryCountAggregateOutputType | null
    _avg: UpholsteryAvgAggregateOutputType | null
    _sum: UpholsterySumAggregateOutputType | null
    _min: UpholsteryMinAggregateOutputType | null
    _max: UpholsteryMaxAggregateOutputType | null
  }

  type GetUpholsteryGroupByPayload<T extends UpholsteryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpholsteryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpholsteryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpholsteryGroupByOutputType[P]>
            : GetScalarType<T[P], UpholsteryGroupByOutputType[P]>
        }
      >
    >


  export type UpholsterySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    carDetailss?: boolean | Upholstery$carDetailssArgs<ExtArgs>
    _count?: boolean | UpholsteryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upholstery"]>

  export type UpholsterySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UpholsteryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carDetailss?: boolean | Upholstery$carDetailssArgs<ExtArgs>
    _count?: boolean | UpholsteryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UpholsteryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Upholstery"
    objects: {
      carDetailss: Prisma.$carDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["upholstery"]>
    composites: {}
  }


  type UpholsteryGetPayload<S extends boolean | null | undefined | UpholsteryDefaultArgs> = $Result.GetResult<Prisma.$UpholsteryPayload, S>

  type UpholsteryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UpholsteryFindManyArgs, 'select' | 'include'> & {
      select?: UpholsteryCountAggregateInputType | true
    }

  export interface UpholsteryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upholstery'], meta: { name: 'Upholstery' } }
    /**
     * Find zero or one Upholstery that matches the filter.
     * @param {UpholsteryFindUniqueArgs} args - Arguments to find a Upholstery
     * @example
     * // Get one Upholstery
     * const upholstery = await prisma.upholstery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UpholsteryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UpholsteryFindUniqueArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Upholstery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UpholsteryFindUniqueOrThrowArgs} args - Arguments to find a Upholstery
     * @example
     * // Get one Upholstery
     * const upholstery = await prisma.upholstery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UpholsteryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UpholsteryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Upholstery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryFindFirstArgs} args - Arguments to find a Upholstery
     * @example
     * // Get one Upholstery
     * const upholstery = await prisma.upholstery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UpholsteryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UpholsteryFindFirstArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Upholstery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryFindFirstOrThrowArgs} args - Arguments to find a Upholstery
     * @example
     * // Get one Upholstery
     * const upholstery = await prisma.upholstery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UpholsteryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UpholsteryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Upholsteries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upholsteries
     * const upholsteries = await prisma.upholstery.findMany()
     * 
     * // Get first 10 Upholsteries
     * const upholsteries = await prisma.upholstery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upholsteryWithIdOnly = await prisma.upholstery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UpholsteryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UpholsteryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Upholstery.
     * @param {UpholsteryCreateArgs} args - Arguments to create a Upholstery.
     * @example
     * // Create one Upholstery
     * const Upholstery = await prisma.upholstery.create({
     *   data: {
     *     // ... data to create a Upholstery
     *   }
     * })
     * 
    **/
    create<T extends UpholsteryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UpholsteryCreateArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Upholsteries.
     *     @param {UpholsteryCreateManyArgs} args - Arguments to create many Upholsteries.
     *     @example
     *     // Create many Upholsteries
     *     const upholstery = await prisma.upholstery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UpholsteryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UpholsteryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Upholstery.
     * @param {UpholsteryDeleteArgs} args - Arguments to delete one Upholstery.
     * @example
     * // Delete one Upholstery
     * const Upholstery = await prisma.upholstery.delete({
     *   where: {
     *     // ... filter to delete one Upholstery
     *   }
     * })
     * 
    **/
    delete<T extends UpholsteryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UpholsteryDeleteArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Upholstery.
     * @param {UpholsteryUpdateArgs} args - Arguments to update one Upholstery.
     * @example
     * // Update one Upholstery
     * const upholstery = await prisma.upholstery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UpholsteryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UpholsteryUpdateArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Upholsteries.
     * @param {UpholsteryDeleteManyArgs} args - Arguments to filter Upholsteries to delete.
     * @example
     * // Delete a few Upholsteries
     * const { count } = await prisma.upholstery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UpholsteryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UpholsteryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upholsteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upholsteries
     * const upholstery = await prisma.upholstery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UpholsteryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UpholsteryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Upholstery.
     * @param {UpholsteryUpsertArgs} args - Arguments to update or create a Upholstery.
     * @example
     * // Update or create a Upholstery
     * const upholstery = await prisma.upholstery.upsert({
     *   create: {
     *     // ... data to create a Upholstery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upholstery we want to update
     *   }
     * })
    **/
    upsert<T extends UpholsteryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UpholsteryUpsertArgs<ExtArgs>>
    ): Prisma__UpholsteryClient<$Result.GetResult<Prisma.$UpholsteryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Upholsteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryCountArgs} args - Arguments to filter Upholsteries to count.
     * @example
     * // Count the number of Upholsteries
     * const count = await prisma.upholstery.count({
     *   where: {
     *     // ... the filter for the Upholsteries we want to count
     *   }
     * })
    **/
    count<T extends UpholsteryCountArgs>(
      args?: Subset<T, UpholsteryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpholsteryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upholstery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpholsteryAggregateArgs>(args: Subset<T, UpholsteryAggregateArgs>): Prisma.PrismaPromise<GetUpholsteryAggregateType<T>>

    /**
     * Group by Upholstery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpholsteryGroupByArgs} args - Group by arguments.
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
      T extends UpholsteryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpholsteryGroupByArgs['orderBy'] }
        : { orderBy?: UpholsteryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UpholsteryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpholsteryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upholstery model
   */
  readonly fields: UpholsteryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upholstery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpholsteryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carDetailss<T extends Upholstery$carDetailssArgs<ExtArgs> = {}>(args?: Subset<T, Upholstery$carDetailssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Upholstery model
   */ 
  interface UpholsteryFieldRefs {
    readonly id: FieldRef<"Upholstery", 'Int'>
    readonly name: FieldRef<"Upholstery", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Upholstery findUnique
   */
  export type UpholsteryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * Filter, which Upholstery to fetch.
     */
    where: UpholsteryWhereUniqueInput
  }


  /**
   * Upholstery findUniqueOrThrow
   */
  export type UpholsteryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * Filter, which Upholstery to fetch.
     */
    where: UpholsteryWhereUniqueInput
  }


  /**
   * Upholstery findFirst
   */
  export type UpholsteryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * Filter, which Upholstery to fetch.
     */
    where?: UpholsteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upholsteries to fetch.
     */
    orderBy?: UpholsteryOrderByWithRelationInput | UpholsteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upholsteries.
     */
    cursor?: UpholsteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upholsteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upholsteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upholsteries.
     */
    distinct?: UpholsteryScalarFieldEnum | UpholsteryScalarFieldEnum[]
  }


  /**
   * Upholstery findFirstOrThrow
   */
  export type UpholsteryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * Filter, which Upholstery to fetch.
     */
    where?: UpholsteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upholsteries to fetch.
     */
    orderBy?: UpholsteryOrderByWithRelationInput | UpholsteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upholsteries.
     */
    cursor?: UpholsteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upholsteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upholsteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upholsteries.
     */
    distinct?: UpholsteryScalarFieldEnum | UpholsteryScalarFieldEnum[]
  }


  /**
   * Upholstery findMany
   */
  export type UpholsteryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * Filter, which Upholsteries to fetch.
     */
    where?: UpholsteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upholsteries to fetch.
     */
    orderBy?: UpholsteryOrderByWithRelationInput | UpholsteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upholsteries.
     */
    cursor?: UpholsteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upholsteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upholsteries.
     */
    skip?: number
    distinct?: UpholsteryScalarFieldEnum | UpholsteryScalarFieldEnum[]
  }


  /**
   * Upholstery create
   */
  export type UpholsteryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * The data needed to create a Upholstery.
     */
    data?: XOR<UpholsteryCreateInput, UpholsteryUncheckedCreateInput>
  }


  /**
   * Upholstery createMany
   */
  export type UpholsteryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upholsteries.
     */
    data: UpholsteryCreateManyInput | UpholsteryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Upholstery update
   */
  export type UpholsteryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * The data needed to update a Upholstery.
     */
    data: XOR<UpholsteryUpdateInput, UpholsteryUncheckedUpdateInput>
    /**
     * Choose, which Upholstery to update.
     */
    where: UpholsteryWhereUniqueInput
  }


  /**
   * Upholstery updateMany
   */
  export type UpholsteryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upholsteries.
     */
    data: XOR<UpholsteryUpdateManyMutationInput, UpholsteryUncheckedUpdateManyInput>
    /**
     * Filter which Upholsteries to update
     */
    where?: UpholsteryWhereInput
  }


  /**
   * Upholstery upsert
   */
  export type UpholsteryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * The filter to search for the Upholstery to update in case it exists.
     */
    where: UpholsteryWhereUniqueInput
    /**
     * In case the Upholstery found by the `where` argument doesn't exist, create a new Upholstery with this data.
     */
    create: XOR<UpholsteryCreateInput, UpholsteryUncheckedCreateInput>
    /**
     * In case the Upholstery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpholsteryUpdateInput, UpholsteryUncheckedUpdateInput>
  }


  /**
   * Upholstery delete
   */
  export type UpholsteryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
    /**
     * Filter which Upholstery to delete.
     */
    where: UpholsteryWhereUniqueInput
  }


  /**
   * Upholstery deleteMany
   */
  export type UpholsteryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upholsteries to delete
     */
    where?: UpholsteryWhereInput
  }


  /**
   * Upholstery.carDetailss
   */
  export type Upholstery$carDetailssArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carDetails
     */
    select?: carDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carDetailsInclude<ExtArgs> | null
    where?: carDetailsWhereInput
    orderBy?: carDetailsOrderByWithRelationInput | carDetailsOrderByWithRelationInput[]
    cursor?: carDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarDetailsScalarFieldEnum | CarDetailsScalarFieldEnum[]
  }


  /**
   * Upholstery without action
   */
  export type UpholsteryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upholstery
     */
    select?: UpholsterySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UpholsteryInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerType: 'providerType',
    providerId: 'providerId',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    accessTokenExpires: 'accessTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CarPostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    km: 'km',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    userId: 'userId',
    carDetailsId: 'carDetailsId'
  };

  export type CarPostsScalarFieldEnum = (typeof CarPostsScalarFieldEnum)[keyof typeof CarPostsScalarFieldEnum]


  export const CarDetailsScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    provenanceId: 'provenanceId',
    dateMiseEnCirculation: 'dateMiseEnCirculation',
    controleTechnique: 'controleTechnique',
    premiereMain: 'premiereMain',
    energieId: 'energieId',
    boiteDeVitesseId: 'boiteDeVitesseId',
    couleurExterieurId: 'couleurExterieurId',
    sellerieId: 'sellerieId',
    nbPortes: 'nbPortes',
    nbPlaces: 'nbPlaces',
    volumeCoffre: 'volumeCoffre',
    puissanceFiscale: 'puissanceFiscale',
    puissanceDin: 'puissanceDin',
    normeEuroId: 'normeEuroId',
    critAirId: 'critAirId',
    consommationMixte: 'consommationMixte',
    emissionCo2Id: 'emissionCo2Id'
  };

  export type CarDetailsScalarFieldEnum = (typeof CarDetailsScalarFieldEnum)[keyof typeof CarDetailsScalarFieldEnum]


  export const TestimonialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    rating: 'rating',
    message: 'message',
    isValidated: 'isValidated',
    status: 'status',
    email: 'email'
  };

  export type TestimonialsScalarFieldEnum = (typeof TestimonialsScalarFieldEnum)[keyof typeof TestimonialsScalarFieldEnum]


  export const GearBoxScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GearBoxScalarFieldEnum = (typeof GearBoxScalarFieldEnum)[keyof typeof GearBoxScalarFieldEnum]


  export const CritAirScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CritAirScalarFieldEnum = (typeof CritAirScalarFieldEnum)[keyof typeof CritAirScalarFieldEnum]


  export const EmissionCo2ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EmissionCo2ScalarFieldEnum = (typeof EmissionCo2ScalarFieldEnum)[keyof typeof EmissionCo2ScalarFieldEnum]


  export const EnergyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EnergyScalarFieldEnum = (typeof EnergyScalarFieldEnum)[keyof typeof EnergyScalarFieldEnum]


  export const EuroStandardScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EuroStandardScalarFieldEnum = (typeof EuroStandardScalarFieldEnum)[keyof typeof EuroStandardScalarFieldEnum]


  export const ExteriorColorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ExteriorColorScalarFieldEnum = (typeof ExteriorColorScalarFieldEnum)[keyof typeof ExteriorColorScalarFieldEnum]


  export const OriginScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OriginScalarFieldEnum = (typeof OriginScalarFieldEnum)[keyof typeof OriginScalarFieldEnum]


  export const UpholsteryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UpholsteryScalarFieldEnum = (typeof UpholsteryScalarFieldEnum)[keyof typeof UpholsteryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    firstname?: StringNullableFilter<"Users"> | string | null
    lastname?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    accounts?: AccountListRelationFilter
    carPosts?: CarPostsListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    carPosts?: carPostsOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringNullableFilter<"Users"> | string | null
    firstname?: StringNullableFilter<"Users"> | string | null
    lastname?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    accounts?: AccountListRelationFilter
    carPosts?: CarPostsListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    firstname?: StringNullableWithAggregatesFilter<"Users"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: IntNullableFilter<"Account"> | number | null
    providerType?: StringNullableFilter<"Account"> | string | null
    providerId?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    providerType?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntNullableFilter<"Account"> | number | null
    providerType?: StringNullableFilter<"Account"> | string | null
    providerId?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    providerType?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    userId?: IntNullableWithAggregatesFilter<"Account"> | number | null
    providerType?: StringNullableWithAggregatesFilter<"Account"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    providerAccountId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntNullableFilter<"Session"> | number | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    sessionToken?: StringNullableFilter<"Session"> | string | null
    accessToken?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    user?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntNullableFilter<"Session"> | number | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    sessionToken?: StringNullableFilter<"Session"> | string | null
    accessToken?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    user?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    userId?: IntNullableWithAggregatesFilter<"Session"> | number | null
    expires?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"Session"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
  }

  export type carPostsWhereInput = {
    AND?: carPostsWhereInput | carPostsWhereInput[]
    OR?: carPostsWhereInput[]
    NOT?: carPostsWhereInput | carPostsWhereInput[]
    id?: IntFilter<"carPosts"> | number
    title?: StringNullableFilter<"carPosts"> | string | null
    description?: StringNullableFilter<"carPosts"> | string | null
    price?: IntNullableFilter<"carPosts"> | number | null
    imageUrl?: StringNullableFilter<"carPosts"> | string | null
    km?: IntNullableFilter<"carPosts"> | number | null
    year?: IntNullableFilter<"carPosts"> | number | null
    createdAt?: DateTimeNullableFilter<"carPosts"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"carPosts"> | Date | string | null
    status?: StringNullableFilter<"carPosts"> | string | null
    userId?: IntNullableFilter<"carPosts"> | number | null
    carDetailsId?: IntNullableFilter<"carPosts"> | number | null
    user?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
    carDetails?: XOR<CarDetailsNullableRelationFilter, carDetailsWhereInput> | null
  }

  export type carPostsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    km?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    carDetailsId?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    carDetails?: carDetailsOrderByWithRelationInput
  }

  export type carPostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: carPostsWhereInput | carPostsWhereInput[]
    OR?: carPostsWhereInput[]
    NOT?: carPostsWhereInput | carPostsWhereInput[]
    title?: StringNullableFilter<"carPosts"> | string | null
    description?: StringNullableFilter<"carPosts"> | string | null
    price?: IntNullableFilter<"carPosts"> | number | null
    imageUrl?: StringNullableFilter<"carPosts"> | string | null
    km?: IntNullableFilter<"carPosts"> | number | null
    year?: IntNullableFilter<"carPosts"> | number | null
    createdAt?: DateTimeNullableFilter<"carPosts"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"carPosts"> | Date | string | null
    status?: StringNullableFilter<"carPosts"> | string | null
    userId?: IntNullableFilter<"carPosts"> | number | null
    carDetailsId?: IntNullableFilter<"carPosts"> | number | null
    user?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
    carDetails?: XOR<CarDetailsNullableRelationFilter, carDetailsWhereInput> | null
  }, "id">

  export type carPostsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    km?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    carDetailsId?: SortOrderInput | SortOrder
    _count?: carPostsCountOrderByAggregateInput
    _avg?: carPostsAvgOrderByAggregateInput
    _max?: carPostsMaxOrderByAggregateInput
    _min?: carPostsMinOrderByAggregateInput
    _sum?: carPostsSumOrderByAggregateInput
  }

  export type carPostsScalarWhereWithAggregatesInput = {
    AND?: carPostsScalarWhereWithAggregatesInput | carPostsScalarWhereWithAggregatesInput[]
    OR?: carPostsScalarWhereWithAggregatesInput[]
    NOT?: carPostsScalarWhereWithAggregatesInput | carPostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carPosts"> | number
    title?: StringNullableWithAggregatesFilter<"carPosts"> | string | null
    description?: StringNullableWithAggregatesFilter<"carPosts"> | string | null
    price?: IntNullableWithAggregatesFilter<"carPosts"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"carPosts"> | string | null
    km?: IntNullableWithAggregatesFilter<"carPosts"> | number | null
    year?: IntNullableWithAggregatesFilter<"carPosts"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"carPosts"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"carPosts"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"carPosts"> | string | null
    userId?: IntNullableWithAggregatesFilter<"carPosts"> | number | null
    carDetailsId?: IntNullableWithAggregatesFilter<"carPosts"> | number | null
  }

  export type carDetailsWhereInput = {
    AND?: carDetailsWhereInput | carDetailsWhereInput[]
    OR?: carDetailsWhereInput[]
    NOT?: carDetailsWhereInput | carDetailsWhereInput[]
    id?: IntFilter<"carDetails"> | number
    carId?: IntNullableFilter<"carDetails"> | number | null
    provenanceId?: IntNullableFilter<"carDetails"> | number | null
    dateMiseEnCirculation?: DateTimeNullableFilter<"carDetails"> | Date | string | null
    controleTechnique?: BoolNullableFilter<"carDetails"> | boolean | null
    premiereMain?: BoolNullableFilter<"carDetails"> | boolean | null
    energieId?: IntNullableFilter<"carDetails"> | number | null
    boiteDeVitesseId?: IntNullableFilter<"carDetails"> | number | null
    couleurExterieurId?: IntNullableFilter<"carDetails"> | number | null
    sellerieId?: IntNullableFilter<"carDetails"> | number | null
    nbPortes?: IntNullableFilter<"carDetails"> | number | null
    nbPlaces?: IntNullableFilter<"carDetails"> | number | null
    volumeCoffre?: IntNullableFilter<"carDetails"> | number | null
    puissanceFiscale?: IntNullableFilter<"carDetails"> | number | null
    puissanceDin?: IntNullableFilter<"carDetails"> | number | null
    normeEuroId?: IntNullableFilter<"carDetails"> | number | null
    critAirId?: IntNullableFilter<"carDetails"> | number | null
    consommationMixte?: FloatNullableFilter<"carDetails"> | number | null
    emissionCo2Id?: IntNullableFilter<"carDetails"> | number | null
    gearbox?: XOR<GearBoxNullableRelationFilter, GearBoxWhereInput> | null
    exteriorColor?: XOR<ExteriorColorNullableRelationFilter, ExteriorColorWhereInput> | null
    critAir?: XOR<CritAirNullableRelationFilter, CritAirWhereInput> | null
    emissionCo2?: XOR<EmissionCo2NullableRelationFilter, EmissionCo2WhereInput> | null
    energy?: XOR<EnergyNullableRelationFilter, EnergyWhereInput> | null
    euroStandard?: XOR<EuroStandardNullableRelationFilter, EuroStandardWhereInput> | null
    origin?: XOR<OriginNullableRelationFilter, OriginWhereInput> | null
    upholstery?: XOR<UpholsteryNullableRelationFilter, UpholsteryWhereInput> | null
    carPosts?: CarPostsListRelationFilter
  }

  export type carDetailsOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrderInput | SortOrder
    provenanceId?: SortOrderInput | SortOrder
    dateMiseEnCirculation?: SortOrderInput | SortOrder
    controleTechnique?: SortOrderInput | SortOrder
    premiereMain?: SortOrderInput | SortOrder
    energieId?: SortOrderInput | SortOrder
    boiteDeVitesseId?: SortOrderInput | SortOrder
    couleurExterieurId?: SortOrderInput | SortOrder
    sellerieId?: SortOrderInput | SortOrder
    nbPortes?: SortOrderInput | SortOrder
    nbPlaces?: SortOrderInput | SortOrder
    volumeCoffre?: SortOrderInput | SortOrder
    puissanceFiscale?: SortOrderInput | SortOrder
    puissanceDin?: SortOrderInput | SortOrder
    normeEuroId?: SortOrderInput | SortOrder
    critAirId?: SortOrderInput | SortOrder
    consommationMixte?: SortOrderInput | SortOrder
    emissionCo2Id?: SortOrderInput | SortOrder
    gearbox?: GearBoxOrderByWithRelationInput
    exteriorColor?: ExteriorColorOrderByWithRelationInput
    critAir?: CritAirOrderByWithRelationInput
    emissionCo2?: EmissionCo2OrderByWithRelationInput
    energy?: EnergyOrderByWithRelationInput
    euroStandard?: EuroStandardOrderByWithRelationInput
    origin?: OriginOrderByWithRelationInput
    upholstery?: UpholsteryOrderByWithRelationInput
    carPosts?: carPostsOrderByRelationAggregateInput
  }

  export type carDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: carDetailsWhereInput | carDetailsWhereInput[]
    OR?: carDetailsWhereInput[]
    NOT?: carDetailsWhereInput | carDetailsWhereInput[]
    carId?: IntNullableFilter<"carDetails"> | number | null
    provenanceId?: IntNullableFilter<"carDetails"> | number | null
    dateMiseEnCirculation?: DateTimeNullableFilter<"carDetails"> | Date | string | null
    controleTechnique?: BoolNullableFilter<"carDetails"> | boolean | null
    premiereMain?: BoolNullableFilter<"carDetails"> | boolean | null
    energieId?: IntNullableFilter<"carDetails"> | number | null
    boiteDeVitesseId?: IntNullableFilter<"carDetails"> | number | null
    couleurExterieurId?: IntNullableFilter<"carDetails"> | number | null
    sellerieId?: IntNullableFilter<"carDetails"> | number | null
    nbPortes?: IntNullableFilter<"carDetails"> | number | null
    nbPlaces?: IntNullableFilter<"carDetails"> | number | null
    volumeCoffre?: IntNullableFilter<"carDetails"> | number | null
    puissanceFiscale?: IntNullableFilter<"carDetails"> | number | null
    puissanceDin?: IntNullableFilter<"carDetails"> | number | null
    normeEuroId?: IntNullableFilter<"carDetails"> | number | null
    critAirId?: IntNullableFilter<"carDetails"> | number | null
    consommationMixte?: FloatNullableFilter<"carDetails"> | number | null
    emissionCo2Id?: IntNullableFilter<"carDetails"> | number | null
    gearbox?: XOR<GearBoxNullableRelationFilter, GearBoxWhereInput> | null
    exteriorColor?: XOR<ExteriorColorNullableRelationFilter, ExteriorColorWhereInput> | null
    critAir?: XOR<CritAirNullableRelationFilter, CritAirWhereInput> | null
    emissionCo2?: XOR<EmissionCo2NullableRelationFilter, EmissionCo2WhereInput> | null
    energy?: XOR<EnergyNullableRelationFilter, EnergyWhereInput> | null
    euroStandard?: XOR<EuroStandardNullableRelationFilter, EuroStandardWhereInput> | null
    origin?: XOR<OriginNullableRelationFilter, OriginWhereInput> | null
    upholstery?: XOR<UpholsteryNullableRelationFilter, UpholsteryWhereInput> | null
    carPosts?: CarPostsListRelationFilter
  }, "id">

  export type carDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrderInput | SortOrder
    provenanceId?: SortOrderInput | SortOrder
    dateMiseEnCirculation?: SortOrderInput | SortOrder
    controleTechnique?: SortOrderInput | SortOrder
    premiereMain?: SortOrderInput | SortOrder
    energieId?: SortOrderInput | SortOrder
    boiteDeVitesseId?: SortOrderInput | SortOrder
    couleurExterieurId?: SortOrderInput | SortOrder
    sellerieId?: SortOrderInput | SortOrder
    nbPortes?: SortOrderInput | SortOrder
    nbPlaces?: SortOrderInput | SortOrder
    volumeCoffre?: SortOrderInput | SortOrder
    puissanceFiscale?: SortOrderInput | SortOrder
    puissanceDin?: SortOrderInput | SortOrder
    normeEuroId?: SortOrderInput | SortOrder
    critAirId?: SortOrderInput | SortOrder
    consommationMixte?: SortOrderInput | SortOrder
    emissionCo2Id?: SortOrderInput | SortOrder
    _count?: carDetailsCountOrderByAggregateInput
    _avg?: carDetailsAvgOrderByAggregateInput
    _max?: carDetailsMaxOrderByAggregateInput
    _min?: carDetailsMinOrderByAggregateInput
    _sum?: carDetailsSumOrderByAggregateInput
  }

  export type carDetailsScalarWhereWithAggregatesInput = {
    AND?: carDetailsScalarWhereWithAggregatesInput | carDetailsScalarWhereWithAggregatesInput[]
    OR?: carDetailsScalarWhereWithAggregatesInput[]
    NOT?: carDetailsScalarWhereWithAggregatesInput | carDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carDetails"> | number
    carId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    provenanceId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    dateMiseEnCirculation?: DateTimeNullableWithAggregatesFilter<"carDetails"> | Date | string | null
    controleTechnique?: BoolNullableWithAggregatesFilter<"carDetails"> | boolean | null
    premiereMain?: BoolNullableWithAggregatesFilter<"carDetails"> | boolean | null
    energieId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    boiteDeVitesseId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    couleurExterieurId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    sellerieId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    nbPortes?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    nbPlaces?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    volumeCoffre?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    puissanceFiscale?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    puissanceDin?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    normeEuroId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    critAirId?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
    consommationMixte?: FloatNullableWithAggregatesFilter<"carDetails"> | number | null
    emissionCo2Id?: IntNullableWithAggregatesFilter<"carDetails"> | number | null
  }

  export type testimonialsWhereInput = {
    AND?: testimonialsWhereInput | testimonialsWhereInput[]
    OR?: testimonialsWhereInput[]
    NOT?: testimonialsWhereInput | testimonialsWhereInput[]
    id?: IntFilter<"testimonials"> | number
    name?: StringNullableFilter<"testimonials"> | string | null
    date?: DateTimeNullableFilter<"testimonials"> | Date | string | null
    rating?: IntNullableFilter<"testimonials"> | number | null
    message?: StringNullableFilter<"testimonials"> | string | null
    isValidated?: BoolNullableFilter<"testimonials"> | boolean | null
    status?: StringNullableFilter<"testimonials"> | string | null
    email?: StringNullableFilter<"testimonials"> | string | null
  }

  export type testimonialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    isValidated?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
  }

  export type testimonialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: testimonialsWhereInput | testimonialsWhereInput[]
    OR?: testimonialsWhereInput[]
    NOT?: testimonialsWhereInput | testimonialsWhereInput[]
    name?: StringNullableFilter<"testimonials"> | string | null
    date?: DateTimeNullableFilter<"testimonials"> | Date | string | null
    rating?: IntNullableFilter<"testimonials"> | number | null
    message?: StringNullableFilter<"testimonials"> | string | null
    isValidated?: BoolNullableFilter<"testimonials"> | boolean | null
    status?: StringNullableFilter<"testimonials"> | string | null
    email?: StringNullableFilter<"testimonials"> | string | null
  }, "id">

  export type testimonialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    isValidated?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: testimonialsCountOrderByAggregateInput
    _avg?: testimonialsAvgOrderByAggregateInput
    _max?: testimonialsMaxOrderByAggregateInput
    _min?: testimonialsMinOrderByAggregateInput
    _sum?: testimonialsSumOrderByAggregateInput
  }

  export type testimonialsScalarWhereWithAggregatesInput = {
    AND?: testimonialsScalarWhereWithAggregatesInput | testimonialsScalarWhereWithAggregatesInput[]
    OR?: testimonialsScalarWhereWithAggregatesInput[]
    NOT?: testimonialsScalarWhereWithAggregatesInput | testimonialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"testimonials"> | number
    name?: StringNullableWithAggregatesFilter<"testimonials"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"testimonials"> | Date | string | null
    rating?: IntNullableWithAggregatesFilter<"testimonials"> | number | null
    message?: StringNullableWithAggregatesFilter<"testimonials"> | string | null
    isValidated?: BoolNullableWithAggregatesFilter<"testimonials"> | boolean | null
    status?: StringNullableWithAggregatesFilter<"testimonials"> | string | null
    email?: StringNullableWithAggregatesFilter<"testimonials"> | string | null
  }

  export type GearBoxWhereInput = {
    AND?: GearBoxWhereInput | GearBoxWhereInput[]
    OR?: GearBoxWhereInput[]
    NOT?: GearBoxWhereInput | GearBoxWhereInput[]
    id?: IntFilter<"GearBox"> | number
    name?: StringNullableFilter<"GearBox"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type GearBoxOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type GearBoxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GearBoxWhereInput | GearBoxWhereInput[]
    OR?: GearBoxWhereInput[]
    NOT?: GearBoxWhereInput | GearBoxWhereInput[]
    name?: StringNullableFilter<"GearBox"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type GearBoxOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: GearBoxCountOrderByAggregateInput
    _avg?: GearBoxAvgOrderByAggregateInput
    _max?: GearBoxMaxOrderByAggregateInput
    _min?: GearBoxMinOrderByAggregateInput
    _sum?: GearBoxSumOrderByAggregateInput
  }

  export type GearBoxScalarWhereWithAggregatesInput = {
    AND?: GearBoxScalarWhereWithAggregatesInput | GearBoxScalarWhereWithAggregatesInput[]
    OR?: GearBoxScalarWhereWithAggregatesInput[]
    NOT?: GearBoxScalarWhereWithAggregatesInput | GearBoxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GearBox"> | number
    name?: StringNullableWithAggregatesFilter<"GearBox"> | string | null
  }

  export type CritAirWhereInput = {
    AND?: CritAirWhereInput | CritAirWhereInput[]
    OR?: CritAirWhereInput[]
    NOT?: CritAirWhereInput | CritAirWhereInput[]
    id?: IntFilter<"CritAir"> | number
    name?: StringNullableFilter<"CritAir"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type CritAirOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type CritAirWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CritAirWhereInput | CritAirWhereInput[]
    OR?: CritAirWhereInput[]
    NOT?: CritAirWhereInput | CritAirWhereInput[]
    name?: StringNullableFilter<"CritAir"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type CritAirOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: CritAirCountOrderByAggregateInput
    _avg?: CritAirAvgOrderByAggregateInput
    _max?: CritAirMaxOrderByAggregateInput
    _min?: CritAirMinOrderByAggregateInput
    _sum?: CritAirSumOrderByAggregateInput
  }

  export type CritAirScalarWhereWithAggregatesInput = {
    AND?: CritAirScalarWhereWithAggregatesInput | CritAirScalarWhereWithAggregatesInput[]
    OR?: CritAirScalarWhereWithAggregatesInput[]
    NOT?: CritAirScalarWhereWithAggregatesInput | CritAirScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CritAir"> | number
    name?: StringNullableWithAggregatesFilter<"CritAir"> | string | null
  }

  export type EmissionCo2WhereInput = {
    AND?: EmissionCo2WhereInput | EmissionCo2WhereInput[]
    OR?: EmissionCo2WhereInput[]
    NOT?: EmissionCo2WhereInput | EmissionCo2WhereInput[]
    id?: IntFilter<"EmissionCo2"> | number
    name?: StringNullableFilter<"EmissionCo2"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type EmissionCo2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type EmissionCo2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmissionCo2WhereInput | EmissionCo2WhereInput[]
    OR?: EmissionCo2WhereInput[]
    NOT?: EmissionCo2WhereInput | EmissionCo2WhereInput[]
    name?: StringNullableFilter<"EmissionCo2"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type EmissionCo2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: EmissionCo2CountOrderByAggregateInput
    _avg?: EmissionCo2AvgOrderByAggregateInput
    _max?: EmissionCo2MaxOrderByAggregateInput
    _min?: EmissionCo2MinOrderByAggregateInput
    _sum?: EmissionCo2SumOrderByAggregateInput
  }

  export type EmissionCo2ScalarWhereWithAggregatesInput = {
    AND?: EmissionCo2ScalarWhereWithAggregatesInput | EmissionCo2ScalarWhereWithAggregatesInput[]
    OR?: EmissionCo2ScalarWhereWithAggregatesInput[]
    NOT?: EmissionCo2ScalarWhereWithAggregatesInput | EmissionCo2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmissionCo2"> | number
    name?: StringNullableWithAggregatesFilter<"EmissionCo2"> | string | null
  }

  export type EnergyWhereInput = {
    AND?: EnergyWhereInput | EnergyWhereInput[]
    OR?: EnergyWhereInput[]
    NOT?: EnergyWhereInput | EnergyWhereInput[]
    id?: IntFilter<"Energy"> | number
    name?: StringNullableFilter<"Energy"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type EnergyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type EnergyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnergyWhereInput | EnergyWhereInput[]
    OR?: EnergyWhereInput[]
    NOT?: EnergyWhereInput | EnergyWhereInput[]
    name?: StringNullableFilter<"Energy"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type EnergyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: EnergyCountOrderByAggregateInput
    _avg?: EnergyAvgOrderByAggregateInput
    _max?: EnergyMaxOrderByAggregateInput
    _min?: EnergyMinOrderByAggregateInput
    _sum?: EnergySumOrderByAggregateInput
  }

  export type EnergyScalarWhereWithAggregatesInput = {
    AND?: EnergyScalarWhereWithAggregatesInput | EnergyScalarWhereWithAggregatesInput[]
    OR?: EnergyScalarWhereWithAggregatesInput[]
    NOT?: EnergyScalarWhereWithAggregatesInput | EnergyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Energy"> | number
    name?: StringNullableWithAggregatesFilter<"Energy"> | string | null
  }

  export type EuroStandardWhereInput = {
    AND?: EuroStandardWhereInput | EuroStandardWhereInput[]
    OR?: EuroStandardWhereInput[]
    NOT?: EuroStandardWhereInput | EuroStandardWhereInput[]
    id?: IntFilter<"EuroStandard"> | number
    name?: StringNullableFilter<"EuroStandard"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type EuroStandardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type EuroStandardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EuroStandardWhereInput | EuroStandardWhereInput[]
    OR?: EuroStandardWhereInput[]
    NOT?: EuroStandardWhereInput | EuroStandardWhereInput[]
    name?: StringNullableFilter<"EuroStandard"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type EuroStandardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: EuroStandardCountOrderByAggregateInput
    _avg?: EuroStandardAvgOrderByAggregateInput
    _max?: EuroStandardMaxOrderByAggregateInput
    _min?: EuroStandardMinOrderByAggregateInput
    _sum?: EuroStandardSumOrderByAggregateInput
  }

  export type EuroStandardScalarWhereWithAggregatesInput = {
    AND?: EuroStandardScalarWhereWithAggregatesInput | EuroStandardScalarWhereWithAggregatesInput[]
    OR?: EuroStandardScalarWhereWithAggregatesInput[]
    NOT?: EuroStandardScalarWhereWithAggregatesInput | EuroStandardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EuroStandard"> | number
    name?: StringNullableWithAggregatesFilter<"EuroStandard"> | string | null
  }

  export type ExteriorColorWhereInput = {
    AND?: ExteriorColorWhereInput | ExteriorColorWhereInput[]
    OR?: ExteriorColorWhereInput[]
    NOT?: ExteriorColorWhereInput | ExteriorColorWhereInput[]
    id?: IntFilter<"ExteriorColor"> | number
    name?: StringNullableFilter<"ExteriorColor"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type ExteriorColorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type ExteriorColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExteriorColorWhereInput | ExteriorColorWhereInput[]
    OR?: ExteriorColorWhereInput[]
    NOT?: ExteriorColorWhereInput | ExteriorColorWhereInput[]
    name?: StringNullableFilter<"ExteriorColor"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type ExteriorColorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: ExteriorColorCountOrderByAggregateInput
    _avg?: ExteriorColorAvgOrderByAggregateInput
    _max?: ExteriorColorMaxOrderByAggregateInput
    _min?: ExteriorColorMinOrderByAggregateInput
    _sum?: ExteriorColorSumOrderByAggregateInput
  }

  export type ExteriorColorScalarWhereWithAggregatesInput = {
    AND?: ExteriorColorScalarWhereWithAggregatesInput | ExteriorColorScalarWhereWithAggregatesInput[]
    OR?: ExteriorColorScalarWhereWithAggregatesInput[]
    NOT?: ExteriorColorScalarWhereWithAggregatesInput | ExteriorColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExteriorColor"> | number
    name?: StringNullableWithAggregatesFilter<"ExteriorColor"> | string | null
  }

  export type OriginWhereInput = {
    AND?: OriginWhereInput | OriginWhereInput[]
    OR?: OriginWhereInput[]
    NOT?: OriginWhereInput | OriginWhereInput[]
    id?: IntFilter<"Origin"> | number
    name?: StringNullableFilter<"Origin"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type OriginOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type OriginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OriginWhereInput | OriginWhereInput[]
    OR?: OriginWhereInput[]
    NOT?: OriginWhereInput | OriginWhereInput[]
    name?: StringNullableFilter<"Origin"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type OriginOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: OriginCountOrderByAggregateInput
    _avg?: OriginAvgOrderByAggregateInput
    _max?: OriginMaxOrderByAggregateInput
    _min?: OriginMinOrderByAggregateInput
    _sum?: OriginSumOrderByAggregateInput
  }

  export type OriginScalarWhereWithAggregatesInput = {
    AND?: OriginScalarWhereWithAggregatesInput | OriginScalarWhereWithAggregatesInput[]
    OR?: OriginScalarWhereWithAggregatesInput[]
    NOT?: OriginScalarWhereWithAggregatesInput | OriginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Origin"> | number
    name?: StringNullableWithAggregatesFilter<"Origin"> | string | null
  }

  export type UpholsteryWhereInput = {
    AND?: UpholsteryWhereInput | UpholsteryWhereInput[]
    OR?: UpholsteryWhereInput[]
    NOT?: UpholsteryWhereInput | UpholsteryWhereInput[]
    id?: IntFilter<"Upholstery"> | number
    name?: StringNullableFilter<"Upholstery"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }

  export type UpholsteryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    carDetailss?: carDetailsOrderByRelationAggregateInput
  }

  export type UpholsteryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UpholsteryWhereInput | UpholsteryWhereInput[]
    OR?: UpholsteryWhereInput[]
    NOT?: UpholsteryWhereInput | UpholsteryWhereInput[]
    name?: StringNullableFilter<"Upholstery"> | string | null
    carDetailss?: CarDetailsListRelationFilter
  }, "id">

  export type UpholsteryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UpholsteryCountOrderByAggregateInput
    _avg?: UpholsteryAvgOrderByAggregateInput
    _max?: UpholsteryMaxOrderByAggregateInput
    _min?: UpholsteryMinOrderByAggregateInput
    _sum?: UpholsterySumOrderByAggregateInput
  }

  export type UpholsteryScalarWhereWithAggregatesInput = {
    AND?: UpholsteryScalarWhereWithAggregatesInput | UpholsteryScalarWhereWithAggregatesInput[]
    OR?: UpholsteryScalarWhereWithAggregatesInput[]
    NOT?: UpholsteryScalarWhereWithAggregatesInput | UpholsteryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Upholstery"> | number
    name?: StringNullableWithAggregatesFilter<"Upholstery"> | string | null
  }

  export type UsersCreateInput = {
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    carPosts?: carPostsCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    carPosts?: carPostsUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    carPosts?: carPostsUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    carPosts?: carPostsUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    providerType?: string | null
    providerId?: string | null
    providerAccountId?: string | null
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UsersCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId?: number | null
    providerType?: string | null
    providerId?: string | null
    providerAccountId?: string | null
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateInput = {
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyInput = {
    id?: number
    userId?: number | null
    providerType?: string | null
    providerId?: string | null
    providerAccountId?: string | null
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    expires?: Date | string | null
    sessionToken?: string | null
    accessToken?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UsersCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    userId?: number | null
    expires?: Date | string | null
    sessionToken?: string | null
    accessToken?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SessionUpdateInput = {
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateManyInput = {
    id?: number
    userId?: number | null
    expires?: Date | string | null
    sessionToken?: string | null
    accessToken?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SessionUpdateManyMutationInput = {
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type carPostsCreateInput = {
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    user?: UsersCreateNestedOneWithoutCarPostsInput
    carDetails?: carDetailsCreateNestedOneWithoutCarPostsInput
  }

  export type carPostsUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    userId?: number | null
    carDetailsId?: number | null
  }

  export type carPostsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneWithoutCarPostsNestedInput
    carDetails?: carDetailsUpdateOneWithoutCarPostsNestedInput
  }

  export type carPostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    carDetailsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carPostsCreateManyInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    userId?: number | null
    carDetailsId?: number | null
  }

  export type carPostsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carPostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    carDetailsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUpdateInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsCreateManyInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateManyMutationInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type carDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type testimonialsCreateInput = {
    name?: string | null
    date?: Date | string | null
    rating?: number | null
    message?: string | null
    isValidated?: boolean | null
    status?: string | null
    email?: string | null
  }

  export type testimonialsUncheckedCreateInput = {
    id?: number
    name?: string | null
    date?: Date | string | null
    rating?: number | null
    message?: string | null
    isValidated?: boolean | null
    status?: string | null
    email?: string | null
  }

  export type testimonialsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testimonialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testimonialsCreateManyInput = {
    id?: number
    name?: string | null
    date?: Date | string | null
    rating?: number | null
    message?: string | null
    isValidated?: boolean | null
    status?: string | null
    email?: string | null
  }

  export type testimonialsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testimonialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GearBoxCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutGearboxInput
  }

  export type GearBoxUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutGearboxInput
  }

  export type GearBoxUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutGearboxNestedInput
  }

  export type GearBoxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutGearboxNestedInput
  }

  export type GearBoxCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type GearBoxUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GearBoxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CritAirCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutCritAirInput
  }

  export type CritAirUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutCritAirInput
  }

  export type CritAirUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutCritAirNestedInput
  }

  export type CritAirUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutCritAirNestedInput
  }

  export type CritAirCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type CritAirUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CritAirUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmissionCo2CreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutEmissionCo2Input
  }

  export type EmissionCo2UncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutEmissionCo2Input
  }

  export type EmissionCo2UpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutEmissionCo2NestedInput
  }

  export type EmissionCo2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutEmissionCo2NestedInput
  }

  export type EmissionCo2CreateManyInput = {
    id?: number
    name?: string | null
  }

  export type EmissionCo2UpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmissionCo2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnergyCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutEnergyInput
  }

  export type EnergyUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutEnergyInput
  }

  export type EnergyUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutEnergyNestedInput
  }

  export type EnergyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutEnergyNestedInput
  }

  export type EnergyCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type EnergyUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnergyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EuroStandardCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutEuroStandardInput
  }

  export type EuroStandardUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutEuroStandardInput
  }

  export type EuroStandardUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutEuroStandardNestedInput
  }

  export type EuroStandardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutEuroStandardNestedInput
  }

  export type EuroStandardCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type EuroStandardUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EuroStandardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExteriorColorCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutExteriorColorInput
  }

  export type ExteriorColorUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutExteriorColorInput
  }

  export type ExteriorColorUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutExteriorColorNestedInput
  }

  export type ExteriorColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutExteriorColorNestedInput
  }

  export type ExteriorColorCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type ExteriorColorUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExteriorColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OriginCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutOriginInput
  }

  export type OriginUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutOriginInput
  }

  export type OriginUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutOriginNestedInput
  }

  export type OriginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutOriginNestedInput
  }

  export type OriginCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type OriginUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OriginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpholsteryCreateInput = {
    name?: string | null
    carDetailss?: carDetailsCreateNestedManyWithoutUpholsteryInput
  }

  export type UpholsteryUncheckedCreateInput = {
    id?: number
    name?: string | null
    carDetailss?: carDetailsUncheckedCreateNestedManyWithoutUpholsteryInput
  }

  export type UpholsteryUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUpdateManyWithoutUpholsteryNestedInput
  }

  export type UpholsteryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailss?: carDetailsUncheckedUpdateManyWithoutUpholsteryNestedInput
  }

  export type UpholsteryCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type UpholsteryUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpholsteryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CarPostsListRelationFilter = {
    every?: carPostsWhereInput
    some?: carPostsWhereInput
    none?: carPostsWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carPostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CarDetailsNullableRelationFilter = {
    is?: carDetailsWhereInput | null
    isNot?: carDetailsWhereInput | null
  }

  export type carPostsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    km?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    carDetailsId?: SortOrder
  }

  export type carPostsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    km?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    carDetailsId?: SortOrder
  }

  export type carPostsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    km?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    carDetailsId?: SortOrder
  }

  export type carPostsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    km?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    carDetailsId?: SortOrder
  }

  export type carPostsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    km?: SortOrder
    year?: SortOrder
    userId?: SortOrder
    carDetailsId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GearBoxNullableRelationFilter = {
    is?: GearBoxWhereInput | null
    isNot?: GearBoxWhereInput | null
  }

  export type ExteriorColorNullableRelationFilter = {
    is?: ExteriorColorWhereInput | null
    isNot?: ExteriorColorWhereInput | null
  }

  export type CritAirNullableRelationFilter = {
    is?: CritAirWhereInput | null
    isNot?: CritAirWhereInput | null
  }

  export type EmissionCo2NullableRelationFilter = {
    is?: EmissionCo2WhereInput | null
    isNot?: EmissionCo2WhereInput | null
  }

  export type EnergyNullableRelationFilter = {
    is?: EnergyWhereInput | null
    isNot?: EnergyWhereInput | null
  }

  export type EuroStandardNullableRelationFilter = {
    is?: EuroStandardWhereInput | null
    isNot?: EuroStandardWhereInput | null
  }

  export type OriginNullableRelationFilter = {
    is?: OriginWhereInput | null
    isNot?: OriginWhereInput | null
  }

  export type UpholsteryNullableRelationFilter = {
    is?: UpholsteryWhereInput | null
    isNot?: UpholsteryWhereInput | null
  }

  export type carDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    provenanceId?: SortOrder
    dateMiseEnCirculation?: SortOrder
    controleTechnique?: SortOrder
    premiereMain?: SortOrder
    energieId?: SortOrder
    boiteDeVitesseId?: SortOrder
    couleurExterieurId?: SortOrder
    sellerieId?: SortOrder
    nbPortes?: SortOrder
    nbPlaces?: SortOrder
    volumeCoffre?: SortOrder
    puissanceFiscale?: SortOrder
    puissanceDin?: SortOrder
    normeEuroId?: SortOrder
    critAirId?: SortOrder
    consommationMixte?: SortOrder
    emissionCo2Id?: SortOrder
  }

  export type carDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    provenanceId?: SortOrder
    energieId?: SortOrder
    boiteDeVitesseId?: SortOrder
    couleurExterieurId?: SortOrder
    sellerieId?: SortOrder
    nbPortes?: SortOrder
    nbPlaces?: SortOrder
    volumeCoffre?: SortOrder
    puissanceFiscale?: SortOrder
    puissanceDin?: SortOrder
    normeEuroId?: SortOrder
    critAirId?: SortOrder
    consommationMixte?: SortOrder
    emissionCo2Id?: SortOrder
  }

  export type carDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    provenanceId?: SortOrder
    dateMiseEnCirculation?: SortOrder
    controleTechnique?: SortOrder
    premiereMain?: SortOrder
    energieId?: SortOrder
    boiteDeVitesseId?: SortOrder
    couleurExterieurId?: SortOrder
    sellerieId?: SortOrder
    nbPortes?: SortOrder
    nbPlaces?: SortOrder
    volumeCoffre?: SortOrder
    puissanceFiscale?: SortOrder
    puissanceDin?: SortOrder
    normeEuroId?: SortOrder
    critAirId?: SortOrder
    consommationMixte?: SortOrder
    emissionCo2Id?: SortOrder
  }

  export type carDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    provenanceId?: SortOrder
    dateMiseEnCirculation?: SortOrder
    controleTechnique?: SortOrder
    premiereMain?: SortOrder
    energieId?: SortOrder
    boiteDeVitesseId?: SortOrder
    couleurExterieurId?: SortOrder
    sellerieId?: SortOrder
    nbPortes?: SortOrder
    nbPlaces?: SortOrder
    volumeCoffre?: SortOrder
    puissanceFiscale?: SortOrder
    puissanceDin?: SortOrder
    normeEuroId?: SortOrder
    critAirId?: SortOrder
    consommationMixte?: SortOrder
    emissionCo2Id?: SortOrder
  }

  export type carDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    provenanceId?: SortOrder
    energieId?: SortOrder
    boiteDeVitesseId?: SortOrder
    couleurExterieurId?: SortOrder
    sellerieId?: SortOrder
    nbPortes?: SortOrder
    nbPlaces?: SortOrder
    volumeCoffre?: SortOrder
    puissanceFiscale?: SortOrder
    puissanceDin?: SortOrder
    normeEuroId?: SortOrder
    critAirId?: SortOrder
    consommationMixte?: SortOrder
    emissionCo2Id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type testimonialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    isValidated?: SortOrder
    status?: SortOrder
    email?: SortOrder
  }

  export type testimonialsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type testimonialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    isValidated?: SortOrder
    status?: SortOrder
    email?: SortOrder
  }

  export type testimonialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    isValidated?: SortOrder
    status?: SortOrder
    email?: SortOrder
  }

  export type testimonialsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type CarDetailsListRelationFilter = {
    every?: carDetailsWhereInput
    some?: carDetailsWhereInput
    none?: carDetailsWhereInput
  }

  export type carDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GearBoxCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GearBoxAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GearBoxMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GearBoxMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GearBoxSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CritAirCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CritAirAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CritAirMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CritAirMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CritAirSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmissionCo2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EmissionCo2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmissionCo2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EmissionCo2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EmissionCo2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnergyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnergyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnergyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnergyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnergySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EuroStandardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EuroStandardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EuroStandardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EuroStandardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EuroStandardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExteriorColorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExteriorColorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExteriorColorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExteriorColorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExteriorColorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OriginCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OriginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OriginMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OriginMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OriginSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UpholsteryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UpholsteryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UpholsteryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UpholsteryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UpholsterySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type carPostsCreateNestedManyWithoutUserInput = {
    create?: XOR<carPostsCreateWithoutUserInput, carPostsUncheckedCreateWithoutUserInput> | carPostsCreateWithoutUserInput[] | carPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutUserInput | carPostsCreateOrConnectWithoutUserInput[]
    createMany?: carPostsCreateManyUserInputEnvelope
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type carPostsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<carPostsCreateWithoutUserInput, carPostsUncheckedCreateWithoutUserInput> | carPostsCreateWithoutUserInput[] | carPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutUserInput | carPostsCreateOrConnectWithoutUserInput[]
    createMany?: carPostsCreateManyUserInputEnvelope
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type carPostsUpdateManyWithoutUserNestedInput = {
    create?: XOR<carPostsCreateWithoutUserInput, carPostsUncheckedCreateWithoutUserInput> | carPostsCreateWithoutUserInput[] | carPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutUserInput | carPostsCreateOrConnectWithoutUserInput[]
    upsert?: carPostsUpsertWithWhereUniqueWithoutUserInput | carPostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: carPostsCreateManyUserInputEnvelope
    set?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    disconnect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    delete?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    update?: carPostsUpdateWithWhereUniqueWithoutUserInput | carPostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: carPostsUpdateManyWithWhereWithoutUserInput | carPostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: carPostsScalarWhereInput | carPostsScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type carPostsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<carPostsCreateWithoutUserInput, carPostsUncheckedCreateWithoutUserInput> | carPostsCreateWithoutUserInput[] | carPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutUserInput | carPostsCreateOrConnectWithoutUserInput[]
    upsert?: carPostsUpsertWithWhereUniqueWithoutUserInput | carPostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: carPostsCreateManyUserInputEnvelope
    set?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    disconnect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    delete?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    update?: carPostsUpdateWithWhereUniqueWithoutUserInput | carPostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: carPostsUpdateManyWithWhereWithoutUserInput | carPostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: carPostsScalarWhereInput | carPostsScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    upsert?: UsersUpsertWithoutAccountsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccountsInput, UsersUpdateWithoutAccountsInput>, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSessionsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSessionsInput
    upsert?: UsersUpsertWithoutSessionsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSessionsInput, UsersUpdateWithoutSessionsInput>, UsersUncheckedUpdateWithoutSessionsInput>
  }

  export type UsersCreateNestedOneWithoutCarPostsInput = {
    create?: XOR<UsersCreateWithoutCarPostsInput, UsersUncheckedCreateWithoutCarPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCarPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type carDetailsCreateNestedOneWithoutCarPostsInput = {
    create?: XOR<carDetailsCreateWithoutCarPostsInput, carDetailsUncheckedCreateWithoutCarPostsInput>
    connectOrCreate?: carDetailsCreateOrConnectWithoutCarPostsInput
    connect?: carDetailsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutCarPostsNestedInput = {
    create?: XOR<UsersCreateWithoutCarPostsInput, UsersUncheckedCreateWithoutCarPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCarPostsInput
    upsert?: UsersUpsertWithoutCarPostsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCarPostsInput, UsersUpdateWithoutCarPostsInput>, UsersUncheckedUpdateWithoutCarPostsInput>
  }

  export type carDetailsUpdateOneWithoutCarPostsNestedInput = {
    create?: XOR<carDetailsCreateWithoutCarPostsInput, carDetailsUncheckedCreateWithoutCarPostsInput>
    connectOrCreate?: carDetailsCreateOrConnectWithoutCarPostsInput
    upsert?: carDetailsUpsertWithoutCarPostsInput
    disconnect?: carDetailsWhereInput | boolean
    delete?: carDetailsWhereInput | boolean
    connect?: carDetailsWhereUniqueInput
    update?: XOR<XOR<carDetailsUpdateToOneWithWhereWithoutCarPostsInput, carDetailsUpdateWithoutCarPostsInput>, carDetailsUncheckedUpdateWithoutCarPostsInput>
  }

  export type GearBoxCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<GearBoxCreateWithoutCarDetailssInput, GearBoxUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: GearBoxCreateOrConnectWithoutCarDetailssInput
    connect?: GearBoxWhereUniqueInput
  }

  export type ExteriorColorCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<ExteriorColorCreateWithoutCarDetailssInput, ExteriorColorUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: ExteriorColorCreateOrConnectWithoutCarDetailssInput
    connect?: ExteriorColorWhereUniqueInput
  }

  export type CritAirCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<CritAirCreateWithoutCarDetailssInput, CritAirUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: CritAirCreateOrConnectWithoutCarDetailssInput
    connect?: CritAirWhereUniqueInput
  }

  export type EmissionCo2CreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<EmissionCo2CreateWithoutCarDetailssInput, EmissionCo2UncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: EmissionCo2CreateOrConnectWithoutCarDetailssInput
    connect?: EmissionCo2WhereUniqueInput
  }

  export type EnergyCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<EnergyCreateWithoutCarDetailssInput, EnergyUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: EnergyCreateOrConnectWithoutCarDetailssInput
    connect?: EnergyWhereUniqueInput
  }

  export type EuroStandardCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<EuroStandardCreateWithoutCarDetailssInput, EuroStandardUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: EuroStandardCreateOrConnectWithoutCarDetailssInput
    connect?: EuroStandardWhereUniqueInput
  }

  export type OriginCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<OriginCreateWithoutCarDetailssInput, OriginUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: OriginCreateOrConnectWithoutCarDetailssInput
    connect?: OriginWhereUniqueInput
  }

  export type UpholsteryCreateNestedOneWithoutCarDetailssInput = {
    create?: XOR<UpholsteryCreateWithoutCarDetailssInput, UpholsteryUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: UpholsteryCreateOrConnectWithoutCarDetailssInput
    connect?: UpholsteryWhereUniqueInput
  }

  export type carPostsCreateNestedManyWithoutCarDetailsInput = {
    create?: XOR<carPostsCreateWithoutCarDetailsInput, carPostsUncheckedCreateWithoutCarDetailsInput> | carPostsCreateWithoutCarDetailsInput[] | carPostsUncheckedCreateWithoutCarDetailsInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutCarDetailsInput | carPostsCreateOrConnectWithoutCarDetailsInput[]
    createMany?: carPostsCreateManyCarDetailsInputEnvelope
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
  }

  export type carPostsUncheckedCreateNestedManyWithoutCarDetailsInput = {
    create?: XOR<carPostsCreateWithoutCarDetailsInput, carPostsUncheckedCreateWithoutCarDetailsInput> | carPostsCreateWithoutCarDetailsInput[] | carPostsUncheckedCreateWithoutCarDetailsInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutCarDetailsInput | carPostsCreateOrConnectWithoutCarDetailsInput[]
    createMany?: carPostsCreateManyCarDetailsInputEnvelope
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GearBoxUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<GearBoxCreateWithoutCarDetailssInput, GearBoxUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: GearBoxCreateOrConnectWithoutCarDetailssInput
    upsert?: GearBoxUpsertWithoutCarDetailssInput
    disconnect?: GearBoxWhereInput | boolean
    delete?: GearBoxWhereInput | boolean
    connect?: GearBoxWhereUniqueInput
    update?: XOR<XOR<GearBoxUpdateToOneWithWhereWithoutCarDetailssInput, GearBoxUpdateWithoutCarDetailssInput>, GearBoxUncheckedUpdateWithoutCarDetailssInput>
  }

  export type ExteriorColorUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<ExteriorColorCreateWithoutCarDetailssInput, ExteriorColorUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: ExteriorColorCreateOrConnectWithoutCarDetailssInput
    upsert?: ExteriorColorUpsertWithoutCarDetailssInput
    disconnect?: ExteriorColorWhereInput | boolean
    delete?: ExteriorColorWhereInput | boolean
    connect?: ExteriorColorWhereUniqueInput
    update?: XOR<XOR<ExteriorColorUpdateToOneWithWhereWithoutCarDetailssInput, ExteriorColorUpdateWithoutCarDetailssInput>, ExteriorColorUncheckedUpdateWithoutCarDetailssInput>
  }

  export type CritAirUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<CritAirCreateWithoutCarDetailssInput, CritAirUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: CritAirCreateOrConnectWithoutCarDetailssInput
    upsert?: CritAirUpsertWithoutCarDetailssInput
    disconnect?: CritAirWhereInput | boolean
    delete?: CritAirWhereInput | boolean
    connect?: CritAirWhereUniqueInput
    update?: XOR<XOR<CritAirUpdateToOneWithWhereWithoutCarDetailssInput, CritAirUpdateWithoutCarDetailssInput>, CritAirUncheckedUpdateWithoutCarDetailssInput>
  }

  export type EmissionCo2UpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<EmissionCo2CreateWithoutCarDetailssInput, EmissionCo2UncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: EmissionCo2CreateOrConnectWithoutCarDetailssInput
    upsert?: EmissionCo2UpsertWithoutCarDetailssInput
    disconnect?: EmissionCo2WhereInput | boolean
    delete?: EmissionCo2WhereInput | boolean
    connect?: EmissionCo2WhereUniqueInput
    update?: XOR<XOR<EmissionCo2UpdateToOneWithWhereWithoutCarDetailssInput, EmissionCo2UpdateWithoutCarDetailssInput>, EmissionCo2UncheckedUpdateWithoutCarDetailssInput>
  }

  export type EnergyUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<EnergyCreateWithoutCarDetailssInput, EnergyUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: EnergyCreateOrConnectWithoutCarDetailssInput
    upsert?: EnergyUpsertWithoutCarDetailssInput
    disconnect?: EnergyWhereInput | boolean
    delete?: EnergyWhereInput | boolean
    connect?: EnergyWhereUniqueInput
    update?: XOR<XOR<EnergyUpdateToOneWithWhereWithoutCarDetailssInput, EnergyUpdateWithoutCarDetailssInput>, EnergyUncheckedUpdateWithoutCarDetailssInput>
  }

  export type EuroStandardUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<EuroStandardCreateWithoutCarDetailssInput, EuroStandardUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: EuroStandardCreateOrConnectWithoutCarDetailssInput
    upsert?: EuroStandardUpsertWithoutCarDetailssInput
    disconnect?: EuroStandardWhereInput | boolean
    delete?: EuroStandardWhereInput | boolean
    connect?: EuroStandardWhereUniqueInput
    update?: XOR<XOR<EuroStandardUpdateToOneWithWhereWithoutCarDetailssInput, EuroStandardUpdateWithoutCarDetailssInput>, EuroStandardUncheckedUpdateWithoutCarDetailssInput>
  }

  export type OriginUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<OriginCreateWithoutCarDetailssInput, OriginUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: OriginCreateOrConnectWithoutCarDetailssInput
    upsert?: OriginUpsertWithoutCarDetailssInput
    disconnect?: OriginWhereInput | boolean
    delete?: OriginWhereInput | boolean
    connect?: OriginWhereUniqueInput
    update?: XOR<XOR<OriginUpdateToOneWithWhereWithoutCarDetailssInput, OriginUpdateWithoutCarDetailssInput>, OriginUncheckedUpdateWithoutCarDetailssInput>
  }

  export type UpholsteryUpdateOneWithoutCarDetailssNestedInput = {
    create?: XOR<UpholsteryCreateWithoutCarDetailssInput, UpholsteryUncheckedCreateWithoutCarDetailssInput>
    connectOrCreate?: UpholsteryCreateOrConnectWithoutCarDetailssInput
    upsert?: UpholsteryUpsertWithoutCarDetailssInput
    disconnect?: UpholsteryWhereInput | boolean
    delete?: UpholsteryWhereInput | boolean
    connect?: UpholsteryWhereUniqueInput
    update?: XOR<XOR<UpholsteryUpdateToOneWithWhereWithoutCarDetailssInput, UpholsteryUpdateWithoutCarDetailssInput>, UpholsteryUncheckedUpdateWithoutCarDetailssInput>
  }

  export type carPostsUpdateManyWithoutCarDetailsNestedInput = {
    create?: XOR<carPostsCreateWithoutCarDetailsInput, carPostsUncheckedCreateWithoutCarDetailsInput> | carPostsCreateWithoutCarDetailsInput[] | carPostsUncheckedCreateWithoutCarDetailsInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutCarDetailsInput | carPostsCreateOrConnectWithoutCarDetailsInput[]
    upsert?: carPostsUpsertWithWhereUniqueWithoutCarDetailsInput | carPostsUpsertWithWhereUniqueWithoutCarDetailsInput[]
    createMany?: carPostsCreateManyCarDetailsInputEnvelope
    set?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    disconnect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    delete?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    update?: carPostsUpdateWithWhereUniqueWithoutCarDetailsInput | carPostsUpdateWithWhereUniqueWithoutCarDetailsInput[]
    updateMany?: carPostsUpdateManyWithWhereWithoutCarDetailsInput | carPostsUpdateManyWithWhereWithoutCarDetailsInput[]
    deleteMany?: carPostsScalarWhereInput | carPostsScalarWhereInput[]
  }

  export type carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput = {
    create?: XOR<carPostsCreateWithoutCarDetailsInput, carPostsUncheckedCreateWithoutCarDetailsInput> | carPostsCreateWithoutCarDetailsInput[] | carPostsUncheckedCreateWithoutCarDetailsInput[]
    connectOrCreate?: carPostsCreateOrConnectWithoutCarDetailsInput | carPostsCreateOrConnectWithoutCarDetailsInput[]
    upsert?: carPostsUpsertWithWhereUniqueWithoutCarDetailsInput | carPostsUpsertWithWhereUniqueWithoutCarDetailsInput[]
    createMany?: carPostsCreateManyCarDetailsInputEnvelope
    set?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    disconnect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    delete?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    connect?: carPostsWhereUniqueInput | carPostsWhereUniqueInput[]
    update?: carPostsUpdateWithWhereUniqueWithoutCarDetailsInput | carPostsUpdateWithWhereUniqueWithoutCarDetailsInput[]
    updateMany?: carPostsUpdateManyWithWhereWithoutCarDetailsInput | carPostsUpdateManyWithWhereWithoutCarDetailsInput[]
    deleteMany?: carPostsScalarWhereInput | carPostsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutGearboxInput = {
    create?: XOR<carDetailsCreateWithoutGearboxInput, carDetailsUncheckedCreateWithoutGearboxInput> | carDetailsCreateWithoutGearboxInput[] | carDetailsUncheckedCreateWithoutGearboxInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutGearboxInput | carDetailsCreateOrConnectWithoutGearboxInput[]
    createMany?: carDetailsCreateManyGearboxInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutGearboxInput = {
    create?: XOR<carDetailsCreateWithoutGearboxInput, carDetailsUncheckedCreateWithoutGearboxInput> | carDetailsCreateWithoutGearboxInput[] | carDetailsUncheckedCreateWithoutGearboxInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutGearboxInput | carDetailsCreateOrConnectWithoutGearboxInput[]
    createMany?: carDetailsCreateManyGearboxInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutGearboxNestedInput = {
    create?: XOR<carDetailsCreateWithoutGearboxInput, carDetailsUncheckedCreateWithoutGearboxInput> | carDetailsCreateWithoutGearboxInput[] | carDetailsUncheckedCreateWithoutGearboxInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutGearboxInput | carDetailsCreateOrConnectWithoutGearboxInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutGearboxInput | carDetailsUpsertWithWhereUniqueWithoutGearboxInput[]
    createMany?: carDetailsCreateManyGearboxInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutGearboxInput | carDetailsUpdateWithWhereUniqueWithoutGearboxInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutGearboxInput | carDetailsUpdateManyWithWhereWithoutGearboxInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutGearboxNestedInput = {
    create?: XOR<carDetailsCreateWithoutGearboxInput, carDetailsUncheckedCreateWithoutGearboxInput> | carDetailsCreateWithoutGearboxInput[] | carDetailsUncheckedCreateWithoutGearboxInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutGearboxInput | carDetailsCreateOrConnectWithoutGearboxInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutGearboxInput | carDetailsUpsertWithWhereUniqueWithoutGearboxInput[]
    createMany?: carDetailsCreateManyGearboxInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutGearboxInput | carDetailsUpdateWithWhereUniqueWithoutGearboxInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutGearboxInput | carDetailsUpdateManyWithWhereWithoutGearboxInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutCritAirInput = {
    create?: XOR<carDetailsCreateWithoutCritAirInput, carDetailsUncheckedCreateWithoutCritAirInput> | carDetailsCreateWithoutCritAirInput[] | carDetailsUncheckedCreateWithoutCritAirInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutCritAirInput | carDetailsCreateOrConnectWithoutCritAirInput[]
    createMany?: carDetailsCreateManyCritAirInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutCritAirInput = {
    create?: XOR<carDetailsCreateWithoutCritAirInput, carDetailsUncheckedCreateWithoutCritAirInput> | carDetailsCreateWithoutCritAirInput[] | carDetailsUncheckedCreateWithoutCritAirInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutCritAirInput | carDetailsCreateOrConnectWithoutCritAirInput[]
    createMany?: carDetailsCreateManyCritAirInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutCritAirNestedInput = {
    create?: XOR<carDetailsCreateWithoutCritAirInput, carDetailsUncheckedCreateWithoutCritAirInput> | carDetailsCreateWithoutCritAirInput[] | carDetailsUncheckedCreateWithoutCritAirInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutCritAirInput | carDetailsCreateOrConnectWithoutCritAirInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutCritAirInput | carDetailsUpsertWithWhereUniqueWithoutCritAirInput[]
    createMany?: carDetailsCreateManyCritAirInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutCritAirInput | carDetailsUpdateWithWhereUniqueWithoutCritAirInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutCritAirInput | carDetailsUpdateManyWithWhereWithoutCritAirInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutCritAirNestedInput = {
    create?: XOR<carDetailsCreateWithoutCritAirInput, carDetailsUncheckedCreateWithoutCritAirInput> | carDetailsCreateWithoutCritAirInput[] | carDetailsUncheckedCreateWithoutCritAirInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutCritAirInput | carDetailsCreateOrConnectWithoutCritAirInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutCritAirInput | carDetailsUpsertWithWhereUniqueWithoutCritAirInput[]
    createMany?: carDetailsCreateManyCritAirInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutCritAirInput | carDetailsUpdateWithWhereUniqueWithoutCritAirInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutCritAirInput | carDetailsUpdateManyWithWhereWithoutCritAirInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutEmissionCo2Input = {
    create?: XOR<carDetailsCreateWithoutEmissionCo2Input, carDetailsUncheckedCreateWithoutEmissionCo2Input> | carDetailsCreateWithoutEmissionCo2Input[] | carDetailsUncheckedCreateWithoutEmissionCo2Input[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEmissionCo2Input | carDetailsCreateOrConnectWithoutEmissionCo2Input[]
    createMany?: carDetailsCreateManyEmissionCo2InputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutEmissionCo2Input = {
    create?: XOR<carDetailsCreateWithoutEmissionCo2Input, carDetailsUncheckedCreateWithoutEmissionCo2Input> | carDetailsCreateWithoutEmissionCo2Input[] | carDetailsUncheckedCreateWithoutEmissionCo2Input[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEmissionCo2Input | carDetailsCreateOrConnectWithoutEmissionCo2Input[]
    createMany?: carDetailsCreateManyEmissionCo2InputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutEmissionCo2NestedInput = {
    create?: XOR<carDetailsCreateWithoutEmissionCo2Input, carDetailsUncheckedCreateWithoutEmissionCo2Input> | carDetailsCreateWithoutEmissionCo2Input[] | carDetailsUncheckedCreateWithoutEmissionCo2Input[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEmissionCo2Input | carDetailsCreateOrConnectWithoutEmissionCo2Input[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutEmissionCo2Input | carDetailsUpsertWithWhereUniqueWithoutEmissionCo2Input[]
    createMany?: carDetailsCreateManyEmissionCo2InputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutEmissionCo2Input | carDetailsUpdateWithWhereUniqueWithoutEmissionCo2Input[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutEmissionCo2Input | carDetailsUpdateManyWithWhereWithoutEmissionCo2Input[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutEmissionCo2NestedInput = {
    create?: XOR<carDetailsCreateWithoutEmissionCo2Input, carDetailsUncheckedCreateWithoutEmissionCo2Input> | carDetailsCreateWithoutEmissionCo2Input[] | carDetailsUncheckedCreateWithoutEmissionCo2Input[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEmissionCo2Input | carDetailsCreateOrConnectWithoutEmissionCo2Input[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutEmissionCo2Input | carDetailsUpsertWithWhereUniqueWithoutEmissionCo2Input[]
    createMany?: carDetailsCreateManyEmissionCo2InputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutEmissionCo2Input | carDetailsUpdateWithWhereUniqueWithoutEmissionCo2Input[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutEmissionCo2Input | carDetailsUpdateManyWithWhereWithoutEmissionCo2Input[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutEnergyInput = {
    create?: XOR<carDetailsCreateWithoutEnergyInput, carDetailsUncheckedCreateWithoutEnergyInput> | carDetailsCreateWithoutEnergyInput[] | carDetailsUncheckedCreateWithoutEnergyInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEnergyInput | carDetailsCreateOrConnectWithoutEnergyInput[]
    createMany?: carDetailsCreateManyEnergyInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutEnergyInput = {
    create?: XOR<carDetailsCreateWithoutEnergyInput, carDetailsUncheckedCreateWithoutEnergyInput> | carDetailsCreateWithoutEnergyInput[] | carDetailsUncheckedCreateWithoutEnergyInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEnergyInput | carDetailsCreateOrConnectWithoutEnergyInput[]
    createMany?: carDetailsCreateManyEnergyInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutEnergyNestedInput = {
    create?: XOR<carDetailsCreateWithoutEnergyInput, carDetailsUncheckedCreateWithoutEnergyInput> | carDetailsCreateWithoutEnergyInput[] | carDetailsUncheckedCreateWithoutEnergyInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEnergyInput | carDetailsCreateOrConnectWithoutEnergyInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutEnergyInput | carDetailsUpsertWithWhereUniqueWithoutEnergyInput[]
    createMany?: carDetailsCreateManyEnergyInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutEnergyInput | carDetailsUpdateWithWhereUniqueWithoutEnergyInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutEnergyInput | carDetailsUpdateManyWithWhereWithoutEnergyInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutEnergyNestedInput = {
    create?: XOR<carDetailsCreateWithoutEnergyInput, carDetailsUncheckedCreateWithoutEnergyInput> | carDetailsCreateWithoutEnergyInput[] | carDetailsUncheckedCreateWithoutEnergyInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEnergyInput | carDetailsCreateOrConnectWithoutEnergyInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutEnergyInput | carDetailsUpsertWithWhereUniqueWithoutEnergyInput[]
    createMany?: carDetailsCreateManyEnergyInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutEnergyInput | carDetailsUpdateWithWhereUniqueWithoutEnergyInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutEnergyInput | carDetailsUpdateManyWithWhereWithoutEnergyInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutEuroStandardInput = {
    create?: XOR<carDetailsCreateWithoutEuroStandardInput, carDetailsUncheckedCreateWithoutEuroStandardInput> | carDetailsCreateWithoutEuroStandardInput[] | carDetailsUncheckedCreateWithoutEuroStandardInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEuroStandardInput | carDetailsCreateOrConnectWithoutEuroStandardInput[]
    createMany?: carDetailsCreateManyEuroStandardInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutEuroStandardInput = {
    create?: XOR<carDetailsCreateWithoutEuroStandardInput, carDetailsUncheckedCreateWithoutEuroStandardInput> | carDetailsCreateWithoutEuroStandardInput[] | carDetailsUncheckedCreateWithoutEuroStandardInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEuroStandardInput | carDetailsCreateOrConnectWithoutEuroStandardInput[]
    createMany?: carDetailsCreateManyEuroStandardInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutEuroStandardNestedInput = {
    create?: XOR<carDetailsCreateWithoutEuroStandardInput, carDetailsUncheckedCreateWithoutEuroStandardInput> | carDetailsCreateWithoutEuroStandardInput[] | carDetailsUncheckedCreateWithoutEuroStandardInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEuroStandardInput | carDetailsCreateOrConnectWithoutEuroStandardInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutEuroStandardInput | carDetailsUpsertWithWhereUniqueWithoutEuroStandardInput[]
    createMany?: carDetailsCreateManyEuroStandardInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutEuroStandardInput | carDetailsUpdateWithWhereUniqueWithoutEuroStandardInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutEuroStandardInput | carDetailsUpdateManyWithWhereWithoutEuroStandardInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutEuroStandardNestedInput = {
    create?: XOR<carDetailsCreateWithoutEuroStandardInput, carDetailsUncheckedCreateWithoutEuroStandardInput> | carDetailsCreateWithoutEuroStandardInput[] | carDetailsUncheckedCreateWithoutEuroStandardInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutEuroStandardInput | carDetailsCreateOrConnectWithoutEuroStandardInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutEuroStandardInput | carDetailsUpsertWithWhereUniqueWithoutEuroStandardInput[]
    createMany?: carDetailsCreateManyEuroStandardInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutEuroStandardInput | carDetailsUpdateWithWhereUniqueWithoutEuroStandardInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutEuroStandardInput | carDetailsUpdateManyWithWhereWithoutEuroStandardInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutExteriorColorInput = {
    create?: XOR<carDetailsCreateWithoutExteriorColorInput, carDetailsUncheckedCreateWithoutExteriorColorInput> | carDetailsCreateWithoutExteriorColorInput[] | carDetailsUncheckedCreateWithoutExteriorColorInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutExteriorColorInput | carDetailsCreateOrConnectWithoutExteriorColorInput[]
    createMany?: carDetailsCreateManyExteriorColorInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutExteriorColorInput = {
    create?: XOR<carDetailsCreateWithoutExteriorColorInput, carDetailsUncheckedCreateWithoutExteriorColorInput> | carDetailsCreateWithoutExteriorColorInput[] | carDetailsUncheckedCreateWithoutExteriorColorInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutExteriorColorInput | carDetailsCreateOrConnectWithoutExteriorColorInput[]
    createMany?: carDetailsCreateManyExteriorColorInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutExteriorColorNestedInput = {
    create?: XOR<carDetailsCreateWithoutExteriorColorInput, carDetailsUncheckedCreateWithoutExteriorColorInput> | carDetailsCreateWithoutExteriorColorInput[] | carDetailsUncheckedCreateWithoutExteriorColorInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutExteriorColorInput | carDetailsCreateOrConnectWithoutExteriorColorInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutExteriorColorInput | carDetailsUpsertWithWhereUniqueWithoutExteriorColorInput[]
    createMany?: carDetailsCreateManyExteriorColorInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutExteriorColorInput | carDetailsUpdateWithWhereUniqueWithoutExteriorColorInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutExteriorColorInput | carDetailsUpdateManyWithWhereWithoutExteriorColorInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutExteriorColorNestedInput = {
    create?: XOR<carDetailsCreateWithoutExteriorColorInput, carDetailsUncheckedCreateWithoutExteriorColorInput> | carDetailsCreateWithoutExteriorColorInput[] | carDetailsUncheckedCreateWithoutExteriorColorInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutExteriorColorInput | carDetailsCreateOrConnectWithoutExteriorColorInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutExteriorColorInput | carDetailsUpsertWithWhereUniqueWithoutExteriorColorInput[]
    createMany?: carDetailsCreateManyExteriorColorInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutExteriorColorInput | carDetailsUpdateWithWhereUniqueWithoutExteriorColorInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutExteriorColorInput | carDetailsUpdateManyWithWhereWithoutExteriorColorInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutOriginInput = {
    create?: XOR<carDetailsCreateWithoutOriginInput, carDetailsUncheckedCreateWithoutOriginInput> | carDetailsCreateWithoutOriginInput[] | carDetailsUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutOriginInput | carDetailsCreateOrConnectWithoutOriginInput[]
    createMany?: carDetailsCreateManyOriginInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutOriginInput = {
    create?: XOR<carDetailsCreateWithoutOriginInput, carDetailsUncheckedCreateWithoutOriginInput> | carDetailsCreateWithoutOriginInput[] | carDetailsUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutOriginInput | carDetailsCreateOrConnectWithoutOriginInput[]
    createMany?: carDetailsCreateManyOriginInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutOriginNestedInput = {
    create?: XOR<carDetailsCreateWithoutOriginInput, carDetailsUncheckedCreateWithoutOriginInput> | carDetailsCreateWithoutOriginInput[] | carDetailsUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutOriginInput | carDetailsCreateOrConnectWithoutOriginInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutOriginInput | carDetailsUpsertWithWhereUniqueWithoutOriginInput[]
    createMany?: carDetailsCreateManyOriginInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutOriginInput | carDetailsUpdateWithWhereUniqueWithoutOriginInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutOriginInput | carDetailsUpdateManyWithWhereWithoutOriginInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutOriginNestedInput = {
    create?: XOR<carDetailsCreateWithoutOriginInput, carDetailsUncheckedCreateWithoutOriginInput> | carDetailsCreateWithoutOriginInput[] | carDetailsUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutOriginInput | carDetailsCreateOrConnectWithoutOriginInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutOriginInput | carDetailsUpsertWithWhereUniqueWithoutOriginInput[]
    createMany?: carDetailsCreateManyOriginInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutOriginInput | carDetailsUpdateWithWhereUniqueWithoutOriginInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutOriginInput | carDetailsUpdateManyWithWhereWithoutOriginInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsCreateNestedManyWithoutUpholsteryInput = {
    create?: XOR<carDetailsCreateWithoutUpholsteryInput, carDetailsUncheckedCreateWithoutUpholsteryInput> | carDetailsCreateWithoutUpholsteryInput[] | carDetailsUncheckedCreateWithoutUpholsteryInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutUpholsteryInput | carDetailsCreateOrConnectWithoutUpholsteryInput[]
    createMany?: carDetailsCreateManyUpholsteryInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUncheckedCreateNestedManyWithoutUpholsteryInput = {
    create?: XOR<carDetailsCreateWithoutUpholsteryInput, carDetailsUncheckedCreateWithoutUpholsteryInput> | carDetailsCreateWithoutUpholsteryInput[] | carDetailsUncheckedCreateWithoutUpholsteryInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutUpholsteryInput | carDetailsCreateOrConnectWithoutUpholsteryInput[]
    createMany?: carDetailsCreateManyUpholsteryInputEnvelope
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
  }

  export type carDetailsUpdateManyWithoutUpholsteryNestedInput = {
    create?: XOR<carDetailsCreateWithoutUpholsteryInput, carDetailsUncheckedCreateWithoutUpholsteryInput> | carDetailsCreateWithoutUpholsteryInput[] | carDetailsUncheckedCreateWithoutUpholsteryInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutUpholsteryInput | carDetailsCreateOrConnectWithoutUpholsteryInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutUpholsteryInput | carDetailsUpsertWithWhereUniqueWithoutUpholsteryInput[]
    createMany?: carDetailsCreateManyUpholsteryInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutUpholsteryInput | carDetailsUpdateWithWhereUniqueWithoutUpholsteryInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutUpholsteryInput | carDetailsUpdateManyWithWhereWithoutUpholsteryInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
  }

  export type carDetailsUncheckedUpdateManyWithoutUpholsteryNestedInput = {
    create?: XOR<carDetailsCreateWithoutUpholsteryInput, carDetailsUncheckedCreateWithoutUpholsteryInput> | carDetailsCreateWithoutUpholsteryInput[] | carDetailsUncheckedCreateWithoutUpholsteryInput[]
    connectOrCreate?: carDetailsCreateOrConnectWithoutUpholsteryInput | carDetailsCreateOrConnectWithoutUpholsteryInput[]
    upsert?: carDetailsUpsertWithWhereUniqueWithoutUpholsteryInput | carDetailsUpsertWithWhereUniqueWithoutUpholsteryInput[]
    createMany?: carDetailsCreateManyUpholsteryInputEnvelope
    set?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    disconnect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    delete?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    connect?: carDetailsWhereUniqueInput | carDetailsWhereUniqueInput[]
    update?: carDetailsUpdateWithWhereUniqueWithoutUpholsteryInput | carDetailsUpdateWithWhereUniqueWithoutUpholsteryInput[]
    updateMany?: carDetailsUpdateManyWithWhereWithoutUpholsteryInput | carDetailsUpdateManyWithWhereWithoutUpholsteryInput[]
    deleteMany?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    providerType?: string | null
    providerId?: string | null
    providerAccountId?: string | null
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    providerType?: string | null
    providerId?: string | null
    providerAccountId?: string | null
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type carPostsCreateWithoutUserInput = {
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    carDetails?: carDetailsCreateNestedOneWithoutCarPostsInput
  }

  export type carPostsUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    carDetailsId?: number | null
  }

  export type carPostsCreateOrConnectWithoutUserInput = {
    where: carPostsWhereUniqueInput
    create: XOR<carPostsCreateWithoutUserInput, carPostsUncheckedCreateWithoutUserInput>
  }

  export type carPostsCreateManyUserInputEnvelope = {
    data: carPostsCreateManyUserInput | carPostsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    expires?: Date | string | null
    sessionToken?: string | null
    accessToken?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    expires?: Date | string | null
    sessionToken?: string | null
    accessToken?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: IntNullableFilter<"Account"> | number | null
    providerType?: StringNullableFilter<"Account"> | string | null
    providerId?: StringNullableFilter<"Account"> | string | null
    providerAccountId?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type carPostsUpsertWithWhereUniqueWithoutUserInput = {
    where: carPostsWhereUniqueInput
    update: XOR<carPostsUpdateWithoutUserInput, carPostsUncheckedUpdateWithoutUserInput>
    create: XOR<carPostsCreateWithoutUserInput, carPostsUncheckedCreateWithoutUserInput>
  }

  export type carPostsUpdateWithWhereUniqueWithoutUserInput = {
    where: carPostsWhereUniqueInput
    data: XOR<carPostsUpdateWithoutUserInput, carPostsUncheckedUpdateWithoutUserInput>
  }

  export type carPostsUpdateManyWithWhereWithoutUserInput = {
    where: carPostsScalarWhereInput
    data: XOR<carPostsUpdateManyMutationInput, carPostsUncheckedUpdateManyWithoutUserInput>
  }

  export type carPostsScalarWhereInput = {
    AND?: carPostsScalarWhereInput | carPostsScalarWhereInput[]
    OR?: carPostsScalarWhereInput[]
    NOT?: carPostsScalarWhereInput | carPostsScalarWhereInput[]
    id?: IntFilter<"carPosts"> | number
    title?: StringNullableFilter<"carPosts"> | string | null
    description?: StringNullableFilter<"carPosts"> | string | null
    price?: IntNullableFilter<"carPosts"> | number | null
    imageUrl?: StringNullableFilter<"carPosts"> | string | null
    km?: IntNullableFilter<"carPosts"> | number | null
    year?: IntNullableFilter<"carPosts"> | number | null
    createdAt?: DateTimeNullableFilter<"carPosts"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"carPosts"> | Date | string | null
    status?: StringNullableFilter<"carPosts"> | string | null
    userId?: IntNullableFilter<"carPosts"> | number | null
    carDetailsId?: IntNullableFilter<"carPosts"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntNullableFilter<"Session"> | number | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    sessionToken?: StringNullableFilter<"Session"> | string | null
    accessToken?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
  }

  export type UsersCreateWithoutAccountsInput = {
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    carPosts?: carPostsCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAccountsInput = {
    id?: number
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAccountsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
  }

  export type UsersUpsertWithoutAccountsInput = {
    update: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type UsersUpdateWithoutAccountsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    carPosts?: carPostsUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    carPosts?: carPostsUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutSessionsInput = {
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    carPosts?: carPostsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSessionsInput = {
    id?: number
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    carPosts?: carPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSessionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
  }

  export type UsersUpsertWithoutSessionsInput = {
    update: XOR<UsersUpdateWithoutSessionsInput, UsersUncheckedUpdateWithoutSessionsInput>
    create: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSessionsInput, UsersUncheckedUpdateWithoutSessionsInput>
  }

  export type UsersUpdateWithoutSessionsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    carPosts?: carPostsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    carPosts?: carPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutCarPostsInput = {
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCarPostsInput = {
    id?: number
    email?: string | null
    password?: string | null
    firstname?: string | null
    lastname?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCarPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCarPostsInput, UsersUncheckedCreateWithoutCarPostsInput>
  }

  export type carDetailsCreateWithoutCarPostsInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
  }

  export type carDetailsUncheckedCreateWithoutCarPostsInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsCreateOrConnectWithoutCarPostsInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutCarPostsInput, carDetailsUncheckedCreateWithoutCarPostsInput>
  }

  export type UsersUpsertWithoutCarPostsInput = {
    update: XOR<UsersUpdateWithoutCarPostsInput, UsersUncheckedUpdateWithoutCarPostsInput>
    create: XOR<UsersCreateWithoutCarPostsInput, UsersUncheckedCreateWithoutCarPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCarPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCarPostsInput, UsersUncheckedUpdateWithoutCarPostsInput>
  }

  export type UsersUpdateWithoutCarPostsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCarPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type carDetailsUpsertWithoutCarPostsInput = {
    update: XOR<carDetailsUpdateWithoutCarPostsInput, carDetailsUncheckedUpdateWithoutCarPostsInput>
    create: XOR<carDetailsCreateWithoutCarPostsInput, carDetailsUncheckedCreateWithoutCarPostsInput>
    where?: carDetailsWhereInput
  }

  export type carDetailsUpdateToOneWithWhereWithoutCarPostsInput = {
    where?: carDetailsWhereInput
    data: XOR<carDetailsUpdateWithoutCarPostsInput, carDetailsUncheckedUpdateWithoutCarPostsInput>
  }

  export type carDetailsUpdateWithoutCarPostsInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutCarPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GearBoxCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type GearBoxUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type GearBoxCreateOrConnectWithoutCarDetailssInput = {
    where: GearBoxWhereUniqueInput
    create: XOR<GearBoxCreateWithoutCarDetailssInput, GearBoxUncheckedCreateWithoutCarDetailssInput>
  }

  export type ExteriorColorCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type ExteriorColorUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type ExteriorColorCreateOrConnectWithoutCarDetailssInput = {
    where: ExteriorColorWhereUniqueInput
    create: XOR<ExteriorColorCreateWithoutCarDetailssInput, ExteriorColorUncheckedCreateWithoutCarDetailssInput>
  }

  export type CritAirCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type CritAirUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type CritAirCreateOrConnectWithoutCarDetailssInput = {
    where: CritAirWhereUniqueInput
    create: XOR<CritAirCreateWithoutCarDetailssInput, CritAirUncheckedCreateWithoutCarDetailssInput>
  }

  export type EmissionCo2CreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type EmissionCo2UncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type EmissionCo2CreateOrConnectWithoutCarDetailssInput = {
    where: EmissionCo2WhereUniqueInput
    create: XOR<EmissionCo2CreateWithoutCarDetailssInput, EmissionCo2UncheckedCreateWithoutCarDetailssInput>
  }

  export type EnergyCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type EnergyUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type EnergyCreateOrConnectWithoutCarDetailssInput = {
    where: EnergyWhereUniqueInput
    create: XOR<EnergyCreateWithoutCarDetailssInput, EnergyUncheckedCreateWithoutCarDetailssInput>
  }

  export type EuroStandardCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type EuroStandardUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type EuroStandardCreateOrConnectWithoutCarDetailssInput = {
    where: EuroStandardWhereUniqueInput
    create: XOR<EuroStandardCreateWithoutCarDetailssInput, EuroStandardUncheckedCreateWithoutCarDetailssInput>
  }

  export type OriginCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type OriginUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type OriginCreateOrConnectWithoutCarDetailssInput = {
    where: OriginWhereUniqueInput
    create: XOR<OriginCreateWithoutCarDetailssInput, OriginUncheckedCreateWithoutCarDetailssInput>
  }

  export type UpholsteryCreateWithoutCarDetailssInput = {
    name?: string | null
  }

  export type UpholsteryUncheckedCreateWithoutCarDetailssInput = {
    id?: number
    name?: string | null
  }

  export type UpholsteryCreateOrConnectWithoutCarDetailssInput = {
    where: UpholsteryWhereUniqueInput
    create: XOR<UpholsteryCreateWithoutCarDetailssInput, UpholsteryUncheckedCreateWithoutCarDetailssInput>
  }

  export type carPostsCreateWithoutCarDetailsInput = {
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    user?: UsersCreateNestedOneWithoutCarPostsInput
  }

  export type carPostsUncheckedCreateWithoutCarDetailsInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    userId?: number | null
  }

  export type carPostsCreateOrConnectWithoutCarDetailsInput = {
    where: carPostsWhereUniqueInput
    create: XOR<carPostsCreateWithoutCarDetailsInput, carPostsUncheckedCreateWithoutCarDetailsInput>
  }

  export type carPostsCreateManyCarDetailsInputEnvelope = {
    data: carPostsCreateManyCarDetailsInput | carPostsCreateManyCarDetailsInput[]
    skipDuplicates?: boolean
  }

  export type GearBoxUpsertWithoutCarDetailssInput = {
    update: XOR<GearBoxUpdateWithoutCarDetailssInput, GearBoxUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<GearBoxCreateWithoutCarDetailssInput, GearBoxUncheckedCreateWithoutCarDetailssInput>
    where?: GearBoxWhereInput
  }

  export type GearBoxUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: GearBoxWhereInput
    data: XOR<GearBoxUpdateWithoutCarDetailssInput, GearBoxUncheckedUpdateWithoutCarDetailssInput>
  }

  export type GearBoxUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GearBoxUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExteriorColorUpsertWithoutCarDetailssInput = {
    update: XOR<ExteriorColorUpdateWithoutCarDetailssInput, ExteriorColorUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<ExteriorColorCreateWithoutCarDetailssInput, ExteriorColorUncheckedCreateWithoutCarDetailssInput>
    where?: ExteriorColorWhereInput
  }

  export type ExteriorColorUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: ExteriorColorWhereInput
    data: XOR<ExteriorColorUpdateWithoutCarDetailssInput, ExteriorColorUncheckedUpdateWithoutCarDetailssInput>
  }

  export type ExteriorColorUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExteriorColorUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CritAirUpsertWithoutCarDetailssInput = {
    update: XOR<CritAirUpdateWithoutCarDetailssInput, CritAirUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<CritAirCreateWithoutCarDetailssInput, CritAirUncheckedCreateWithoutCarDetailssInput>
    where?: CritAirWhereInput
  }

  export type CritAirUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: CritAirWhereInput
    data: XOR<CritAirUpdateWithoutCarDetailssInput, CritAirUncheckedUpdateWithoutCarDetailssInput>
  }

  export type CritAirUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CritAirUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmissionCo2UpsertWithoutCarDetailssInput = {
    update: XOR<EmissionCo2UpdateWithoutCarDetailssInput, EmissionCo2UncheckedUpdateWithoutCarDetailssInput>
    create: XOR<EmissionCo2CreateWithoutCarDetailssInput, EmissionCo2UncheckedCreateWithoutCarDetailssInput>
    where?: EmissionCo2WhereInput
  }

  export type EmissionCo2UpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: EmissionCo2WhereInput
    data: XOR<EmissionCo2UpdateWithoutCarDetailssInput, EmissionCo2UncheckedUpdateWithoutCarDetailssInput>
  }

  export type EmissionCo2UpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmissionCo2UncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnergyUpsertWithoutCarDetailssInput = {
    update: XOR<EnergyUpdateWithoutCarDetailssInput, EnergyUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<EnergyCreateWithoutCarDetailssInput, EnergyUncheckedCreateWithoutCarDetailssInput>
    where?: EnergyWhereInput
  }

  export type EnergyUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: EnergyWhereInput
    data: XOR<EnergyUpdateWithoutCarDetailssInput, EnergyUncheckedUpdateWithoutCarDetailssInput>
  }

  export type EnergyUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnergyUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EuroStandardUpsertWithoutCarDetailssInput = {
    update: XOR<EuroStandardUpdateWithoutCarDetailssInput, EuroStandardUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<EuroStandardCreateWithoutCarDetailssInput, EuroStandardUncheckedCreateWithoutCarDetailssInput>
    where?: EuroStandardWhereInput
  }

  export type EuroStandardUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: EuroStandardWhereInput
    data: XOR<EuroStandardUpdateWithoutCarDetailssInput, EuroStandardUncheckedUpdateWithoutCarDetailssInput>
  }

  export type EuroStandardUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EuroStandardUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OriginUpsertWithoutCarDetailssInput = {
    update: XOR<OriginUpdateWithoutCarDetailssInput, OriginUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<OriginCreateWithoutCarDetailssInput, OriginUncheckedCreateWithoutCarDetailssInput>
    where?: OriginWhereInput
  }

  export type OriginUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: OriginWhereInput
    data: XOR<OriginUpdateWithoutCarDetailssInput, OriginUncheckedUpdateWithoutCarDetailssInput>
  }

  export type OriginUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OriginUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpholsteryUpsertWithoutCarDetailssInput = {
    update: XOR<UpholsteryUpdateWithoutCarDetailssInput, UpholsteryUncheckedUpdateWithoutCarDetailssInput>
    create: XOR<UpholsteryCreateWithoutCarDetailssInput, UpholsteryUncheckedCreateWithoutCarDetailssInput>
    where?: UpholsteryWhereInput
  }

  export type UpholsteryUpdateToOneWithWhereWithoutCarDetailssInput = {
    where?: UpholsteryWhereInput
    data: XOR<UpholsteryUpdateWithoutCarDetailssInput, UpholsteryUncheckedUpdateWithoutCarDetailssInput>
  }

  export type UpholsteryUpdateWithoutCarDetailssInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpholsteryUncheckedUpdateWithoutCarDetailssInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carPostsUpsertWithWhereUniqueWithoutCarDetailsInput = {
    where: carPostsWhereUniqueInput
    update: XOR<carPostsUpdateWithoutCarDetailsInput, carPostsUncheckedUpdateWithoutCarDetailsInput>
    create: XOR<carPostsCreateWithoutCarDetailsInput, carPostsUncheckedCreateWithoutCarDetailsInput>
  }

  export type carPostsUpdateWithWhereUniqueWithoutCarDetailsInput = {
    where: carPostsWhereUniqueInput
    data: XOR<carPostsUpdateWithoutCarDetailsInput, carPostsUncheckedUpdateWithoutCarDetailsInput>
  }

  export type carPostsUpdateManyWithWhereWithoutCarDetailsInput = {
    where: carPostsScalarWhereInput
    data: XOR<carPostsUpdateManyMutationInput, carPostsUncheckedUpdateManyWithoutCarDetailsInput>
  }

  export type carDetailsCreateWithoutGearboxInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutGearboxInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutGearboxInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutGearboxInput, carDetailsUncheckedCreateWithoutGearboxInput>
  }

  export type carDetailsCreateManyGearboxInputEnvelope = {
    data: carDetailsCreateManyGearboxInput | carDetailsCreateManyGearboxInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutGearboxInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutGearboxInput, carDetailsUncheckedUpdateWithoutGearboxInput>
    create: XOR<carDetailsCreateWithoutGearboxInput, carDetailsUncheckedCreateWithoutGearboxInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutGearboxInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutGearboxInput, carDetailsUncheckedUpdateWithoutGearboxInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutGearboxInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutGearboxInput>
  }

  export type carDetailsScalarWhereInput = {
    AND?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
    OR?: carDetailsScalarWhereInput[]
    NOT?: carDetailsScalarWhereInput | carDetailsScalarWhereInput[]
    id?: IntFilter<"carDetails"> | number
    carId?: IntNullableFilter<"carDetails"> | number | null
    provenanceId?: IntNullableFilter<"carDetails"> | number | null
    dateMiseEnCirculation?: DateTimeNullableFilter<"carDetails"> | Date | string | null
    controleTechnique?: BoolNullableFilter<"carDetails"> | boolean | null
    premiereMain?: BoolNullableFilter<"carDetails"> | boolean | null
    energieId?: IntNullableFilter<"carDetails"> | number | null
    boiteDeVitesseId?: IntNullableFilter<"carDetails"> | number | null
    couleurExterieurId?: IntNullableFilter<"carDetails"> | number | null
    sellerieId?: IntNullableFilter<"carDetails"> | number | null
    nbPortes?: IntNullableFilter<"carDetails"> | number | null
    nbPlaces?: IntNullableFilter<"carDetails"> | number | null
    volumeCoffre?: IntNullableFilter<"carDetails"> | number | null
    puissanceFiscale?: IntNullableFilter<"carDetails"> | number | null
    puissanceDin?: IntNullableFilter<"carDetails"> | number | null
    normeEuroId?: IntNullableFilter<"carDetails"> | number | null
    critAirId?: IntNullableFilter<"carDetails"> | number | null
    consommationMixte?: FloatNullableFilter<"carDetails"> | number | null
    emissionCo2Id?: IntNullableFilter<"carDetails"> | number | null
  }

  export type carDetailsCreateWithoutCritAirInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutCritAirInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutCritAirInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutCritAirInput, carDetailsUncheckedCreateWithoutCritAirInput>
  }

  export type carDetailsCreateManyCritAirInputEnvelope = {
    data: carDetailsCreateManyCritAirInput | carDetailsCreateManyCritAirInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutCritAirInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutCritAirInput, carDetailsUncheckedUpdateWithoutCritAirInput>
    create: XOR<carDetailsCreateWithoutCritAirInput, carDetailsUncheckedCreateWithoutCritAirInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutCritAirInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutCritAirInput, carDetailsUncheckedUpdateWithoutCritAirInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutCritAirInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutCritAirInput>
  }

  export type carDetailsCreateWithoutEmissionCo2Input = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutEmissionCo2Input = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutEmissionCo2Input = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutEmissionCo2Input, carDetailsUncheckedCreateWithoutEmissionCo2Input>
  }

  export type carDetailsCreateManyEmissionCo2InputEnvelope = {
    data: carDetailsCreateManyEmissionCo2Input | carDetailsCreateManyEmissionCo2Input[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutEmissionCo2Input = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutEmissionCo2Input, carDetailsUncheckedUpdateWithoutEmissionCo2Input>
    create: XOR<carDetailsCreateWithoutEmissionCo2Input, carDetailsUncheckedCreateWithoutEmissionCo2Input>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutEmissionCo2Input = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutEmissionCo2Input, carDetailsUncheckedUpdateWithoutEmissionCo2Input>
  }

  export type carDetailsUpdateManyWithWhereWithoutEmissionCo2Input = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutEmissionCo2Input>
  }

  export type carDetailsCreateWithoutEnergyInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutEnergyInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutEnergyInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutEnergyInput, carDetailsUncheckedCreateWithoutEnergyInput>
  }

  export type carDetailsCreateManyEnergyInputEnvelope = {
    data: carDetailsCreateManyEnergyInput | carDetailsCreateManyEnergyInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutEnergyInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutEnergyInput, carDetailsUncheckedUpdateWithoutEnergyInput>
    create: XOR<carDetailsCreateWithoutEnergyInput, carDetailsUncheckedCreateWithoutEnergyInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutEnergyInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutEnergyInput, carDetailsUncheckedUpdateWithoutEnergyInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutEnergyInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutEnergyInput>
  }

  export type carDetailsCreateWithoutEuroStandardInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutEuroStandardInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutEuroStandardInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutEuroStandardInput, carDetailsUncheckedCreateWithoutEuroStandardInput>
  }

  export type carDetailsCreateManyEuroStandardInputEnvelope = {
    data: carDetailsCreateManyEuroStandardInput | carDetailsCreateManyEuroStandardInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutEuroStandardInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutEuroStandardInput, carDetailsUncheckedUpdateWithoutEuroStandardInput>
    create: XOR<carDetailsCreateWithoutEuroStandardInput, carDetailsUncheckedCreateWithoutEuroStandardInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutEuroStandardInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutEuroStandardInput, carDetailsUncheckedUpdateWithoutEuroStandardInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutEuroStandardInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutEuroStandardInput>
  }

  export type carDetailsCreateWithoutExteriorColorInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutExteriorColorInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutExteriorColorInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutExteriorColorInput, carDetailsUncheckedCreateWithoutExteriorColorInput>
  }

  export type carDetailsCreateManyExteriorColorInputEnvelope = {
    data: carDetailsCreateManyExteriorColorInput | carDetailsCreateManyExteriorColorInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutExteriorColorInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutExteriorColorInput, carDetailsUncheckedUpdateWithoutExteriorColorInput>
    create: XOR<carDetailsCreateWithoutExteriorColorInput, carDetailsUncheckedCreateWithoutExteriorColorInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutExteriorColorInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutExteriorColorInput, carDetailsUncheckedUpdateWithoutExteriorColorInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutExteriorColorInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutExteriorColorInput>
  }

  export type carDetailsCreateWithoutOriginInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    upholstery?: UpholsteryCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutOriginInput = {
    id?: number
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutOriginInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutOriginInput, carDetailsUncheckedCreateWithoutOriginInput>
  }

  export type carDetailsCreateManyOriginInputEnvelope = {
    data: carDetailsCreateManyOriginInput | carDetailsCreateManyOriginInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutOriginInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutOriginInput, carDetailsUncheckedUpdateWithoutOriginInput>
    create: XOR<carDetailsCreateWithoutOriginInput, carDetailsUncheckedCreateWithoutOriginInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutOriginInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutOriginInput, carDetailsUncheckedUpdateWithoutOriginInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutOriginInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutOriginInput>
  }

  export type carDetailsCreateWithoutUpholsteryInput = {
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    consommationMixte?: number | null
    gearbox?: GearBoxCreateNestedOneWithoutCarDetailssInput
    exteriorColor?: ExteriorColorCreateNestedOneWithoutCarDetailssInput
    critAir?: CritAirCreateNestedOneWithoutCarDetailssInput
    emissionCo2?: EmissionCo2CreateNestedOneWithoutCarDetailssInput
    energy?: EnergyCreateNestedOneWithoutCarDetailssInput
    euroStandard?: EuroStandardCreateNestedOneWithoutCarDetailssInput
    origin?: OriginCreateNestedOneWithoutCarDetailssInput
    carPosts?: carPostsCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsUncheckedCreateWithoutUpholsteryInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
    carPosts?: carPostsUncheckedCreateNestedManyWithoutCarDetailsInput
  }

  export type carDetailsCreateOrConnectWithoutUpholsteryInput = {
    where: carDetailsWhereUniqueInput
    create: XOR<carDetailsCreateWithoutUpholsteryInput, carDetailsUncheckedCreateWithoutUpholsteryInput>
  }

  export type carDetailsCreateManyUpholsteryInputEnvelope = {
    data: carDetailsCreateManyUpholsteryInput | carDetailsCreateManyUpholsteryInput[]
    skipDuplicates?: boolean
  }

  export type carDetailsUpsertWithWhereUniqueWithoutUpholsteryInput = {
    where: carDetailsWhereUniqueInput
    update: XOR<carDetailsUpdateWithoutUpholsteryInput, carDetailsUncheckedUpdateWithoutUpholsteryInput>
    create: XOR<carDetailsCreateWithoutUpholsteryInput, carDetailsUncheckedCreateWithoutUpholsteryInput>
  }

  export type carDetailsUpdateWithWhereUniqueWithoutUpholsteryInput = {
    where: carDetailsWhereUniqueInput
    data: XOR<carDetailsUpdateWithoutUpholsteryInput, carDetailsUncheckedUpdateWithoutUpholsteryInput>
  }

  export type carDetailsUpdateManyWithWhereWithoutUpholsteryInput = {
    where: carDetailsScalarWhereInput
    data: XOR<carDetailsUpdateManyMutationInput, carDetailsUncheckedUpdateManyWithoutUpholsteryInput>
  }

  export type AccountCreateManyUserInput = {
    id?: number
    providerType?: string | null
    providerId?: string | null
    providerAccountId?: string | null
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type carPostsCreateManyUserInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    carDetailsId?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: number
    expires?: Date | string | null
    sessionToken?: string | null
    accessToken?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type carPostsUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    carDetails?: carDetailsUpdateOneWithoutCarPostsNestedInput
  }

  export type carPostsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carPostsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    carDetailsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type carPostsCreateManyCarDetailsInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: number | null
    imageUrl?: string | null
    km?: number | null
    year?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    status?: string | null
    userId?: number | null
  }

  export type carPostsUpdateWithoutCarDetailsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneWithoutCarPostsNestedInput
  }

  export type carPostsUncheckedUpdateWithoutCarDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carPostsUncheckedUpdateManyWithoutCarDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    km?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyGearboxInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutGearboxInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutGearboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutGearboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyCritAirInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutCritAirInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutCritAirInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutCritAirInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyEmissionCo2Input = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
  }

  export type carDetailsUpdateWithoutEmissionCo2Input = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutEmissionCo2Input = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutEmissionCo2Input = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyEnergyInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutEnergyInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutEnergyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutEnergyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyEuroStandardInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutEuroStandardInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutEuroStandardInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutEuroStandardInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyExteriorColorInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutExteriorColorInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutExteriorColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutExteriorColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyOriginInput = {
    id?: number
    carId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    sellerieId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutOriginInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    upholstery?: UpholsteryUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutOriginInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutOriginInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerieId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carDetailsCreateManyUpholsteryInput = {
    id?: number
    carId?: number | null
    provenanceId?: number | null
    dateMiseEnCirculation?: Date | string | null
    controleTechnique?: boolean | null
    premiereMain?: boolean | null
    energieId?: number | null
    boiteDeVitesseId?: number | null
    couleurExterieurId?: number | null
    nbPortes?: number | null
    nbPlaces?: number | null
    volumeCoffre?: number | null
    puissanceFiscale?: number | null
    puissanceDin?: number | null
    normeEuroId?: number | null
    critAirId?: number | null
    consommationMixte?: number | null
    emissionCo2Id?: number | null
  }

  export type carDetailsUpdateWithoutUpholsteryInput = {
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    gearbox?: GearBoxUpdateOneWithoutCarDetailssNestedInput
    exteriorColor?: ExteriorColorUpdateOneWithoutCarDetailssNestedInput
    critAir?: CritAirUpdateOneWithoutCarDetailssNestedInput
    emissionCo2?: EmissionCo2UpdateOneWithoutCarDetailssNestedInput
    energy?: EnergyUpdateOneWithoutCarDetailssNestedInput
    euroStandard?: EuroStandardUpdateOneWithoutCarDetailssNestedInput
    origin?: OriginUpdateOneWithoutCarDetailssNestedInput
    carPosts?: carPostsUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateWithoutUpholsteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
    carPosts?: carPostsUncheckedUpdateManyWithoutCarDetailsNestedInput
  }

  export type carDetailsUncheckedUpdateManyWithoutUpholsteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    provenanceId?: NullableIntFieldUpdateOperationsInput | number | null
    dateMiseEnCirculation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    controleTechnique?: NullableBoolFieldUpdateOperationsInput | boolean | null
    premiereMain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    energieId?: NullableIntFieldUpdateOperationsInput | number | null
    boiteDeVitesseId?: NullableIntFieldUpdateOperationsInput | number | null
    couleurExterieurId?: NullableIntFieldUpdateOperationsInput | number | null
    nbPortes?: NullableIntFieldUpdateOperationsInput | number | null
    nbPlaces?: NullableIntFieldUpdateOperationsInput | number | null
    volumeCoffre?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceFiscale?: NullableIntFieldUpdateOperationsInput | number | null
    puissanceDin?: NullableIntFieldUpdateOperationsInput | number | null
    normeEuroId?: NullableIntFieldUpdateOperationsInput | number | null
    critAirId?: NullableIntFieldUpdateOperationsInput | number | null
    consommationMixte?: NullableFloatFieldUpdateOperationsInput | number | null
    emissionCo2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarDetailsCountOutputTypeDefaultArgs instead
     */
    export type CarDetailsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CarDetailsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GearBoxCountOutputTypeDefaultArgs instead
     */
    export type GearBoxCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GearBoxCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CritAirCountOutputTypeDefaultArgs instead
     */
    export type CritAirCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CritAirCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmissionCo2CountOutputTypeDefaultArgs instead
     */
    export type EmissionCo2CountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmissionCo2CountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnergyCountOutputTypeDefaultArgs instead
     */
    export type EnergyCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EnergyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EuroStandardCountOutputTypeDefaultArgs instead
     */
    export type EuroStandardCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EuroStandardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExteriorColorCountOutputTypeDefaultArgs instead
     */
    export type ExteriorColorCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ExteriorColorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginCountOutputTypeDefaultArgs instead
     */
    export type OriginCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OriginCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpholsteryCountOutputTypeDefaultArgs instead
     */
    export type UpholsteryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UpholsteryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use carPostsDefaultArgs instead
     */
    export type carPostsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = carPostsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use carDetailsDefaultArgs instead
     */
    export type carDetailsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = carDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use testimonialsDefaultArgs instead
     */
    export type testimonialsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = testimonialsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GearBoxDefaultArgs instead
     */
    export type GearBoxArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GearBoxDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CritAirDefaultArgs instead
     */
    export type CritAirArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CritAirDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmissionCo2DefaultArgs instead
     */
    export type EmissionCo2Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmissionCo2DefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnergyDefaultArgs instead
     */
    export type EnergyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EnergyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EuroStandardDefaultArgs instead
     */
    export type EuroStandardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EuroStandardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExteriorColorDefaultArgs instead
     */
    export type ExteriorColorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ExteriorColorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginDefaultArgs instead
     */
    export type OriginArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OriginDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpholsteryDefaultArgs instead
     */
    export type UpholsteryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UpholsteryDefaultArgs<ExtArgs>

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