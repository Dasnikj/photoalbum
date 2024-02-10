/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Album */
export type Album = {
  __typename?: 'Album';
  assets: Array<Asset>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  modifiedAt?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AlbumInput = {
  __typename?: 'AlbumInput';
  assets?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AlbumUpdateInput = {
  __typename?: 'AlbumUpdateInput';
  assets?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Asset = {
  __typename?: 'Asset';
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Array<Maybe<Metadata>>>;
  size?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: MediaType;
  updatedAt?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type AssetInput = {
  filename: Scalars['String']['input'];
  metadata?: InputMaybe<Array<InputMaybe<MetadataInput>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type: MediaType;
  url: Scalars['String']['input'];
};

export type AssetUpdateInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<MetadataInput>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** assets */
export type MediaType =
  | 'AUDIO'
  | 'DOCUMENT'
  | 'IMAGE'
  | 'VIDEO';

export type Metadata = {
  __typename?: 'Metadata';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type MetadataInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlbum?: Maybe<Album>;
  addAsset?: Maybe<Asset>;
  deleteAlbum?: Maybe<Scalars['Boolean']['output']>;
  deleteAsset?: Maybe<Scalars['Boolean']['output']>;
  updateAlbum?: Maybe<Album>;
  updateAsset?: Maybe<Asset>;
};


export type MutationAddAlbumArgs = {
  input?: InputMaybe<AlbumInput>;
};


export type MutationAddAssetArgs = {
  input?: InputMaybe<AssetInput>;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAssetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AlbumUpdateInput>;
};


export type MutationUpdateAssetArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AssetUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAssetArgs = {
  id: Scalars['ID']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>;
  AlbumInput: ResolverTypeWrapper<AlbumInput>;
  AlbumUpdateInput: ResolverTypeWrapper<AlbumUpdateInput>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetInput: AssetInput;
  AssetUpdateInput: AssetUpdateInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MediaType: MediaType;
  Metadata: ResolverTypeWrapper<Metadata>;
  MetadataInput: MetadataInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  AlbumInput: AlbumInput;
  AlbumUpdateInput: AlbumUpdateInput;
  Asset: Asset;
  AssetInput: AssetInput;
  AssetUpdateInput: AssetUpdateInput;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Metadata: Metadata;
  MetadataInput: MetadataInput;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  modifiedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumInput'] = ResolversParentTypes['AlbumInput']> = {
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumUpdateInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumUpdateInput'] = ResolversParentTypes['AlbumUpdateInput']> = {
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['Metadata']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MediaType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, Partial<MutationAddAlbumArgs>>;
  addAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<MutationAddAssetArgs>>;
  deleteAlbum?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>;
  deleteAsset?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'id'>>;
  updateAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<MutationUpdateAlbumArgs, 'id'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  AlbumInput?: AlbumInputResolvers<ContextType>;
  AlbumUpdateInput?: AlbumUpdateInputResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

