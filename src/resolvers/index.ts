// src/resolvers/index.ts
import { albumResolvers } from './albumResolvers';
import { assetResolvers } from './assetResolvers';

export const resolvers = {
  Query: {
    ...albumResolvers.Query,
    ...assetResolvers.Query,
  },
  Mutation: {
    ...albumResolvers.Mutation,
    ...assetResolvers.Mutation,
  },
};

