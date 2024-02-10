/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace AlbumModule {
  interface DefinedFields {
    Album: 'id' | 'name' | 'description' | 'tags' | 'createdAt' | 'modifiedAt' | 'modifiedBy';
    Query: 'albums' | 'album';
    Mutation: 'addAlbum' | 'updateAlbum' | 'deleteAlbum';
  };
  
  interface DefinedInputFields {
    AlbumInput: 'name' | 'description' | 'tags';
    AlbumUpdateInput: 'name' | 'description' | 'tags';
  };
  
  export type Album = Pick<Types.Album, DefinedFields['Album']>;
  export type AlbumInput = Pick<Types.AlbumInput, DefinedInputFields['AlbumInput']>;
  export type AlbumUpdateInput = Pick<Types.AlbumUpdateInput, DefinedInputFields['AlbumUpdateInput']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type AlbumResolvers = Pick<Types.AlbumResolvers, DefinedFields['Album'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Album?: AlbumResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Album?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
      tags?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      modifiedAt?: gm.Middleware[];
      modifiedBy?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      albums?: gm.Middleware[];
      album?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      addAlbum?: gm.Middleware[];
      updateAlbum?: gm.Middleware[];
      deleteAlbum?: gm.Middleware[];
    };
  };
}