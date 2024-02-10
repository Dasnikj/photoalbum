/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace AssetModule {
  interface DefinedFields {
    Metadata: 'key' | 'value';
    Asset: 'id' | 'url' | 'type' | 'metadata' | 'filename' | 'size' | 'createdAt' | 'updatedAt' | 'tags';
    Query: 'assets' | 'asset';
    Mutation: 'addAsset' | 'updateAsset' | 'deleteAsset';
    Album: 'assets';
    AlbumInput: 'assets';
    AlbumUpdateInput: 'assets';
  };
  
  interface DefinedEnumValues {
    MediaType: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT';
  };
  
  interface DefinedInputFields {
    MetadataInput: 'key' | 'value';
    AssetInput: 'url' | 'type' | 'metadata' | 'filename' | 'size' | 'tags';
    AssetUpdateInput: 'url' | 'type' | 'metadata' | 'filename' | 'size' | 'tags';
  };
  
  export type MediaType = DefinedEnumValues['MediaType'];
  export type Metadata = Pick<Types.Metadata, DefinedFields['Metadata']>;
  export type Asset = Pick<Types.Asset, DefinedFields['Asset']>;
  export type Album = Types.Album;
  export type AlbumInput = Types.AlbumInput;
  export type AlbumUpdateInput = Types.AlbumUpdateInput;
  export type MetadataInput = Pick<Types.MetadataInput, DefinedInputFields['MetadataInput']>;
  export type AssetInput = Pick<Types.AssetInput, DefinedInputFields['AssetInput']>;
  export type AssetUpdateInput = Pick<Types.AssetUpdateInput, DefinedInputFields['AssetUpdateInput']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type MetadataResolvers = Pick<Types.MetadataResolvers, DefinedFields['Metadata'] | '__isTypeOf'>;
  export type AssetResolvers = Pick<Types.AssetResolvers, DefinedFields['Asset'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type AlbumResolvers = Pick<Types.AlbumResolvers, DefinedFields['Album']>;
  export type AlbumInputResolvers = Pick<Types.AlbumInputResolvers, DefinedFields['AlbumInput']>;
  export type AlbumUpdateInputResolvers = Pick<Types.AlbumUpdateInputResolvers, DefinedFields['AlbumUpdateInput']>;
  
  export interface Resolvers {
    Metadata?: MetadataResolvers;
    Asset?: AssetResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Album?: AlbumResolvers;
    AlbumInput?: AlbumInputResolvers;
    AlbumUpdateInput?: AlbumUpdateInputResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Metadata?: {
      '*'?: gm.Middleware[];
      key?: gm.Middleware[];
      value?: gm.Middleware[];
    };
    Asset?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      url?: gm.Middleware[];
      type?: gm.Middleware[];
      metadata?: gm.Middleware[];
      filename?: gm.Middleware[];
      size?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      updatedAt?: gm.Middleware[];
      tags?: gm.Middleware[];
    };
    Album?: {
      '*'?: gm.Middleware[];
      assets?: gm.Middleware[];
    };
    AlbumInput?: {
      '*'?: gm.Middleware[];
      assets?: gm.Middleware[];
    };
    AlbumUpdateInput?: {
      '*'?: gm.Middleware[];
      assets?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      assets?: gm.Middleware[];
      asset?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      addAsset?: gm.Middleware[];
      updateAsset?: gm.Middleware[];
      deleteAsset?: gm.Middleware[];
    };
  };
}