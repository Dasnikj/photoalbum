// src/resolvers/index.ts
import { albumResolvers } from './albumResolvers';
import { assetResolvers } from './assetResolvers';

export const resolvers = {
  Query: {
    ...albumResolvers.Query,
  },
  Mutation: {
    ...albumResolvers.Mutation,
    ...assetResolvers.Mutation
  },
  Album: {
    ...albumResolvers.Album
  },
  Asset: {
    ...assetResolvers.Asset
  }
};

export default resolvers;
