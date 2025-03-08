
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model FavoriteItem
 * 
 */
export type FavoriteItem = $Result.DefaultSelection<Prisma.$FavoriteItemPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model RecipeIngredient
 * 
 */
export type RecipeIngredient = $Result.DefaultSelection<Prisma.$RecipeIngredientPayload>
/**
 * Model RecipeStep
 * 
 */
export type RecipeStep = $Result.DefaultSelection<Prisma.$RecipeStepPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeOfMeal: {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
  HEALTHY: 'HEALTHY',
  SNACK: 'SNACK',
  DESSERT: 'DESSERT',
  OTHER: 'OTHER'
};

export type TypeOfMeal = (typeof TypeOfMeal)[keyof typeof TypeOfMeal]


export const Type: {
  RECIPE: 'RECIPE',
  INGREDIENT: 'INGREDIENT',
  ARTICLE: 'ARTICLE'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type TypeOfMeal = $Enums.TypeOfMeal

export const TypeOfMeal: typeof $Enums.TypeOfMeal

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteItem`: Exposes CRUD operations for the **FavoriteItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteItems
    * const favoriteItems = await prisma.favoriteItem.findMany()
    * ```
    */
  get favoriteItem(): Prisma.FavoriteItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeIngredient`: Exposes CRUD operations for the **RecipeIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredient.findMany()
    * ```
    */
  get recipeIngredient(): Prisma.RecipeIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeStep`: Exposes CRUD operations for the **RecipeStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeSteps
    * const recipeSteps = await prisma.recipeStep.findMany()
    * ```
    */
  get recipeStep(): Prisma.RecipeStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Category: 'Category',
    User: 'User',
    Recipe: 'Recipe',
    FavoriteItem: 'FavoriteItem',
    Ingredient: 'Ingredient',
    RecipeIngredient: 'RecipeIngredient',
    RecipeStep: 'RecipeStep',
    Comment: 'Comment',
    Article: 'Article'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "category" | "user" | "recipe" | "favoriteItem" | "ingredient" | "recipeIngredient" | "recipeStep" | "comment" | "article"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      FavoriteItem: {
        payload: Prisma.$FavoriteItemPayload<ExtArgs>
        fields: Prisma.FavoriteItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>
          }
          findFirst: {
            args: Prisma.FavoriteItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>
          }
          findMany: {
            args: Prisma.FavoriteItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>[]
          }
          create: {
            args: Prisma.FavoriteItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>
          }
          createMany: {
            args: Prisma.FavoriteItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>[]
          }
          delete: {
            args: Prisma.FavoriteItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>
          }
          update: {
            args: Prisma.FavoriteItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteItemPayload>
          }
          aggregate: {
            args: Prisma.FavoriteItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteItem>
          }
          groupBy: {
            args: Prisma.FavoriteItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteItemCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteItemCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredient: {
        payload: Prisma.$RecipeIngredientPayload<ExtArgs>
        fields: Prisma.RecipeIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          delete: {
            args: Prisma.RecipeIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          update: {
            args: Prisma.RecipeIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          upsert: {
            args: Prisma.RecipeIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeIngredient>
          }
          groupBy: {
            args: Prisma.RecipeIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientCountAggregateOutputType> | number
          }
        }
      }
      RecipeStep: {
        payload: Prisma.$RecipeStepPayload<ExtArgs>
        fields: Prisma.RecipeStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>
          }
          findFirst: {
            args: Prisma.RecipeStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>
          }
          findMany: {
            args: Prisma.RecipeStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>[]
          }
          create: {
            args: Prisma.RecipeStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>
          }
          createMany: {
            args: Prisma.RecipeStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>[]
          }
          delete: {
            args: Prisma.RecipeStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>
          }
          update: {
            args: Prisma.RecipeStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>
          }
          deleteMany: {
            args: Prisma.RecipeStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>[]
          }
          upsert: {
            args: Prisma.RecipeStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeStepPayload>
          }
          aggregate: {
            args: Prisma.RecipeStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeStep>
          }
          groupBy: {
            args: Prisma.RecipeStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeStepCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeStepCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    user?: UserOmit
    recipe?: RecipeOmit
    favoriteItem?: FavoriteItemOmit
    ingredient?: IngredientOmit
    recipeIngredient?: RecipeIngredientOmit
    recipeStep?: RecipeStepOmit
    comment?: CommentOmit
    article?: ArticleOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recipes: number
    favorites: number
    articles: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
    steps: number
    comments: number
    favorites: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs
    comments?: boolean | RecipeCountOutputTypeCountCommentsArgs
    favorites?: boolean | RecipeCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeStepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteItemWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    recipeIngredient: number
    favorites: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredient?: boolean | IngredientCountOutputTypeCountRecipeIngredientArgs
    favorites?: boolean | IngredientCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountRecipeIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteItemWhereInput
  }


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    favorites: number
    comments: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | ArticleCountOutputTypeCountFavoritesArgs
    comments?: boolean | ArticleCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteItemWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    href: string | null
    img: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    href: string | null
    img: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    href: number
    img: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    href?: true
    img?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    href?: true
    img?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    href?: true
    img?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    href: string
    img: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    href?: boolean
    img?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    href?: boolean
    img?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    href?: boolean
    img?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    href?: boolean
    img?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "href" | "img", ExtArgs["result"]["category"]>

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      href: string
      img: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly href: FieldRef<"Category", 'String'>
    readonly img: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    supabaseAuthId: string | null
    username: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    supabaseAuthId: string | null
    username: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseAuthId: number
    username: number
    email: number
    password: number
    avatarUrl: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    username?: true
    email?: true
    password?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    username?: true
    email?: true
    password?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    username?: true
    email?: true
    password?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipes?: boolean | User$recipesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    articles?: boolean | User$articlesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseAuthId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseAuthId" | "username" | "email" | "password" | "avatarUrl" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | User$recipesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    articles?: boolean | User$articlesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      favorites: Prisma.$FavoriteItemPayload<ExtArgs>[]
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseAuthId: string
      username: string
      email: string
      password: string
      avatarUrl: string | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly supabaseAuthId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    where?: FavoriteItemWhereInput
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    cursor?: FavoriteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    cookingTime: number | null
    difficulty: number | null
  }

  export type RecipeSumAggregateOutputType = {
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    cookingTime: number | null
    difficulty: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    cookingTime: number | null
    difficulty: number | null
    typeOfMeal: $Enums.TypeOfMeal | null
    kitchen: string | null
    type: $Enums.Type | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    cookingTime: number | null
    difficulty: number | null
    typeOfMeal: $Enums.TypeOfMeal | null
    kitchen: string | null
    type: $Enums.Type | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: number
    kitchen: number
    type: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    cookingTime?: true
    difficulty?: true
  }

  export type RecipeSumAggregateInputType = {
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    cookingTime?: true
    difficulty?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    cookingTime?: true
    difficulty?: true
    typeOfMeal?: true
    kitchen?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    cookingTime?: true
    difficulty?: true
    typeOfMeal?: true
    kitchen?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    cookingTime?: true
    difficulty?: true
    typeOfMeal?: true
    kitchen?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen: string | null
    type: $Enums.Type
    createdAt: Date
    updatedAt: Date
    authorId: string
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    cookingTime?: boolean
    difficulty?: boolean
    typeOfMeal?: boolean
    kitchen?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    comments?: boolean | Recipe$commentsArgs<ExtArgs>
    favorites?: boolean | Recipe$favoritesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    cookingTime?: boolean
    difficulty?: boolean
    typeOfMeal?: boolean
    kitchen?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    cookingTime?: boolean
    difficulty?: boolean
    typeOfMeal?: boolean
    kitchen?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    cookingTime?: boolean
    difficulty?: boolean
    typeOfMeal?: boolean
    kitchen?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "calories" | "proteins" | "fats" | "carbs" | "cookingTime" | "difficulty" | "typeOfMeal" | "kitchen" | "type" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    comments?: boolean | Recipe$commentsArgs<ExtArgs>
    favorites?: boolean | Recipe$favoritesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      ingredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      steps: Prisma.$RecipeStepPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      favorites: Prisma.$FavoriteItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageUrl: string
      calories: number
      proteins: number
      fats: number
      carbs: number
      cookingTime: number
      difficulty: number
      typeOfMeal: $Enums.TypeOfMeal
      kitchen: string | null
      type: $Enums.Type
      createdAt: Date
      updatedAt: Date
      authorId: string
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    steps<T extends Recipe$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    comments<T extends Recipe$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    favorites<T extends Recipe$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Recipe model
   */ 
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly imageUrl: FieldRef<"Recipe", 'String'>
    readonly calories: FieldRef<"Recipe", 'Int'>
    readonly proteins: FieldRef<"Recipe", 'Float'>
    readonly fats: FieldRef<"Recipe", 'Float'>
    readonly carbs: FieldRef<"Recipe", 'Float'>
    readonly cookingTime: FieldRef<"Recipe", 'Int'>
    readonly difficulty: FieldRef<"Recipe", 'Int'>
    readonly typeOfMeal: FieldRef<"Recipe", 'TypeOfMeal'>
    readonly kitchen: FieldRef<"Recipe", 'String'>
    readonly type: FieldRef<"Recipe", 'Type'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Recipe", 'DateTime'>
    readonly authorId: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Recipe.steps
   */
  export type Recipe$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    where?: RecipeStepWhereInput
    orderBy?: RecipeStepOrderByWithRelationInput | RecipeStepOrderByWithRelationInput[]
    cursor?: RecipeStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * Recipe.comments
   */
  export type Recipe$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Recipe.favorites
   */
  export type Recipe$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    where?: FavoriteItemWhereInput
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    cursor?: FavoriteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteItem
   */

  export type AggregateFavoriteItem = {
    _count: FavoriteItemCountAggregateOutputType | null
    _min: FavoriteItemMinAggregateOutputType | null
    _max: FavoriteItemMaxAggregateOutputType | null
  }

  export type FavoriteItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    ingredientId: string | null
    articleId: string | null
    type: $Enums.Type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    ingredientId: string | null
    articleId: string | null
    type: $Enums.Type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteItemCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    ingredientId: number
    articleId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FavoriteItemMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    ingredientId?: true
    articleId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteItemMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    ingredientId?: true
    articleId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteItemCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    ingredientId?: true
    articleId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FavoriteItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteItem to aggregate.
     */
    where?: FavoriteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteItems to fetch.
     */
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteItems
    **/
    _count?: true | FavoriteItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteItemMaxAggregateInputType
  }

  export type GetFavoriteItemAggregateType<T extends FavoriteItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteItem[P]>
      : GetScalarType<T[P], AggregateFavoriteItem[P]>
  }




  export type FavoriteItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteItemWhereInput
    orderBy?: FavoriteItemOrderByWithAggregationInput | FavoriteItemOrderByWithAggregationInput[]
    by: FavoriteItemScalarFieldEnum[] | FavoriteItemScalarFieldEnum
    having?: FavoriteItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteItemCountAggregateInputType | true
    _min?: FavoriteItemMinAggregateInputType
    _max?: FavoriteItemMaxAggregateInputType
  }

  export type FavoriteItemGroupByOutputType = {
    id: string
    userId: string
    recipeId: string | null
    ingredientId: string | null
    articleId: string | null
    type: $Enums.Type
    createdAt: Date
    updatedAt: Date
    _count: FavoriteItemCountAggregateOutputType | null
    _min: FavoriteItemMinAggregateOutputType | null
    _max: FavoriteItemMaxAggregateOutputType | null
  }

  type GetFavoriteItemGroupByPayload<T extends FavoriteItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteItemGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteItemGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    articleId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | FavoriteItem$recipeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredient?: boolean | FavoriteItem$ingredientArgs<ExtArgs>
    article?: boolean | FavoriteItem$articleArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteItem"]>

  export type FavoriteItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    articleId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | FavoriteItem$recipeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredient?: boolean | FavoriteItem$ingredientArgs<ExtArgs>
    article?: boolean | FavoriteItem$articleArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteItem"]>

  export type FavoriteItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    articleId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | FavoriteItem$recipeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredient?: boolean | FavoriteItem$ingredientArgs<ExtArgs>
    article?: boolean | FavoriteItem$articleArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteItem"]>

  export type FavoriteItemSelectScalar = {
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    articleId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FavoriteItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recipeId" | "ingredientId" | "articleId" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["favoriteItem"]>
  export type FavoriteItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | FavoriteItem$recipeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredient?: boolean | FavoriteItem$ingredientArgs<ExtArgs>
    article?: boolean | FavoriteItem$articleArgs<ExtArgs>
  }
  export type FavoriteItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | FavoriteItem$recipeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredient?: boolean | FavoriteItem$ingredientArgs<ExtArgs>
    article?: boolean | FavoriteItem$articleArgs<ExtArgs>
  }
  export type FavoriteItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | FavoriteItem$recipeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredient?: boolean | FavoriteItem$ingredientArgs<ExtArgs>
    article?: boolean | FavoriteItem$articleArgs<ExtArgs>
  }

  export type $FavoriteItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteItem"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs> | null
      article: Prisma.$ArticlePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recipeId: string | null
      ingredientId: string | null
      articleId: string | null
      type: $Enums.Type
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["favoriteItem"]>
    composites: {}
  }

  type FavoriteItemGetPayload<S extends boolean | null | undefined | FavoriteItemDefaultArgs> = $Result.GetResult<Prisma.$FavoriteItemPayload, S>

  type FavoriteItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteItemCountAggregateInputType | true
    }

  export interface FavoriteItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteItem'], meta: { name: 'FavoriteItem' } }
    /**
     * Find zero or one FavoriteItem that matches the filter.
     * @param {FavoriteItemFindUniqueArgs} args - Arguments to find a FavoriteItem
     * @example
     * // Get one FavoriteItem
     * const favoriteItem = await prisma.favoriteItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteItemFindUniqueArgs>(args: SelectSubset<T, FavoriteItemFindUniqueArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FavoriteItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteItemFindUniqueOrThrowArgs} args - Arguments to find a FavoriteItem
     * @example
     * // Get one FavoriteItem
     * const favoriteItem = await prisma.favoriteItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FavoriteItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemFindFirstArgs} args - Arguments to find a FavoriteItem
     * @example
     * // Get one FavoriteItem
     * const favoriteItem = await prisma.favoriteItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteItemFindFirstArgs>(args?: SelectSubset<T, FavoriteItemFindFirstArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FavoriteItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemFindFirstOrThrowArgs} args - Arguments to find a FavoriteItem
     * @example
     * // Get one FavoriteItem
     * const favoriteItem = await prisma.favoriteItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FavoriteItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteItems
     * const favoriteItems = await prisma.favoriteItem.findMany()
     * 
     * // Get first 10 FavoriteItems
     * const favoriteItems = await prisma.favoriteItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteItemWithIdOnly = await prisma.favoriteItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteItemFindManyArgs>(args?: SelectSubset<T, FavoriteItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FavoriteItem.
     * @param {FavoriteItemCreateArgs} args - Arguments to create a FavoriteItem.
     * @example
     * // Create one FavoriteItem
     * const FavoriteItem = await prisma.favoriteItem.create({
     *   data: {
     *     // ... data to create a FavoriteItem
     *   }
     * })
     * 
     */
    create<T extends FavoriteItemCreateArgs>(args: SelectSubset<T, FavoriteItemCreateArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FavoriteItems.
     * @param {FavoriteItemCreateManyArgs} args - Arguments to create many FavoriteItems.
     * @example
     * // Create many FavoriteItems
     * const favoriteItem = await prisma.favoriteItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteItemCreateManyArgs>(args?: SelectSubset<T, FavoriteItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteItems and returns the data saved in the database.
     * @param {FavoriteItemCreateManyAndReturnArgs} args - Arguments to create many FavoriteItems.
     * @example
     * // Create many FavoriteItems
     * const favoriteItem = await prisma.favoriteItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteItems and only return the `id`
     * const favoriteItemWithIdOnly = await prisma.favoriteItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a FavoriteItem.
     * @param {FavoriteItemDeleteArgs} args - Arguments to delete one FavoriteItem.
     * @example
     * // Delete one FavoriteItem
     * const FavoriteItem = await prisma.favoriteItem.delete({
     *   where: {
     *     // ... filter to delete one FavoriteItem
     *   }
     * })
     * 
     */
    delete<T extends FavoriteItemDeleteArgs>(args: SelectSubset<T, FavoriteItemDeleteArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FavoriteItem.
     * @param {FavoriteItemUpdateArgs} args - Arguments to update one FavoriteItem.
     * @example
     * // Update one FavoriteItem
     * const favoriteItem = await prisma.favoriteItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteItemUpdateArgs>(args: SelectSubset<T, FavoriteItemUpdateArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FavoriteItems.
     * @param {FavoriteItemDeleteManyArgs} args - Arguments to filter FavoriteItems to delete.
     * @example
     * // Delete a few FavoriteItems
     * const { count } = await prisma.favoriteItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteItemDeleteManyArgs>(args?: SelectSubset<T, FavoriteItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteItems
     * const favoriteItem = await prisma.favoriteItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteItemUpdateManyArgs>(args: SelectSubset<T, FavoriteItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteItems and returns the data updated in the database.
     * @param {FavoriteItemUpdateManyAndReturnArgs} args - Arguments to update many FavoriteItems.
     * @example
     * // Update many FavoriteItems
     * const favoriteItem = await prisma.favoriteItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteItems and only return the `id`
     * const favoriteItemWithIdOnly = await prisma.favoriteItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one FavoriteItem.
     * @param {FavoriteItemUpsertArgs} args - Arguments to update or create a FavoriteItem.
     * @example
     * // Update or create a FavoriteItem
     * const favoriteItem = await prisma.favoriteItem.upsert({
     *   create: {
     *     // ... data to create a FavoriteItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteItem we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteItemUpsertArgs>(args: SelectSubset<T, FavoriteItemUpsertArgs<ExtArgs>>): Prisma__FavoriteItemClient<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FavoriteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemCountArgs} args - Arguments to filter FavoriteItems to count.
     * @example
     * // Count the number of FavoriteItems
     * const count = await prisma.favoriteItem.count({
     *   where: {
     *     // ... the filter for the FavoriteItems we want to count
     *   }
     * })
    **/
    count<T extends FavoriteItemCountArgs>(
      args?: Subset<T, FavoriteItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteItemAggregateArgs>(args: Subset<T, FavoriteItemAggregateArgs>): Prisma.PrismaPromise<GetFavoriteItemAggregateType<T>>

    /**
     * Group by FavoriteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteItemGroupByArgs} args - Group by arguments.
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
      T extends FavoriteItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteItemGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteItem model
   */
  readonly fields: FavoriteItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends FavoriteItem$recipeArgs<ExtArgs> = {}>(args?: Subset<T, FavoriteItem$recipeArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ingredient<T extends FavoriteItem$ingredientArgs<ExtArgs> = {}>(args?: Subset<T, FavoriteItem$ingredientArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    article<T extends FavoriteItem$articleArgs<ExtArgs> = {}>(args?: Subset<T, FavoriteItem$articleArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the FavoriteItem model
   */ 
  interface FavoriteItemFieldRefs {
    readonly id: FieldRef<"FavoriteItem", 'String'>
    readonly userId: FieldRef<"FavoriteItem", 'String'>
    readonly recipeId: FieldRef<"FavoriteItem", 'String'>
    readonly ingredientId: FieldRef<"FavoriteItem", 'String'>
    readonly articleId: FieldRef<"FavoriteItem", 'String'>
    readonly type: FieldRef<"FavoriteItem", 'Type'>
    readonly createdAt: FieldRef<"FavoriteItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FavoriteItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteItem findUnique
   */
  export type FavoriteItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteItem to fetch.
     */
    where: FavoriteItemWhereUniqueInput
  }

  /**
   * FavoriteItem findUniqueOrThrow
   */
  export type FavoriteItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteItem to fetch.
     */
    where: FavoriteItemWhereUniqueInput
  }

  /**
   * FavoriteItem findFirst
   */
  export type FavoriteItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteItem to fetch.
     */
    where?: FavoriteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteItems to fetch.
     */
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteItems.
     */
    cursor?: FavoriteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteItems.
     */
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * FavoriteItem findFirstOrThrow
   */
  export type FavoriteItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteItem to fetch.
     */
    where?: FavoriteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteItems to fetch.
     */
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteItems.
     */
    cursor?: FavoriteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteItems.
     */
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * FavoriteItem findMany
   */
  export type FavoriteItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteItems to fetch.
     */
    where?: FavoriteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteItems to fetch.
     */
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteItems.
     */
    cursor?: FavoriteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteItems.
     */
    skip?: number
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * FavoriteItem create
   */
  export type FavoriteItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteItem.
     */
    data: XOR<FavoriteItemCreateInput, FavoriteItemUncheckedCreateInput>
  }

  /**
   * FavoriteItem createMany
   */
  export type FavoriteItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteItems.
     */
    data: FavoriteItemCreateManyInput | FavoriteItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteItem createManyAndReturn
   */
  export type FavoriteItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteItems.
     */
    data: FavoriteItemCreateManyInput | FavoriteItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteItem update
   */
  export type FavoriteItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteItem.
     */
    data: XOR<FavoriteItemUpdateInput, FavoriteItemUncheckedUpdateInput>
    /**
     * Choose, which FavoriteItem to update.
     */
    where: FavoriteItemWhereUniqueInput
  }

  /**
   * FavoriteItem updateMany
   */
  export type FavoriteItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteItems.
     */
    data: XOR<FavoriteItemUpdateManyMutationInput, FavoriteItemUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteItems to update
     */
    where?: FavoriteItemWhereInput
    /**
     * Limit how many FavoriteItems to update.
     */
    limit?: number
  }

  /**
   * FavoriteItem updateManyAndReturn
   */
  export type FavoriteItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteItems.
     */
    data: XOR<FavoriteItemUpdateManyMutationInput, FavoriteItemUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteItems to update
     */
    where?: FavoriteItemWhereInput
    /**
     * Limit how many FavoriteItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteItem upsert
   */
  export type FavoriteItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteItem to update in case it exists.
     */
    where: FavoriteItemWhereUniqueInput
    /**
     * In case the FavoriteItem found by the `where` argument doesn't exist, create a new FavoriteItem with this data.
     */
    create: XOR<FavoriteItemCreateInput, FavoriteItemUncheckedCreateInput>
    /**
     * In case the FavoriteItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteItemUpdateInput, FavoriteItemUncheckedUpdateInput>
  }

  /**
   * FavoriteItem delete
   */
  export type FavoriteItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    /**
     * Filter which FavoriteItem to delete.
     */
    where: FavoriteItemWhereUniqueInput
  }

  /**
   * FavoriteItem deleteMany
   */
  export type FavoriteItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteItems to delete
     */
    where?: FavoriteItemWhereInput
    /**
     * Limit how many FavoriteItems to delete.
     */
    limit?: number
  }

  /**
   * FavoriteItem.recipe
   */
  export type FavoriteItem$recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
  }

  /**
   * FavoriteItem.ingredient
   */
  export type FavoriteItem$ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
  }

  /**
   * FavoriteItem.article
   */
  export type FavoriteItem$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
  }

  /**
   * FavoriteItem without action
   */
  export type FavoriteItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    weight: number | null
  }

  export type IngredientSumAggregateOutputType = {
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    weight: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    name: string | null
    description: string | null
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    weight: number | null
    type: $Enums.Type | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    name: string | null
    description: string | null
    calories: number | null
    proteins: number | null
    fats: number | null
    carbs: number | null
    weight: number | null
    type: $Enums.Type | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    imageUrl: number
    name: number
    description: number
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight: number
    type: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    weight?: true
  }

  export type IngredientSumAggregateInputType = {
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    weight?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    imageUrl?: true
    name?: true
    description?: true
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    weight?: true
    type?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    name?: true
    description?: true
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    weight?: true
    type?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    imageUrl?: true
    name?: true
    description?: true
    calories?: true
    proteins?: true
    fats?: true
    carbs?: true
    weight?: true
    type?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight: number | null
    type: $Enums.Type
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    name?: boolean
    description?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    weight?: boolean
    type?: boolean
    recipeIngredient?: boolean | Ingredient$recipeIngredientArgs<ExtArgs>
    favorites?: boolean | Ingredient$favoritesArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    name?: boolean
    description?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    weight?: boolean
    type?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    name?: boolean
    description?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    weight?: boolean
    type?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    name?: boolean
    description?: boolean
    calories?: boolean
    proteins?: boolean
    fats?: boolean
    carbs?: boolean
    weight?: boolean
    type?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "name" | "description" | "calories" | "proteins" | "fats" | "carbs" | "weight" | "type", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredient?: boolean | Ingredient$recipeIngredientArgs<ExtArgs>
    favorites?: boolean | Ingredient$favoritesArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      recipeIngredient: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      favorites: Prisma.$FavoriteItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      name: string
      description: string
      calories: number
      proteins: number
      fats: number
      carbs: number
      weight: number | null
      type: $Enums.Type
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipeIngredient<T extends Ingredient$recipeIngredientArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$recipeIngredientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    favorites<T extends Ingredient$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Ingredient model
   */ 
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly imageUrl: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly description: FieldRef<"Ingredient", 'String'>
    readonly calories: FieldRef<"Ingredient", 'Int'>
    readonly proteins: FieldRef<"Ingredient", 'Float'>
    readonly fats: FieldRef<"Ingredient", 'Float'>
    readonly carbs: FieldRef<"Ingredient", 'Float'>
    readonly weight: FieldRef<"Ingredient", 'Int'>
    readonly type: FieldRef<"Ingredient", 'Type'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.recipeIngredient
   */
  export type Ingredient$recipeIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient.favorites
   */
  export type Ingredient$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    where?: FavoriteItemWhereInput
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    cursor?: FavoriteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredient
   */

  export type AggregateRecipeIngredient = {
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  export type RecipeIngredientAvgAggregateOutputType = {
    quantity: number | null
  }

  export type RecipeIngredientSumAggregateOutputType = {
    quantity: number | null
  }

  export type RecipeIngredientMinAggregateOutputType = {
    id: string | null
    quantityWithUnit: string | null
    quantity: number | null
    recipeId: string | null
    ingredientId: string | null
  }

  export type RecipeIngredientMaxAggregateOutputType = {
    id: string | null
    quantityWithUnit: string | null
    quantity: number | null
    recipeId: string | null
    ingredientId: string | null
  }

  export type RecipeIngredientCountAggregateOutputType = {
    id: number
    quantityWithUnit: number
    quantity: number
    recipeId: number
    ingredientId: number
    _all: number
  }


  export type RecipeIngredientAvgAggregateInputType = {
    quantity?: true
  }

  export type RecipeIngredientSumAggregateInputType = {
    quantity?: true
  }

  export type RecipeIngredientMinAggregateInputType = {
    id?: true
    quantityWithUnit?: true
    quantity?: true
    recipeId?: true
    ingredientId?: true
  }

  export type RecipeIngredientMaxAggregateInputType = {
    id?: true
    quantityWithUnit?: true
    quantity?: true
    recipeId?: true
    ingredientId?: true
  }

  export type RecipeIngredientCountAggregateInputType = {
    id?: true
    quantityWithUnit?: true
    quantity?: true
    recipeId?: true
    ingredientId?: true
    _all?: true
  }

  export type RecipeIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredient to aggregate.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type GetRecipeIngredientAggregateType<T extends RecipeIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredient[P]>
      : GetScalarType<T[P], AggregateRecipeIngredient[P]>
  }




  export type RecipeIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithAggregationInput | RecipeIngredientOrderByWithAggregationInput[]
    by: RecipeIngredientScalarFieldEnum[] | RecipeIngredientScalarFieldEnum
    having?: RecipeIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientCountAggregateInputType | true
    _avg?: RecipeIngredientAvgAggregateInputType
    _sum?: RecipeIngredientSumAggregateInputType
    _min?: RecipeIngredientMinAggregateInputType
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type RecipeIngredientGroupByOutputType = {
    id: string
    quantityWithUnit: string
    quantity: number
    recipeId: string
    ingredientId: string
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  type GetRecipeIngredientGroupByPayload<T extends RecipeIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityWithUnit?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityWithUnit?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityWithUnit?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectScalar = {
    id?: boolean
    quantityWithUnit?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
  }

  export type RecipeIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantityWithUnit" | "quantity" | "recipeId" | "ingredientId", ExtArgs["result"]["recipeIngredient"]>
  export type RecipeIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $RecipeIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredient"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantityWithUnit: string
      quantity: number
      recipeId: string
      ingredientId: string
    }, ExtArgs["result"]["recipeIngredient"]>
    composites: {}
  }

  type RecipeIngredientGetPayload<S extends boolean | null | undefined | RecipeIngredientDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientPayload, S>

  type RecipeIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeIngredientCountAggregateInputType | true
    }

  export interface RecipeIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredient'], meta: { name: 'RecipeIngredient' } }
    /**
     * Find zero or one RecipeIngredient that matches the filter.
     * @param {RecipeIngredientFindUniqueArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeIngredientFindUniqueArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RecipeIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeIngredientFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RecipeIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeIngredientFindFirstArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RecipeIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeIngredientFindManyArgs>(args?: SelectSubset<T, RecipeIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RecipeIngredient.
     * @param {RecipeIngredientCreateArgs} args - Arguments to create a RecipeIngredient.
     * @example
     * // Create one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.create({
     *   data: {
     *     // ... data to create a RecipeIngredient
     *   }
     * })
     * 
     */
    create<T extends RecipeIngredientCreateArgs>(args: SelectSubset<T, RecipeIngredientCreateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RecipeIngredients.
     * @param {RecipeIngredientCreateManyArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeIngredientCreateManyArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeIngredients and returns the data saved in the database.
     * @param {RecipeIngredientCreateManyAndReturnArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RecipeIngredient.
     * @param {RecipeIngredientDeleteArgs} args - Arguments to delete one RecipeIngredient.
     * @example
     * // Delete one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredient
     *   }
     * })
     * 
     */
    delete<T extends RecipeIngredientDeleteArgs>(args: SelectSubset<T, RecipeIngredientDeleteArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RecipeIngredient.
     * @param {RecipeIngredientUpdateArgs} args - Arguments to update one RecipeIngredient.
     * @example
     * // Update one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeIngredientUpdateArgs>(args: SelectSubset<T, RecipeIngredientUpdateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeIngredientDeleteManyArgs>(args?: SelectSubset<T, RecipeIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeIngredientUpdateManyArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients and returns the data updated in the database.
     * @param {RecipeIngredientUpdateManyAndReturnArgs} args - Arguments to update many RecipeIngredients.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RecipeIngredient.
     * @param {RecipeIngredientUpsertArgs} args - Arguments to update or create a RecipeIngredient.
     * @example
     * // Update or create a RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredient we want to update
     *   }
     * })
     */
    upsert<T extends RecipeIngredientUpsertArgs>(args: SelectSubset<T, RecipeIngredientUpsertArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredient.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientCountArgs>(
      args?: Subset<T, RecipeIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeIngredientAggregateArgs>(args: Subset<T, RecipeIngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientAggregateType<T>>

    /**
     * Group by RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientGroupByArgs} args - Group by arguments.
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
      T extends RecipeIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredient model
   */
  readonly fields: RecipeIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the RecipeIngredient model
   */ 
  interface RecipeIngredientFieldRefs {
    readonly id: FieldRef<"RecipeIngredient", 'String'>
    readonly quantityWithUnit: FieldRef<"RecipeIngredient", 'String'>
    readonly quantity: FieldRef<"RecipeIngredient", 'Int'>
    readonly recipeId: FieldRef<"RecipeIngredient", 'String'>
    readonly ingredientId: FieldRef<"RecipeIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredient findUnique
   */
  export type RecipeIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findUniqueOrThrow
   */
  export type RecipeIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findFirst
   */
  export type RecipeIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findFirstOrThrow
   */
  export type RecipeIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findMany
   */
  export type RecipeIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient create
   */
  export type RecipeIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredient.
     */
    data: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
  }

  /**
   * RecipeIngredient createMany
   */
  export type RecipeIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredient createManyAndReturn
   */
  export type RecipeIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient update
   */
  export type RecipeIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredient.
     */
    data: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredient to update.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient updateMany
   */
  export type RecipeIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
  }

  /**
   * RecipeIngredient updateManyAndReturn
   */
  export type RecipeIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient upsert
   */
  export type RecipeIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredient to update in case it exists.
     */
    where: RecipeIngredientWhereUniqueInput
    /**
     * In case the RecipeIngredient found by the `where` argument doesn't exist, create a new RecipeIngredient with this data.
     */
    create: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
    /**
     * In case the RecipeIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
  }

  /**
   * RecipeIngredient delete
   */
  export type RecipeIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredient to delete.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient deleteMany
   */
  export type RecipeIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to delete.
     */
    limit?: number
  }

  /**
   * RecipeIngredient without action
   */
  export type RecipeIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
  }


  /**
   * Model RecipeStep
   */

  export type AggregateRecipeStep = {
    _count: RecipeStepCountAggregateOutputType | null
    _avg: RecipeStepAvgAggregateOutputType | null
    _sum: RecipeStepSumAggregateOutputType | null
    _min: RecipeStepMinAggregateOutputType | null
    _max: RecipeStepMaxAggregateOutputType | null
  }

  export type RecipeStepAvgAggregateOutputType = {
    stepNumber: number | null
  }

  export type RecipeStepSumAggregateOutputType = {
    stepNumber: number | null
  }

  export type RecipeStepMinAggregateOutputType = {
    id: string | null
    stepNumber: number | null
    description: string | null
    imageUrl: string | null
    recipeId: string | null
  }

  export type RecipeStepMaxAggregateOutputType = {
    id: string | null
    stepNumber: number | null
    description: string | null
    imageUrl: string | null
    recipeId: string | null
  }

  export type RecipeStepCountAggregateOutputType = {
    id: number
    stepNumber: number
    description: number
    imageUrl: number
    recipeId: number
    _all: number
  }


  export type RecipeStepAvgAggregateInputType = {
    stepNumber?: true
  }

  export type RecipeStepSumAggregateInputType = {
    stepNumber?: true
  }

  export type RecipeStepMinAggregateInputType = {
    id?: true
    stepNumber?: true
    description?: true
    imageUrl?: true
    recipeId?: true
  }

  export type RecipeStepMaxAggregateInputType = {
    id?: true
    stepNumber?: true
    description?: true
    imageUrl?: true
    recipeId?: true
  }

  export type RecipeStepCountAggregateInputType = {
    id?: true
    stepNumber?: true
    description?: true
    imageUrl?: true
    recipeId?: true
    _all?: true
  }

  export type RecipeStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeStep to aggregate.
     */
    where?: RecipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeSteps to fetch.
     */
    orderBy?: RecipeStepOrderByWithRelationInput | RecipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeSteps
    **/
    _count?: true | RecipeStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeStepMaxAggregateInputType
  }

  export type GetRecipeStepAggregateType<T extends RecipeStepAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeStep[P]>
      : GetScalarType<T[P], AggregateRecipeStep[P]>
  }




  export type RecipeStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeStepWhereInput
    orderBy?: RecipeStepOrderByWithAggregationInput | RecipeStepOrderByWithAggregationInput[]
    by: RecipeStepScalarFieldEnum[] | RecipeStepScalarFieldEnum
    having?: RecipeStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeStepCountAggregateInputType | true
    _avg?: RecipeStepAvgAggregateInputType
    _sum?: RecipeStepSumAggregateInputType
    _min?: RecipeStepMinAggregateInputType
    _max?: RecipeStepMaxAggregateInputType
  }

  export type RecipeStepGroupByOutputType = {
    id: string
    stepNumber: number
    description: string
    imageUrl: string | null
    recipeId: string
    _count: RecipeStepCountAggregateOutputType | null
    _avg: RecipeStepAvgAggregateOutputType | null
    _sum: RecipeStepSumAggregateOutputType | null
    _min: RecipeStepMinAggregateOutputType | null
    _max: RecipeStepMaxAggregateOutputType | null
  }

  type GetRecipeStepGroupByPayload<T extends RecipeStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeStepGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeStepGroupByOutputType[P]>
        }
      >
    >


  export type RecipeStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    imageUrl?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeStep"]>

  export type RecipeStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    imageUrl?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeStep"]>

  export type RecipeStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    imageUrl?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeStep"]>

  export type RecipeStepSelectScalar = {
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    imageUrl?: boolean
    recipeId?: boolean
  }

  export type RecipeStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stepNumber" | "description" | "imageUrl" | "recipeId", ExtArgs["result"]["recipeStep"]>
  export type RecipeStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $RecipeStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeStep"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stepNumber: number
      description: string
      imageUrl: string | null
      recipeId: string
    }, ExtArgs["result"]["recipeStep"]>
    composites: {}
  }

  type RecipeStepGetPayload<S extends boolean | null | undefined | RecipeStepDefaultArgs> = $Result.GetResult<Prisma.$RecipeStepPayload, S>

  type RecipeStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeStepCountAggregateInputType | true
    }

  export interface RecipeStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeStep'], meta: { name: 'RecipeStep' } }
    /**
     * Find zero or one RecipeStep that matches the filter.
     * @param {RecipeStepFindUniqueArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeStepFindUniqueArgs>(args: SelectSubset<T, RecipeStepFindUniqueArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RecipeStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeStepFindUniqueOrThrowArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeStepFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RecipeStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepFindFirstArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeStepFindFirstArgs>(args?: SelectSubset<T, RecipeStepFindFirstArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RecipeStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepFindFirstOrThrowArgs} args - Arguments to find a RecipeStep
     * @example
     * // Get one RecipeStep
     * const recipeStep = await prisma.recipeStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeStepFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RecipeSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeSteps
     * const recipeSteps = await prisma.recipeStep.findMany()
     * 
     * // Get first 10 RecipeSteps
     * const recipeSteps = await prisma.recipeStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeStepWithIdOnly = await prisma.recipeStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeStepFindManyArgs>(args?: SelectSubset<T, RecipeStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RecipeStep.
     * @param {RecipeStepCreateArgs} args - Arguments to create a RecipeStep.
     * @example
     * // Create one RecipeStep
     * const RecipeStep = await prisma.recipeStep.create({
     *   data: {
     *     // ... data to create a RecipeStep
     *   }
     * })
     * 
     */
    create<T extends RecipeStepCreateArgs>(args: SelectSubset<T, RecipeStepCreateArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RecipeSteps.
     * @param {RecipeStepCreateManyArgs} args - Arguments to create many RecipeSteps.
     * @example
     * // Create many RecipeSteps
     * const recipeStep = await prisma.recipeStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeStepCreateManyArgs>(args?: SelectSubset<T, RecipeStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeSteps and returns the data saved in the database.
     * @param {RecipeStepCreateManyAndReturnArgs} args - Arguments to create many RecipeSteps.
     * @example
     * // Create many RecipeSteps
     * const recipeStep = await prisma.recipeStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeSteps and only return the `id`
     * const recipeStepWithIdOnly = await prisma.recipeStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeStepCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RecipeStep.
     * @param {RecipeStepDeleteArgs} args - Arguments to delete one RecipeStep.
     * @example
     * // Delete one RecipeStep
     * const RecipeStep = await prisma.recipeStep.delete({
     *   where: {
     *     // ... filter to delete one RecipeStep
     *   }
     * })
     * 
     */
    delete<T extends RecipeStepDeleteArgs>(args: SelectSubset<T, RecipeStepDeleteArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RecipeStep.
     * @param {RecipeStepUpdateArgs} args - Arguments to update one RecipeStep.
     * @example
     * // Update one RecipeStep
     * const recipeStep = await prisma.recipeStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeStepUpdateArgs>(args: SelectSubset<T, RecipeStepUpdateArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RecipeSteps.
     * @param {RecipeStepDeleteManyArgs} args - Arguments to filter RecipeSteps to delete.
     * @example
     * // Delete a few RecipeSteps
     * const { count } = await prisma.recipeStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeStepDeleteManyArgs>(args?: SelectSubset<T, RecipeStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeSteps
     * const recipeStep = await prisma.recipeStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeStepUpdateManyArgs>(args: SelectSubset<T, RecipeStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeSteps and returns the data updated in the database.
     * @param {RecipeStepUpdateManyAndReturnArgs} args - Arguments to update many RecipeSteps.
     * @example
     * // Update many RecipeSteps
     * const recipeStep = await prisma.recipeStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeSteps and only return the `id`
     * const recipeStepWithIdOnly = await prisma.recipeStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeStepUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RecipeStep.
     * @param {RecipeStepUpsertArgs} args - Arguments to update or create a RecipeStep.
     * @example
     * // Update or create a RecipeStep
     * const recipeStep = await prisma.recipeStep.upsert({
     *   create: {
     *     // ... data to create a RecipeStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeStep we want to update
     *   }
     * })
     */
    upsert<T extends RecipeStepUpsertArgs>(args: SelectSubset<T, RecipeStepUpsertArgs<ExtArgs>>): Prisma__RecipeStepClient<$Result.GetResult<Prisma.$RecipeStepPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RecipeSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepCountArgs} args - Arguments to filter RecipeSteps to count.
     * @example
     * // Count the number of RecipeSteps
     * const count = await prisma.recipeStep.count({
     *   where: {
     *     // ... the filter for the RecipeSteps we want to count
     *   }
     * })
    **/
    count<T extends RecipeStepCountArgs>(
      args?: Subset<T, RecipeStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeStepAggregateArgs>(args: Subset<T, RecipeStepAggregateArgs>): Prisma.PrismaPromise<GetRecipeStepAggregateType<T>>

    /**
     * Group by RecipeStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeStepGroupByArgs} args - Group by arguments.
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
      T extends RecipeStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeStepGroupByArgs['orderBy'] }
        : { orderBy?: RecipeStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeStep model
   */
  readonly fields: RecipeStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the RecipeStep model
   */ 
  interface RecipeStepFieldRefs {
    readonly id: FieldRef<"RecipeStep", 'String'>
    readonly stepNumber: FieldRef<"RecipeStep", 'Int'>
    readonly description: FieldRef<"RecipeStep", 'String'>
    readonly imageUrl: FieldRef<"RecipeStep", 'String'>
    readonly recipeId: FieldRef<"RecipeStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeStep findUnique
   */
  export type RecipeStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * Filter, which RecipeStep to fetch.
     */
    where: RecipeStepWhereUniqueInput
  }

  /**
   * RecipeStep findUniqueOrThrow
   */
  export type RecipeStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * Filter, which RecipeStep to fetch.
     */
    where: RecipeStepWhereUniqueInput
  }

  /**
   * RecipeStep findFirst
   */
  export type RecipeStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * Filter, which RecipeStep to fetch.
     */
    where?: RecipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeSteps to fetch.
     */
    orderBy?: RecipeStepOrderByWithRelationInput | RecipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeSteps.
     */
    cursor?: RecipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeSteps.
     */
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * RecipeStep findFirstOrThrow
   */
  export type RecipeStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * Filter, which RecipeStep to fetch.
     */
    where?: RecipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeSteps to fetch.
     */
    orderBy?: RecipeStepOrderByWithRelationInput | RecipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeSteps.
     */
    cursor?: RecipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeSteps.
     */
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * RecipeStep findMany
   */
  export type RecipeStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * Filter, which RecipeSteps to fetch.
     */
    where?: RecipeStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeSteps to fetch.
     */
    orderBy?: RecipeStepOrderByWithRelationInput | RecipeStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeSteps.
     */
    cursor?: RecipeStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeSteps.
     */
    skip?: number
    distinct?: RecipeStepScalarFieldEnum | RecipeStepScalarFieldEnum[]
  }

  /**
   * RecipeStep create
   */
  export type RecipeStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeStep.
     */
    data: XOR<RecipeStepCreateInput, RecipeStepUncheckedCreateInput>
  }

  /**
   * RecipeStep createMany
   */
  export type RecipeStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeSteps.
     */
    data: RecipeStepCreateManyInput | RecipeStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeStep createManyAndReturn
   */
  export type RecipeStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeSteps.
     */
    data: RecipeStepCreateManyInput | RecipeStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeStep update
   */
  export type RecipeStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeStep.
     */
    data: XOR<RecipeStepUpdateInput, RecipeStepUncheckedUpdateInput>
    /**
     * Choose, which RecipeStep to update.
     */
    where: RecipeStepWhereUniqueInput
  }

  /**
   * RecipeStep updateMany
   */
  export type RecipeStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeSteps.
     */
    data: XOR<RecipeStepUpdateManyMutationInput, RecipeStepUncheckedUpdateManyInput>
    /**
     * Filter which RecipeSteps to update
     */
    where?: RecipeStepWhereInput
    /**
     * Limit how many RecipeSteps to update.
     */
    limit?: number
  }

  /**
   * RecipeStep updateManyAndReturn
   */
  export type RecipeStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * The data used to update RecipeSteps.
     */
    data: XOR<RecipeStepUpdateManyMutationInput, RecipeStepUncheckedUpdateManyInput>
    /**
     * Filter which RecipeSteps to update
     */
    where?: RecipeStepWhereInput
    /**
     * Limit how many RecipeSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeStep upsert
   */
  export type RecipeStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeStep to update in case it exists.
     */
    where: RecipeStepWhereUniqueInput
    /**
     * In case the RecipeStep found by the `where` argument doesn't exist, create a new RecipeStep with this data.
     */
    create: XOR<RecipeStepCreateInput, RecipeStepUncheckedCreateInput>
    /**
     * In case the RecipeStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeStepUpdateInput, RecipeStepUncheckedUpdateInput>
  }

  /**
   * RecipeStep delete
   */
  export type RecipeStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
    /**
     * Filter which RecipeStep to delete.
     */
    where: RecipeStepWhereUniqueInput
  }

  /**
   * RecipeStep deleteMany
   */
  export type RecipeStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeSteps to delete
     */
    where?: RecipeStepWhereInput
    /**
     * Limit how many RecipeSteps to delete.
     */
    limit?: number
  }

  /**
   * RecipeStep without action
   */
  export type RecipeStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeStep
     */
    select?: RecipeStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeStep
     */
    omit?: RecipeStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeStepInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.Type | null
    authorId: string | null
    recipeId: string | null
    articleId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.Type | null
    authorId: string | null
    recipeId: string | null
    articleId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    comment: number
    createdAt: number
    updatedAt: number
    type: number
    authorId: number
    recipeId: number
    articleId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    authorId?: true
    recipeId?: true
    articleId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    authorId?: true
    recipeId?: true
    articleId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    authorId?: true
    recipeId?: true
    articleId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    comment: string
    createdAt: Date
    updatedAt: Date
    type: $Enums.Type
    authorId: string
    recipeId: string | null
    articleId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    authorId?: boolean
    recipeId?: boolean
    articleId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | Comment$recipeArgs<ExtArgs>
    article?: boolean | Comment$articleArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    authorId?: boolean
    recipeId?: boolean
    articleId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | Comment$recipeArgs<ExtArgs>
    article?: boolean | Comment$articleArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    authorId?: boolean
    recipeId?: boolean
    articleId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | Comment$recipeArgs<ExtArgs>
    article?: boolean | Comment$articleArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    authorId?: boolean
    recipeId?: boolean
    articleId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "createdAt" | "updatedAt" | "type" | "authorId" | "recipeId" | "articleId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | Comment$recipeArgs<ExtArgs>
    article?: boolean | Comment$articleArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | Comment$recipeArgs<ExtArgs>
    article?: boolean | Comment$articleArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | Comment$recipeArgs<ExtArgs>
    article?: boolean | Comment$articleArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs> | null
      article: Prisma.$ArticlePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comment: string
      createdAt: Date
      updatedAt: Date
      type: $Enums.Type
      authorId: string
      recipeId: string | null
      articleId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    recipe<T extends Comment$recipeArgs<ExtArgs> = {}>(args?: Subset<T, Comment$recipeArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    article<T extends Comment$articleArgs<ExtArgs> = {}>(args?: Subset<T, Comment$articleArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly type: FieldRef<"Comment", 'Type'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly recipeId: FieldRef<"Comment", 'String'>
    readonly articleId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.recipe
   */
  export type Comment$recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
  }

  /**
   * Comment.article
   */
  export type Comment$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    text: string | null
    type: $Enums.Type | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    text: string | null
    type: $Enums.Type | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    text: number
    type: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    text?: true
    type?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    text?: true
    type?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    text?: true
    type?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    text?: boolean
    type?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | Article$favoritesArgs<ExtArgs>
    comments?: boolean | Article$commentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    text?: boolean
    type?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    text?: boolean
    type?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    text?: boolean
    type?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageUrl" | "text" | "type" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | Article$favoritesArgs<ExtArgs>
    comments?: boolean | Article$commentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      favorites: Prisma.$FavoriteItemPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      imageUrl: string
      text: string
      type: $Enums.Type
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    favorites<T extends Article$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Article$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    comments<T extends Article$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Article$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Article model
   */ 
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly imageUrl: FieldRef<"Article", 'String'>
    readonly text: FieldRef<"Article", 'String'>
    readonly type: FieldRef<"Article", 'Type'>
    readonly authorId: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.favorites
   */
  export type Article$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteItem
     */
    select?: FavoriteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteItem
     */
    omit?: FavoriteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteItemInclude<ExtArgs> | null
    where?: FavoriteItemWhereInput
    orderBy?: FavoriteItemOrderByWithRelationInput | FavoriteItemOrderByWithRelationInput[]
    cursor?: FavoriteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteItemScalarFieldEnum | FavoriteItemScalarFieldEnum[]
  }

  /**
   * Article.comments
   */
  export type Article$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    href: 'href',
    img: 'img'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    supabaseAuthId: 'supabaseAuthId',
    username: 'username',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    calories: 'calories',
    proteins: 'proteins',
    fats: 'fats',
    carbs: 'carbs',
    cookingTime: 'cookingTime',
    difficulty: 'difficulty',
    typeOfMeal: 'typeOfMeal',
    kitchen: 'kitchen',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const FavoriteItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    articleId: 'articleId',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FavoriteItemScalarFieldEnum = (typeof FavoriteItemScalarFieldEnum)[keyof typeof FavoriteItemScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    name: 'name',
    description: 'description',
    calories: 'calories',
    proteins: 'proteins',
    fats: 'fats',
    carbs: 'carbs',
    weight: 'weight',
    type: 'type'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const RecipeIngredientScalarFieldEnum: {
    id: 'id',
    quantityWithUnit: 'quantityWithUnit',
    quantity: 'quantity',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId'
  };

  export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum]


  export const RecipeStepScalarFieldEnum: {
    id: 'id',
    stepNumber: 'stepNumber',
    description: 'description',
    imageUrl: 'imageUrl',
    recipeId: 'recipeId'
  };

  export type RecipeStepScalarFieldEnum = (typeof RecipeStepScalarFieldEnum)[keyof typeof RecipeStepScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    authorId: 'authorId',
    recipeId: 'recipeId',
    articleId: 'articleId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageUrl: 'imageUrl',
    text: 'text',
    type: 'type',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TypeOfMeal'
   */
  export type EnumTypeOfMealFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeOfMeal'>
    


  /**
   * Reference to a field of type 'TypeOfMeal[]'
   */
  export type ListEnumTypeOfMealFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeOfMeal[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    href?: StringFilter<"Category"> | string
    img?: StringFilter<"Category"> | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    img?: SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    href?: StringFilter<"Category"> | string
    img?: StringFilter<"Category"> | string
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    img?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    href?: StringWithAggregatesFilter<"Category"> | string
    img?: StringWithAggregatesFilter<"Category"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    supabaseAuthId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recipes?: RecipeListRelationFilter
    favorites?: FavoriteItemListRelationFilter
    articles?: ArticleListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
    favorites?: FavoriteItemOrderByRelationAggregateInput
    articles?: ArticleOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseAuthId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recipes?: RecipeListRelationFilter
    favorites?: FavoriteItemListRelationFilter
    articles?: ArticleListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "supabaseAuthId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    supabaseAuthId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    imageUrl?: StringFilter<"Recipe"> | string
    calories?: IntFilter<"Recipe"> | number
    proteins?: FloatFilter<"Recipe"> | number
    fats?: FloatFilter<"Recipe"> | number
    carbs?: FloatFilter<"Recipe"> | number
    cookingTime?: IntFilter<"Recipe"> | number
    difficulty?: IntFilter<"Recipe"> | number
    typeOfMeal?: EnumTypeOfMealFilter<"Recipe"> | $Enums.TypeOfMeal
    kitchen?: StringNullableFilter<"Recipe"> | string | null
    type?: EnumTypeFilter<"Recipe"> | $Enums.Type
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    authorId?: StringFilter<"Recipe"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: RecipeIngredientListRelationFilter
    steps?: RecipeStepListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteItemListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
    typeOfMeal?: SortOrder
    kitchen?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    ingredients?: RecipeIngredientOrderByRelationAggregateInput
    steps?: RecipeStepOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    favorites?: FavoriteItemOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    title?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    imageUrl?: StringFilter<"Recipe"> | string
    calories?: IntFilter<"Recipe"> | number
    proteins?: FloatFilter<"Recipe"> | number
    fats?: FloatFilter<"Recipe"> | number
    carbs?: FloatFilter<"Recipe"> | number
    cookingTime?: IntFilter<"Recipe"> | number
    difficulty?: IntFilter<"Recipe"> | number
    typeOfMeal?: EnumTypeOfMealFilter<"Recipe"> | $Enums.TypeOfMeal
    kitchen?: StringNullableFilter<"Recipe"> | string | null
    type?: EnumTypeFilter<"Recipe"> | $Enums.Type
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    authorId?: StringFilter<"Recipe"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: RecipeIngredientListRelationFilter
    steps?: RecipeStepListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteItemListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
    typeOfMeal?: SortOrder
    kitchen?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    imageUrl?: StringWithAggregatesFilter<"Recipe"> | string
    calories?: IntWithAggregatesFilter<"Recipe"> | number
    proteins?: FloatWithAggregatesFilter<"Recipe"> | number
    fats?: FloatWithAggregatesFilter<"Recipe"> | number
    carbs?: FloatWithAggregatesFilter<"Recipe"> | number
    cookingTime?: IntWithAggregatesFilter<"Recipe"> | number
    difficulty?: IntWithAggregatesFilter<"Recipe"> | number
    typeOfMeal?: EnumTypeOfMealWithAggregatesFilter<"Recipe"> | $Enums.TypeOfMeal
    kitchen?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    type?: EnumTypeWithAggregatesFilter<"Recipe"> | $Enums.Type
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    authorId?: StringWithAggregatesFilter<"Recipe"> | string
  }

  export type FavoriteItemWhereInput = {
    AND?: FavoriteItemWhereInput | FavoriteItemWhereInput[]
    OR?: FavoriteItemWhereInput[]
    NOT?: FavoriteItemWhereInput | FavoriteItemWhereInput[]
    id?: StringFilter<"FavoriteItem"> | string
    userId?: StringFilter<"FavoriteItem"> | string
    recipeId?: StringNullableFilter<"FavoriteItem"> | string | null
    ingredientId?: StringNullableFilter<"FavoriteItem"> | string | null
    articleId?: StringNullableFilter<"FavoriteItem"> | string | null
    type?: EnumTypeFilter<"FavoriteItem"> | $Enums.Type
    createdAt?: DateTimeFilter<"FavoriteItem"> | Date | string
    updatedAt?: DateTimeFilter<"FavoriteItem"> | Date | string
    recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredient?: XOR<IngredientNullableScalarRelationFilter, IngredientWhereInput> | null
    article?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
  }

  export type FavoriteItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    ingredientId?: SortOrderInput | SortOrder
    articleId?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
  }

  export type FavoriteItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoriteItemWhereInput | FavoriteItemWhereInput[]
    OR?: FavoriteItemWhereInput[]
    NOT?: FavoriteItemWhereInput | FavoriteItemWhereInput[]
    userId?: StringFilter<"FavoriteItem"> | string
    recipeId?: StringNullableFilter<"FavoriteItem"> | string | null
    ingredientId?: StringNullableFilter<"FavoriteItem"> | string | null
    articleId?: StringNullableFilter<"FavoriteItem"> | string | null
    type?: EnumTypeFilter<"FavoriteItem"> | $Enums.Type
    createdAt?: DateTimeFilter<"FavoriteItem"> | Date | string
    updatedAt?: DateTimeFilter<"FavoriteItem"> | Date | string
    recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredient?: XOR<IngredientNullableScalarRelationFilter, IngredientWhereInput> | null
    article?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
  }, "id">

  export type FavoriteItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    ingredientId?: SortOrderInput | SortOrder
    articleId?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FavoriteItemCountOrderByAggregateInput
    _max?: FavoriteItemMaxOrderByAggregateInput
    _min?: FavoriteItemMinOrderByAggregateInput
  }

  export type FavoriteItemScalarWhereWithAggregatesInput = {
    AND?: FavoriteItemScalarWhereWithAggregatesInput | FavoriteItemScalarWhereWithAggregatesInput[]
    OR?: FavoriteItemScalarWhereWithAggregatesInput[]
    NOT?: FavoriteItemScalarWhereWithAggregatesInput | FavoriteItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavoriteItem"> | string
    userId?: StringWithAggregatesFilter<"FavoriteItem"> | string
    recipeId?: StringNullableWithAggregatesFilter<"FavoriteItem"> | string | null
    ingredientId?: StringNullableWithAggregatesFilter<"FavoriteItem"> | string | null
    articleId?: StringNullableWithAggregatesFilter<"FavoriteItem"> | string | null
    type?: EnumTypeWithAggregatesFilter<"FavoriteItem"> | $Enums.Type
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FavoriteItem"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    imageUrl?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    description?: StringFilter<"Ingredient"> | string
    calories?: IntFilter<"Ingredient"> | number
    proteins?: FloatFilter<"Ingredient"> | number
    fats?: FloatFilter<"Ingredient"> | number
    carbs?: FloatFilter<"Ingredient"> | number
    weight?: IntNullableFilter<"Ingredient"> | number | null
    type?: EnumTypeFilter<"Ingredient"> | $Enums.Type
    recipeIngredient?: RecipeIngredientListRelationFilter
    favorites?: FavoriteItemListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrderInput | SortOrder
    type?: SortOrder
    recipeIngredient?: RecipeIngredientOrderByRelationAggregateInput
    favorites?: FavoriteItemOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    imageUrl?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    description?: StringFilter<"Ingredient"> | string
    calories?: IntFilter<"Ingredient"> | number
    proteins?: FloatFilter<"Ingredient"> | number
    fats?: FloatFilter<"Ingredient"> | number
    carbs?: FloatFilter<"Ingredient"> | number
    weight?: IntNullableFilter<"Ingredient"> | number | null
    type?: EnumTypeFilter<"Ingredient"> | $Enums.Type
    recipeIngredient?: RecipeIngredientListRelationFilter
    favorites?: FavoriteItemListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrderInput | SortOrder
    type?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    imageUrl?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    description?: StringWithAggregatesFilter<"Ingredient"> | string
    calories?: IntWithAggregatesFilter<"Ingredient"> | number
    proteins?: FloatWithAggregatesFilter<"Ingredient"> | number
    fats?: FloatWithAggregatesFilter<"Ingredient"> | number
    carbs?: FloatWithAggregatesFilter<"Ingredient"> | number
    weight?: IntNullableWithAggregatesFilter<"Ingredient"> | number | null
    type?: EnumTypeWithAggregatesFilter<"Ingredient"> | $Enums.Type
  }

  export type RecipeIngredientWhereInput = {
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    quantityWithUnit?: StringFilter<"RecipeIngredient"> | string
    quantity?: IntFilter<"RecipeIngredient"> | number
    recipeId?: StringFilter<"RecipeIngredient"> | string
    ingredientId?: StringFilter<"RecipeIngredient"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type RecipeIngredientOrderByWithRelationInput = {
    id?: SortOrder
    quantityWithUnit?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type RecipeIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    quantityWithUnit?: StringFilter<"RecipeIngredient"> | string
    quantity?: IntFilter<"RecipeIngredient"> | number
    recipeId?: StringFilter<"RecipeIngredient"> | string
    ingredientId?: StringFilter<"RecipeIngredient"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id">

  export type RecipeIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    quantityWithUnit?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    _count?: RecipeIngredientCountOrderByAggregateInput
    _avg?: RecipeIngredientAvgOrderByAggregateInput
    _max?: RecipeIngredientMaxOrderByAggregateInput
    _min?: RecipeIngredientMinOrderByAggregateInput
    _sum?: RecipeIngredientSumOrderByAggregateInput
  }

  export type RecipeIngredientScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    quantityWithUnit?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    quantity?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    recipeId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    ingredientId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
  }

  export type RecipeStepWhereInput = {
    AND?: RecipeStepWhereInput | RecipeStepWhereInput[]
    OR?: RecipeStepWhereInput[]
    NOT?: RecipeStepWhereInput | RecipeStepWhereInput[]
    id?: StringFilter<"RecipeStep"> | string
    stepNumber?: IntFilter<"RecipeStep"> | number
    description?: StringFilter<"RecipeStep"> | string
    imageUrl?: StringNullableFilter<"RecipeStep"> | string | null
    recipeId?: StringFilter<"RecipeStep"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type RecipeStepOrderByWithRelationInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    recipeId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type RecipeStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeStepWhereInput | RecipeStepWhereInput[]
    OR?: RecipeStepWhereInput[]
    NOT?: RecipeStepWhereInput | RecipeStepWhereInput[]
    stepNumber?: IntFilter<"RecipeStep"> | number
    description?: StringFilter<"RecipeStep"> | string
    imageUrl?: StringNullableFilter<"RecipeStep"> | string | null
    recipeId?: StringFilter<"RecipeStep"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type RecipeStepOrderByWithAggregationInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    recipeId?: SortOrder
    _count?: RecipeStepCountOrderByAggregateInput
    _avg?: RecipeStepAvgOrderByAggregateInput
    _max?: RecipeStepMaxOrderByAggregateInput
    _min?: RecipeStepMinOrderByAggregateInput
    _sum?: RecipeStepSumOrderByAggregateInput
  }

  export type RecipeStepScalarWhereWithAggregatesInput = {
    AND?: RecipeStepScalarWhereWithAggregatesInput | RecipeStepScalarWhereWithAggregatesInput[]
    OR?: RecipeStepScalarWhereWithAggregatesInput[]
    NOT?: RecipeStepScalarWhereWithAggregatesInput | RecipeStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeStep"> | string
    stepNumber?: IntWithAggregatesFilter<"RecipeStep"> | number
    description?: StringWithAggregatesFilter<"RecipeStep"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"RecipeStep"> | string | null
    recipeId?: StringWithAggregatesFilter<"RecipeStep"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    type?: EnumTypeFilter<"Comment"> | $Enums.Type
    authorId?: StringFilter<"Comment"> | string
    recipeId?: StringNullableFilter<"Comment"> | string | null
    articleId?: StringNullableFilter<"Comment"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null
    article?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    articleId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    type?: EnumTypeFilter<"Comment"> | $Enums.Type
    authorId?: StringFilter<"Comment"> | string
    recipeId?: StringNullableFilter<"Comment"> | string | null
    articleId?: StringNullableFilter<"Comment"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null
    article?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    articleId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    comment?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    type?: EnumTypeWithAggregatesFilter<"Comment"> | $Enums.Type
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    recipeId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    articleId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    imageUrl?: StringFilter<"Article"> | string
    text?: StringFilter<"Article"> | string
    type?: EnumTypeFilter<"Article"> | $Enums.Type
    authorId?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteItemListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    text?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    favorites?: FavoriteItemOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    imageUrl?: StringFilter<"Article"> | string
    text?: StringFilter<"Article"> | string
    type?: EnumTypeFilter<"Article"> | $Enums.Type
    authorId?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteItemListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    text?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    imageUrl?: StringWithAggregatesFilter<"Article"> | string
    text?: StringWithAggregatesFilter<"Article"> | string
    type?: EnumTypeWithAggregatesFilter<"Article"> | $Enums.Type
    authorId?: StringWithAggregatesFilter<"Article"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    href: string
    img: string
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    href: string
    img: string
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    href: string
    img: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    favorites?: FavoriteItemCreateNestedManyWithoutUserInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutUserInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    favorites?: FavoriteItemUpdateManyWithoutUserNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutUserNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUpdateManyWithoutRecipeNestedInput
    comments?: CommentUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteItemCreateInput = {
    id?: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe?: RecipeCreateNestedOneWithoutFavoritesInput
    user: UserCreateNestedOneWithoutFavoritesInput
    ingredient?: IngredientCreateNestedOneWithoutFavoritesInput
    article?: ArticleCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteItemUncheckedCreateInput = {
    id?: string
    userId: string
    recipeId?: string | null
    ingredientId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneWithoutFavoritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    ingredient?: IngredientUpdateOneWithoutFavoritesNestedInput
    article?: ArticleUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemCreateManyInput = {
    id?: string
    userId: string
    recipeId?: string | null
    ingredientId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
    recipeIngredient?: RecipeIngredientCreateNestedManyWithoutIngredientInput
    favorites?: FavoriteItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
    recipeIngredient?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipeIngredient?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
    favorites?: FavoriteItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipeIngredient?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
  }

  export type RecipeIngredientCreateInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutRecipeIngredientInput
  }

  export type RecipeIngredientUncheckedCreateInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    recipeId: string
    ingredientId: string
  }

  export type RecipeIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput
  }

  export type RecipeIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateManyInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    recipeId: string
    ingredientId: string
  }

  export type RecipeIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeStepCreateInput = {
    id?: string
    stepNumber: number
    description: string
    imageUrl?: string | null
    recipe: RecipeCreateNestedOneWithoutStepsInput
  }

  export type RecipeStepUncheckedCreateInput = {
    id?: string
    stepNumber: number
    description: string
    imageUrl?: string | null
    recipeId: string
  }

  export type RecipeStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
  }

  export type RecipeStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeStepCreateManyInput = {
    id?: string
    stepNumber: number
    description: string
    imageUrl?: string | null
    recipeId: string
  }

  export type RecipeStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    author: UserCreateNestedOneWithoutCommentsInput
    recipe?: RecipeCreateNestedOneWithoutCommentsInput
    article?: ArticleCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    authorId: string
    recipeId?: string | null
    articleId?: string | null
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    recipe?: RecipeUpdateOneWithoutCommentsNestedInput
    article?: ArticleUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    authorId: string
    recipeId?: string | null
    articleId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutArticlesInput
    favorites?: FavoriteItemCreateNestedManyWithoutArticleInput
    comments?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutArticlesNestedInput
    favorites?: FavoriteItemUpdateManyWithoutArticleNestedInput
    comments?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteItemUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    img?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    img?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    img?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
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

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type FavoriteItemListRelationFilter = {
    every?: FavoriteItemWhereInput
    some?: FavoriteItemWhereInput
    none?: FavoriteItemWhereInput
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTypeOfMealFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfMeal | EnumTypeOfMealFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfMealFilter<$PrismaModel> | $Enums.TypeOfMeal
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecipeIngredientListRelationFilter = {
    every?: RecipeIngredientWhereInput
    some?: RecipeIngredientWhereInput
    none?: RecipeIngredientWhereInput
  }

  export type RecipeStepListRelationFilter = {
    every?: RecipeStepWhereInput
    some?: RecipeStepWhereInput
    none?: RecipeStepWhereInput
  }

  export type RecipeIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
    typeOfMeal?: SortOrder
    kitchen?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
    typeOfMeal?: SortOrder
    kitchen?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
    typeOfMeal?: SortOrder
    kitchen?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    cookingTime?: SortOrder
    difficulty?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTypeOfMealWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfMeal | EnumTypeOfMealFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfMealWithAggregatesFilter<$PrismaModel> | $Enums.TypeOfMeal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeOfMealFilter<$PrismaModel>
    _max?: NestedEnumTypeOfMealFilter<$PrismaModel>
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type RecipeNullableScalarRelationFilter = {
    is?: RecipeWhereInput | null
    isNot?: RecipeWhereInput | null
  }

  export type IngredientNullableScalarRelationFilter = {
    is?: IngredientWhereInput | null
    isNot?: IngredientWhereInput | null
  }

  export type ArticleNullableScalarRelationFilter = {
    is?: ArticleWhereInput | null
    isNot?: ArticleWhereInput | null
  }

  export type FavoriteItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    articleId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    articleId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    articleId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrder
    type?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrder
    type?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrder
    type?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    calories?: SortOrder
    proteins?: SortOrder
    fats?: SortOrder
    carbs?: SortOrder
    weight?: SortOrder
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

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type RecipeIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    quantityWithUnit?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
  }

  export type RecipeIngredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RecipeIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    quantityWithUnit?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
  }

  export type RecipeIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    quantityWithUnit?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
  }

  export type RecipeIngredientSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RecipeStepCountOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeStepAvgOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type RecipeStepMaxOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeStepMinOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeStepSumOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    articleId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    articleId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    articleId?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    text?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    text?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    text?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type FavoriteItemCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteItemCreateWithoutUserInput, FavoriteItemUncheckedCreateWithoutUserInput> | FavoriteItemCreateWithoutUserInput[] | FavoriteItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutUserInput | FavoriteItemCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteItemCreateManyUserInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type ArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type FavoriteItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteItemCreateWithoutUserInput, FavoriteItemUncheckedCreateWithoutUserInput> | FavoriteItemCreateWithoutUserInput[] | FavoriteItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutUserInput | FavoriteItemCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteItemCreateManyUserInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecipeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type FavoriteItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutUserInput, FavoriteItemUncheckedCreateWithoutUserInput> | FavoriteItemCreateWithoutUserInput[] | FavoriteItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutUserInput | FavoriteItemCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutUserInput | FavoriteItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteItemCreateManyUserInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutUserInput | FavoriteItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutUserInput | FavoriteItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type ArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput | ArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type FavoriteItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutUserInput, FavoriteItemUncheckedCreateWithoutUserInput> | FavoriteItemCreateWithoutUserInput[] | FavoriteItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutUserInput | FavoriteItemCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutUserInput | FavoriteItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteItemCreateManyUserInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutUserInput | FavoriteItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutUserInput | FavoriteItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput | ArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeIngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeStepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeStepCreateWithoutRecipeInput, RecipeStepUncheckedCreateWithoutRecipeInput> | RecipeStepCreateWithoutRecipeInput[] | RecipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeStepCreateOrConnectWithoutRecipeInput | RecipeStepCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeStepCreateManyRecipeInputEnvelope
    connect?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutRecipeInput = {
    create?: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput> | CommentCreateWithoutRecipeInput[] | CommentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipeInput | CommentCreateOrConnectWithoutRecipeInput[]
    createMany?: CommentCreateManyRecipeInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteItemCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavoriteItemCreateWithoutRecipeInput, FavoriteItemUncheckedCreateWithoutRecipeInput> | FavoriteItemCreateWithoutRecipeInput[] | FavoriteItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutRecipeInput | FavoriteItemCreateOrConnectWithoutRecipeInput[]
    createMany?: FavoriteItemCreateManyRecipeInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeStepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeStepCreateWithoutRecipeInput, RecipeStepUncheckedCreateWithoutRecipeInput> | RecipeStepCreateWithoutRecipeInput[] | RecipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeStepCreateOrConnectWithoutRecipeInput | RecipeStepCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeStepCreateManyRecipeInputEnvelope
    connect?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput> | CommentCreateWithoutRecipeInput[] | CommentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipeInput | CommentCreateOrConnectWithoutRecipeInput[]
    createMany?: CommentCreateManyRecipeInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteItemUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavoriteItemCreateWithoutRecipeInput, FavoriteItemUncheckedCreateWithoutRecipeInput> | FavoriteItemCreateWithoutRecipeInput[] | FavoriteItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutRecipeInput | FavoriteItemCreateOrConnectWithoutRecipeInput[]
    createMany?: FavoriteItemCreateManyRecipeInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTypeOfMealFieldUpdateOperationsInput = {
    set?: $Enums.TypeOfMeal
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type RecipeIngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeStepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeStepCreateWithoutRecipeInput, RecipeStepUncheckedCreateWithoutRecipeInput> | RecipeStepCreateWithoutRecipeInput[] | RecipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeStepCreateOrConnectWithoutRecipeInput | RecipeStepCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeStepUpsertWithWhereUniqueWithoutRecipeInput | RecipeStepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeStepCreateManyRecipeInputEnvelope
    set?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    disconnect?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    delete?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    connect?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    update?: RecipeStepUpdateWithWhereUniqueWithoutRecipeInput | RecipeStepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeStepUpdateManyWithWhereWithoutRecipeInput | RecipeStepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeStepScalarWhereInput | RecipeStepScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput> | CommentCreateWithoutRecipeInput[] | CommentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipeInput | CommentCreateOrConnectWithoutRecipeInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRecipeInput | CommentUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: CommentCreateManyRecipeInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRecipeInput | CommentUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRecipeInput | CommentUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteItemUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutRecipeInput, FavoriteItemUncheckedCreateWithoutRecipeInput> | FavoriteItemCreateWithoutRecipeInput[] | FavoriteItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutRecipeInput | FavoriteItemCreateOrConnectWithoutRecipeInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutRecipeInput | FavoriteItemUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavoriteItemCreateManyRecipeInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutRecipeInput | FavoriteItemUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutRecipeInput | FavoriteItemUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeStepCreateWithoutRecipeInput, RecipeStepUncheckedCreateWithoutRecipeInput> | RecipeStepCreateWithoutRecipeInput[] | RecipeStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeStepCreateOrConnectWithoutRecipeInput | RecipeStepCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeStepUpsertWithWhereUniqueWithoutRecipeInput | RecipeStepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeStepCreateManyRecipeInputEnvelope
    set?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    disconnect?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    delete?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    connect?: RecipeStepWhereUniqueInput | RecipeStepWhereUniqueInput[]
    update?: RecipeStepUpdateWithWhereUniqueWithoutRecipeInput | RecipeStepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeStepUpdateManyWithWhereWithoutRecipeInput | RecipeStepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeStepScalarWhereInput | RecipeStepScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput> | CommentCreateWithoutRecipeInput[] | CommentUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipeInput | CommentCreateOrConnectWithoutRecipeInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRecipeInput | CommentUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: CommentCreateManyRecipeInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRecipeInput | CommentUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRecipeInput | CommentUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteItemUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutRecipeInput, FavoriteItemUncheckedCreateWithoutRecipeInput> | FavoriteItemCreateWithoutRecipeInput[] | FavoriteItemUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutRecipeInput | FavoriteItemCreateOrConnectWithoutRecipeInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutRecipeInput | FavoriteItemUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavoriteItemCreateManyRecipeInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutRecipeInput | FavoriteItemUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutRecipeInput | FavoriteItemUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavoritesInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<IngredientCreateWithoutFavoritesInput, IngredientUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutFavoritesInput
    connect?: IngredientWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ArticleCreateWithoutFavoritesInput, ArticleUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutFavoritesInput
    connect?: ArticleWhereUniqueInput
  }

  export type RecipeUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavoritesInput
    upsert?: RecipeUpsertWithoutFavoritesInput
    disconnect?: RecipeWhereInput | boolean
    delete?: RecipeWhereInput | boolean
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutFavoritesInput, RecipeUpdateWithoutFavoritesInput>, RecipeUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type IngredientUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<IngredientCreateWithoutFavoritesInput, IngredientUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutFavoritesInput
    upsert?: IngredientUpsertWithoutFavoritesInput
    disconnect?: IngredientWhereInput | boolean
    delete?: IngredientWhereInput | boolean
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutFavoritesInput, IngredientUpdateWithoutFavoritesInput>, IngredientUncheckedUpdateWithoutFavoritesInput>
  }

  export type ArticleUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<ArticleCreateWithoutFavoritesInput, ArticleUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutFavoritesInput
    upsert?: ArticleUpsertWithoutFavoritesInput
    disconnect?: ArticleWhereInput | boolean
    delete?: ArticleWhereInput | boolean
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutFavoritesInput, ArticleUpdateWithoutFavoritesInput>, ArticleUncheckedUpdateWithoutFavoritesInput>
  }

  export type RecipeIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type FavoriteItemCreateNestedManyWithoutIngredientInput = {
    create?: XOR<FavoriteItemCreateWithoutIngredientInput, FavoriteItemUncheckedCreateWithoutIngredientInput> | FavoriteItemCreateWithoutIngredientInput[] | FavoriteItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutIngredientInput | FavoriteItemCreateOrConnectWithoutIngredientInput[]
    createMany?: FavoriteItemCreateManyIngredientInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type FavoriteItemUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<FavoriteItemCreateWithoutIngredientInput, FavoriteItemUncheckedCreateWithoutIngredientInput> | FavoriteItemCreateWithoutIngredientInput[] | FavoriteItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutIngredientInput | FavoriteItemCreateOrConnectWithoutIngredientInput[]
    createMany?: FavoriteItemCreateManyIngredientInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type FavoriteItemUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutIngredientInput, FavoriteItemUncheckedCreateWithoutIngredientInput> | FavoriteItemCreateWithoutIngredientInput[] | FavoriteItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutIngredientInput | FavoriteItemCreateOrConnectWithoutIngredientInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutIngredientInput | FavoriteItemUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: FavoriteItemCreateManyIngredientInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutIngredientInput | FavoriteItemUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutIngredientInput | FavoriteItemUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type FavoriteItemUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutIngredientInput, FavoriteItemUncheckedCreateWithoutIngredientInput> | FavoriteItemCreateWithoutIngredientInput[] | FavoriteItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutIngredientInput | FavoriteItemCreateOrConnectWithoutIngredientInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutIngredientInput | FavoriteItemUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: FavoriteItemCreateManyIngredientInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutIngredientInput | FavoriteItemUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutIngredientInput | FavoriteItemUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutRecipeIngredientInput = {
    create?: XOR<IngredientCreateWithoutRecipeIngredientInput, IngredientUncheckedCreateWithoutRecipeIngredientInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientInput
    connect?: IngredientWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeIngredientInput, IngredientUncheckedCreateWithoutRecipeIngredientInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientInput
    upsert?: IngredientUpsertWithoutRecipeIngredientInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutRecipeIngredientInput, IngredientUpdateWithoutRecipeIngredientInput>, IngredientUncheckedUpdateWithoutRecipeIngredientInput>
  }

  export type RecipeCreateNestedOneWithoutStepsInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    upsert?: RecipeUpsertWithoutStepsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutStepsInput, RecipeUpdateWithoutStepsInput>, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutCommentsInput = {
    create?: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutCommentsInput
    connect?: RecipeWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type RecipeUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutCommentsInput
    upsert?: RecipeUpsertWithoutCommentsInput
    disconnect?: RecipeWhereInput | boolean
    delete?: RecipeWhereInput | boolean
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutCommentsInput, RecipeUpdateWithoutCommentsInput>, RecipeUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    upsert?: ArticleUpsertWithoutCommentsInput
    disconnect?: ArticleWhereInput | boolean
    delete?: ArticleWhereInput | boolean
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutCommentsInput, ArticleUpdateWithoutCommentsInput>, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteItemCreateNestedManyWithoutArticleInput = {
    create?: XOR<FavoriteItemCreateWithoutArticleInput, FavoriteItemUncheckedCreateWithoutArticleInput> | FavoriteItemCreateWithoutArticleInput[] | FavoriteItemUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutArticleInput | FavoriteItemCreateOrConnectWithoutArticleInput[]
    createMany?: FavoriteItemCreateManyArticleInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteItemUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<FavoriteItemCreateWithoutArticleInput, FavoriteItemUncheckedCreateWithoutArticleInput> | FavoriteItemCreateWithoutArticleInput[] | FavoriteItemUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutArticleInput | FavoriteItemCreateOrConnectWithoutArticleInput[]
    createMany?: FavoriteItemCreateManyArticleInputEnvelope
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type FavoriteItemUpdateManyWithoutArticleNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutArticleInput, FavoriteItemUncheckedCreateWithoutArticleInput> | FavoriteItemCreateWithoutArticleInput[] | FavoriteItemUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutArticleInput | FavoriteItemCreateOrConnectWithoutArticleInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutArticleInput | FavoriteItemUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: FavoriteItemCreateManyArticleInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutArticleInput | FavoriteItemUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutArticleInput | FavoriteItemUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput | CommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput | CommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticleInput | CommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteItemUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<FavoriteItemCreateWithoutArticleInput, FavoriteItemUncheckedCreateWithoutArticleInput> | FavoriteItemCreateWithoutArticleInput[] | FavoriteItemUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: FavoriteItemCreateOrConnectWithoutArticleInput | FavoriteItemCreateOrConnectWithoutArticleInput[]
    upsert?: FavoriteItemUpsertWithWhereUniqueWithoutArticleInput | FavoriteItemUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: FavoriteItemCreateManyArticleInputEnvelope
    set?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    disconnect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    delete?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    connect?: FavoriteItemWhereUniqueInput | FavoriteItemWhereUniqueInput[]
    update?: FavoriteItemUpdateWithWhereUniqueWithoutArticleInput | FavoriteItemUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: FavoriteItemUpdateManyWithWhereWithoutArticleInput | FavoriteItemUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput | CommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput | CommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticleInput | CommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
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

  export type NestedEnumTypeOfMealFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfMeal | EnumTypeOfMealFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfMealFilter<$PrismaModel> | $Enums.TypeOfMeal
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTypeOfMealWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfMeal | EnumTypeOfMealFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfMeal[] | ListEnumTypeOfMealFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfMealWithAggregatesFilter<$PrismaModel> | $Enums.TypeOfMeal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeOfMealFilter<$PrismaModel>
    _max?: NestedEnumTypeOfMealFilter<$PrismaModel>
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
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

  export type RecipeCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeCreateManyAuthorInputEnvelope = {
    data: RecipeCreateManyAuthorInput | RecipeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteItemCreateWithoutUserInput = {
    id?: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe?: RecipeCreateNestedOneWithoutFavoritesInput
    ingredient?: IngredientCreateNestedOneWithoutFavoritesInput
    article?: ArticleCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteItemUncheckedCreateWithoutUserInput = {
    id?: string
    recipeId?: string | null
    ingredientId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemCreateOrConnectWithoutUserInput = {
    where: FavoriteItemWhereUniqueInput
    create: XOR<FavoriteItemCreateWithoutUserInput, FavoriteItemUncheckedCreateWithoutUserInput>
  }

  export type FavoriteItemCreateManyUserInputEnvelope = {
    data: FavoriteItemCreateManyUserInput | FavoriteItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCreateWithoutAuthorInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteItemCreateNestedManyWithoutArticleInput
    comments?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutArticleInput
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleCreateManyAuthorInputEnvelope = {
    data: ArticleCreateManyAuthorInput | ArticleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    recipe?: RecipeCreateNestedOneWithoutCommentsInput
    article?: ArticleCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    recipeId?: string | null
    articleId?: string | null
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
  }

  export type RecipeUpdateManyWithWhereWithoutAuthorInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    imageUrl?: StringFilter<"Recipe"> | string
    calories?: IntFilter<"Recipe"> | number
    proteins?: FloatFilter<"Recipe"> | number
    fats?: FloatFilter<"Recipe"> | number
    carbs?: FloatFilter<"Recipe"> | number
    cookingTime?: IntFilter<"Recipe"> | number
    difficulty?: IntFilter<"Recipe"> | number
    typeOfMeal?: EnumTypeOfMealFilter<"Recipe"> | $Enums.TypeOfMeal
    kitchen?: StringNullableFilter<"Recipe"> | string | null
    type?: EnumTypeFilter<"Recipe"> | $Enums.Type
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    authorId?: StringFilter<"Recipe"> | string
  }

  export type FavoriteItemUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteItemWhereUniqueInput
    update: XOR<FavoriteItemUpdateWithoutUserInput, FavoriteItemUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteItemCreateWithoutUserInput, FavoriteItemUncheckedCreateWithoutUserInput>
  }

  export type FavoriteItemUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteItemWhereUniqueInput
    data: XOR<FavoriteItemUpdateWithoutUserInput, FavoriteItemUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteItemUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteItemScalarWhereInput
    data: XOR<FavoriteItemUpdateManyMutationInput, FavoriteItemUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteItemScalarWhereInput = {
    AND?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
    OR?: FavoriteItemScalarWhereInput[]
    NOT?: FavoriteItemScalarWhereInput | FavoriteItemScalarWhereInput[]
    id?: StringFilter<"FavoriteItem"> | string
    userId?: StringFilter<"FavoriteItem"> | string
    recipeId?: StringNullableFilter<"FavoriteItem"> | string | null
    ingredientId?: StringNullableFilter<"FavoriteItem"> | string | null
    articleId?: StringNullableFilter<"FavoriteItem"> | string | null
    type?: EnumTypeFilter<"FavoriteItem"> | $Enums.Type
    createdAt?: DateTimeFilter<"FavoriteItem"> | Date | string
    updatedAt?: DateTimeFilter<"FavoriteItem"> | Date | string
  }

  export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    imageUrl?: StringFilter<"Article"> | string
    text?: StringFilter<"Article"> | string
    type?: EnumTypeFilter<"Article"> | $Enums.Type
    authorId?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    type?: EnumTypeFilter<"Comment"> | $Enums.Type
    authorId?: StringFilter<"Comment"> | string
    recipeId?: StringNullableFilter<"Comment"> | string | null
    articleId?: StringNullableFilter<"Comment"> | string | null
  }

  export type UserCreateWithoutRecipesInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteItemCreateNestedManyWithoutUserInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutUserInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeIngredientCreateWithoutRecipeInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    ingredient: IngredientCreateNestedOneWithoutRecipeIngredientInput
  }

  export type RecipeIngredientUncheckedCreateWithoutRecipeInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    ingredientId: string
  }

  export type RecipeIngredientCreateOrConnectWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientCreateManyRecipeInputEnvelope = {
    data: RecipeIngredientCreateManyRecipeInput | RecipeIngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeStepCreateWithoutRecipeInput = {
    id?: string
    stepNumber: number
    description: string
    imageUrl?: string | null
  }

  export type RecipeStepUncheckedCreateWithoutRecipeInput = {
    id?: string
    stepNumber: number
    description: string
    imageUrl?: string | null
  }

  export type RecipeStepCreateOrConnectWithoutRecipeInput = {
    where: RecipeStepWhereUniqueInput
    create: XOR<RecipeStepCreateWithoutRecipeInput, RecipeStepUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeStepCreateManyRecipeInputEnvelope = {
    data: RecipeStepCreateManyRecipeInput | RecipeStepCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutRecipeInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    author: UserCreateNestedOneWithoutCommentsInput
    article?: ArticleCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRecipeInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    authorId: string
    articleId?: string | null
  }

  export type CommentCreateOrConnectWithoutRecipeInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput>
  }

  export type CommentCreateManyRecipeInputEnvelope = {
    data: CommentCreateManyRecipeInput | CommentCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteItemCreateWithoutRecipeInput = {
    id?: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    ingredient?: IngredientCreateNestedOneWithoutFavoritesInput
    article?: ArticleCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteItemUncheckedCreateWithoutRecipeInput = {
    id?: string
    userId: string
    ingredientId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemCreateOrConnectWithoutRecipeInput = {
    where: FavoriteItemWhereUniqueInput
    create: XOR<FavoriteItemCreateWithoutRecipeInput, FavoriteItemUncheckedCreateWithoutRecipeInput>
  }

  export type FavoriteItemCreateManyRecipeInputEnvelope = {
    data: FavoriteItemCreateManyRecipeInput | FavoriteItemCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteItemUpdateManyWithoutUserNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteItemUncheckedUpdateManyWithoutUserNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeIngredientScalarWhereInput = {
    AND?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    OR?: RecipeIngredientScalarWhereInput[]
    NOT?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    quantityWithUnit?: StringFilter<"RecipeIngredient"> | string
    quantity?: IntFilter<"RecipeIngredient"> | number
    recipeId?: StringFilter<"RecipeIngredient"> | string
    ingredientId?: StringFilter<"RecipeIngredient"> | string
  }

  export type RecipeStepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeStepWhereUniqueInput
    update: XOR<RecipeStepUpdateWithoutRecipeInput, RecipeStepUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeStepCreateWithoutRecipeInput, RecipeStepUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeStepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeStepWhereUniqueInput
    data: XOR<RecipeStepUpdateWithoutRecipeInput, RecipeStepUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeStepUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeStepScalarWhereInput
    data: XOR<RecipeStepUpdateManyMutationInput, RecipeStepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeStepScalarWhereInput = {
    AND?: RecipeStepScalarWhereInput | RecipeStepScalarWhereInput[]
    OR?: RecipeStepScalarWhereInput[]
    NOT?: RecipeStepScalarWhereInput | RecipeStepScalarWhereInput[]
    id?: StringFilter<"RecipeStep"> | string
    stepNumber?: IntFilter<"RecipeStep"> | number
    description?: StringFilter<"RecipeStep"> | string
    imageUrl?: StringNullableFilter<"RecipeStep"> | string | null
    recipeId?: StringFilter<"RecipeStep"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutRecipeInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutRecipeInput, CommentUncheckedUpdateWithoutRecipeInput>
    create: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutRecipeInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutRecipeInput, CommentUncheckedUpdateWithoutRecipeInput>
  }

  export type CommentUpdateManyWithWhereWithoutRecipeInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutRecipeInput>
  }

  export type FavoriteItemUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FavoriteItemWhereUniqueInput
    update: XOR<FavoriteItemUpdateWithoutRecipeInput, FavoriteItemUncheckedUpdateWithoutRecipeInput>
    create: XOR<FavoriteItemCreateWithoutRecipeInput, FavoriteItemUncheckedCreateWithoutRecipeInput>
  }

  export type FavoriteItemUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FavoriteItemWhereUniqueInput
    data: XOR<FavoriteItemUpdateWithoutRecipeInput, FavoriteItemUncheckedUpdateWithoutRecipeInput>
  }

  export type FavoriteItemUpdateManyWithWhereWithoutRecipeInput = {
    where: FavoriteItemScalarWhereInput
    data: XOR<FavoriteItemUpdateManyMutationInput, FavoriteItemUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutFavoritesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type IngredientCreateWithoutFavoritesInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
    recipeIngredient?: RecipeIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutFavoritesInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
    recipeIngredient?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutFavoritesInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutFavoritesInput, IngredientUncheckedCreateWithoutFavoritesInput>
  }

  export type ArticleCreateWithoutFavoritesInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutFavoritesInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutFavoritesInput, ArticleUncheckedCreateWithoutFavoritesInput>
  }

  export type RecipeUpsertWithoutFavoritesInput = {
    update: XOR<RecipeUpdateWithoutFavoritesInput, RecipeUncheckedUpdateWithoutFavoritesInput>
    create: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutFavoritesInput, RecipeUncheckedUpdateWithoutFavoritesInput>
  }

  export type RecipeUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUpdateManyWithoutRecipeNestedInput
    comments?: CommentUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type IngredientUpsertWithoutFavoritesInput = {
    update: XOR<IngredientUpdateWithoutFavoritesInput, IngredientUncheckedUpdateWithoutFavoritesInput>
    create: XOR<IngredientCreateWithoutFavoritesInput, IngredientUncheckedCreateWithoutFavoritesInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutFavoritesInput, IngredientUncheckedUpdateWithoutFavoritesInput>
  }

  export type IngredientUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipeIngredient?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipeIngredient?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type ArticleUpsertWithoutFavoritesInput = {
    update: XOR<ArticleUpdateWithoutFavoritesInput, ArticleUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ArticleCreateWithoutFavoritesInput, ArticleUncheckedCreateWithoutFavoritesInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutFavoritesInput, ArticleUncheckedUpdateWithoutFavoritesInput>
  }

  export type ArticleUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutArticlesNestedInput
    comments?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type RecipeIngredientCreateWithoutIngredientInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutIngredientInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    recipeId: string
  }

  export type RecipeIngredientCreateOrConnectWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientCreateManyIngredientInputEnvelope = {
    data: RecipeIngredientCreateManyIngredientInput | RecipeIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteItemCreateWithoutIngredientInput = {
    id?: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe?: RecipeCreateNestedOneWithoutFavoritesInput
    user: UserCreateNestedOneWithoutFavoritesInput
    article?: ArticleCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteItemUncheckedCreateWithoutIngredientInput = {
    id?: string
    userId: string
    recipeId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemCreateOrConnectWithoutIngredientInput = {
    where: FavoriteItemWhereUniqueInput
    create: XOR<FavoriteItemCreateWithoutIngredientInput, FavoriteItemUncheckedCreateWithoutIngredientInput>
  }

  export type FavoriteItemCreateManyIngredientInputEnvelope = {
    data: FavoriteItemCreateManyIngredientInput | FavoriteItemCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type FavoriteItemUpsertWithWhereUniqueWithoutIngredientInput = {
    where: FavoriteItemWhereUniqueInput
    update: XOR<FavoriteItemUpdateWithoutIngredientInput, FavoriteItemUncheckedUpdateWithoutIngredientInput>
    create: XOR<FavoriteItemCreateWithoutIngredientInput, FavoriteItemUncheckedCreateWithoutIngredientInput>
  }

  export type FavoriteItemUpdateWithWhereUniqueWithoutIngredientInput = {
    where: FavoriteItemWhereUniqueInput
    data: XOR<FavoriteItemUpdateWithoutIngredientInput, FavoriteItemUncheckedUpdateWithoutIngredientInput>
  }

  export type FavoriteItemUpdateManyWithWhereWithoutIngredientInput = {
    where: FavoriteItemScalarWhereInput
    data: XOR<FavoriteItemUpdateManyMutationInput, FavoriteItemUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    steps?: RecipeStepCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    steps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutRecipeIngredientInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
    favorites?: FavoriteItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutRecipeIngredientInput = {
    id?: string
    imageUrl: string
    name: string
    description: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    weight?: number | null
    type?: $Enums.Type
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutRecipeIngredientInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeIngredientInput, IngredientUncheckedCreateWithoutRecipeIngredientInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    steps?: RecipeStepUpdateManyWithoutRecipeNestedInput
    comments?: CommentUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    steps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUpsertWithoutRecipeIngredientInput = {
    update: XOR<IngredientUpdateWithoutRecipeIngredientInput, IngredientUncheckedUpdateWithoutRecipeIngredientInput>
    create: XOR<IngredientCreateWithoutRecipeIngredientInput, IngredientUncheckedCreateWithoutRecipeIngredientInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutRecipeIngredientInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutRecipeIngredientInput, IngredientUncheckedUpdateWithoutRecipeIngredientInput>
  }

  export type IngredientUpdateWithoutRecipeIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    favorites?: FavoriteItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutRecipeIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    favorites?: FavoriteItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type RecipeCreateWithoutStepsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutStepsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutStepsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
  }

  export type RecipeUpsertWithoutStepsInput = {
    update: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    comments?: CommentUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    favorites?: FavoriteItemCreateNestedManyWithoutUserInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutUserInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type RecipeCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutCommentsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
  }

  export type ArticleCreateWithoutCommentsInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutArticlesInput
    favorites?: FavoriteItemCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCommentsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    favorites?: FavoriteItemUpdateManyWithoutUserNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutUserNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type RecipeUpsertWithoutCommentsInput = {
    update: XOR<RecipeUpdateWithoutCommentsInput, RecipeUncheckedUpdateWithoutCommentsInput>
    create: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutCommentsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutCommentsInput, RecipeUncheckedUpdateWithoutCommentsInput>
  }

  export type RecipeUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type ArticleUpsertWithoutCommentsInput = {
    update: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutArticlesNestedInput
    favorites?: FavoriteItemUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteItemUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    favorites?: FavoriteItemCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    supabaseAuthId: string
    username: string
    email: string
    password: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    favorites?: FavoriteItemUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type FavoriteItemCreateWithoutArticleInput = {
    id?: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe?: RecipeCreateNestedOneWithoutFavoritesInput
    user: UserCreateNestedOneWithoutFavoritesInput
    ingredient?: IngredientCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteItemUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    recipeId?: string | null
    ingredientId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemCreateOrConnectWithoutArticleInput = {
    where: FavoriteItemWhereUniqueInput
    create: XOR<FavoriteItemCreateWithoutArticleInput, FavoriteItemUncheckedCreateWithoutArticleInput>
  }

  export type FavoriteItemCreateManyArticleInputEnvelope = {
    data: FavoriteItemCreateManyArticleInput | FavoriteItemCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutArticleInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    author: UserCreateNestedOneWithoutCommentsInput
    recipe?: RecipeCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutArticleInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    authorId: string
    recipeId?: string | null
  }

  export type CommentCreateOrConnectWithoutArticleInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentCreateManyArticleInputEnvelope = {
    data: CommentCreateManyArticleInput | CommentCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    favorites?: FavoriteItemUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type FavoriteItemUpsertWithWhereUniqueWithoutArticleInput = {
    where: FavoriteItemWhereUniqueInput
    update: XOR<FavoriteItemUpdateWithoutArticleInput, FavoriteItemUncheckedUpdateWithoutArticleInput>
    create: XOR<FavoriteItemCreateWithoutArticleInput, FavoriteItemUncheckedCreateWithoutArticleInput>
  }

  export type FavoriteItemUpdateWithWhereUniqueWithoutArticleInput = {
    where: FavoriteItemWhereUniqueInput
    data: XOR<FavoriteItemUpdateWithoutArticleInput, FavoriteItemUncheckedUpdateWithoutArticleInput>
  }

  export type FavoriteItemUpdateManyWithWhereWithoutArticleInput = {
    where: FavoriteItemScalarWhereInput
    data: XOR<FavoriteItemUpdateManyMutationInput, FavoriteItemUncheckedUpdateManyWithoutArticleInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUpdateManyWithWhereWithoutArticleInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutArticleInput>
  }

  export type RecipeCreateManyAuthorInput = {
    id?: string
    title: string
    description: string
    imageUrl: string
    calories: number
    proteins: number
    fats: number
    carbs: number
    cookingTime: number
    difficulty: number
    typeOfMeal: $Enums.TypeOfMeal
    kitchen?: string | null
    type?: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteItemCreateManyUserInput = {
    id?: string
    recipeId?: string | null
    ingredientId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateManyAuthorInput = {
    id?: string
    title: string
    imageUrl: string
    text: string
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    recipeId?: string | null
    articleId?: string | null
  }

  export type RecipeUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUpdateManyWithoutRecipeNestedInput
    comments?: CommentUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteItemUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: FloatFieldUpdateOperationsInput | number
    fats?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    cookingTime?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    typeOfMeal?: EnumTypeOfMealFieldUpdateOperationsInput | $Enums.TypeOfMeal
    kitchen?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneWithoutFavoritesNestedInput
    ingredient?: IngredientUpdateOneWithoutFavoritesNestedInput
    article?: ArticleUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteItemUpdateManyWithoutArticleNestedInput
    comments?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteItemUncheckedUpdateManyWithoutArticleNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipe?: RecipeUpdateOneWithoutCommentsNestedInput
    article?: ArticleUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientCreateManyRecipeInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    ingredientId: string
  }

  export type RecipeStepCreateManyRecipeInput = {
    id?: string
    stepNumber: number
    description: string
    imageUrl?: string | null
  }

  export type CommentCreateManyRecipeInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    authorId: string
    articleId?: string | null
  }

  export type FavoriteItemCreateManyRecipeInput = {
    id?: string
    userId: string
    ingredientId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeStepUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeStepUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeStepUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    article?: ArticleUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteItemUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    ingredient?: IngredientUpdateOneWithoutFavoritesNestedInput
    article?: ArticleUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteItemUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyIngredientInput = {
    id?: string
    quantityWithUnit: string
    quantity: number
    recipeId: string
  }

  export type FavoriteItemCreateManyIngredientInput = {
    id?: string
    userId: string
    recipeId?: string | null
    articleId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityWithUnit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteItemUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneWithoutFavoritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    article?: ArticleUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteItemUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemCreateManyArticleInput = {
    id?: string
    userId: string
    recipeId?: string | null
    ingredientId?: string | null
    type: $Enums.Type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyArticleInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.Type
    authorId: string
    recipeId?: string | null
  }

  export type FavoriteItemUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneWithoutFavoritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    ingredient?: IngredientUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteItemUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteItemUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
    ingredientId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    recipe?: RecipeUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    authorId?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableStringFieldUpdateOperationsInput | string | null
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