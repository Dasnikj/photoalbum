// src/resolvers/assetResolvers.ts
import Asset from '../models/Asset';
import Metadata from '../models/Metadata';

export const assetResolvers = {
  Mutation: {
    addAsset: async (_: any, args: { url: string; type: string; metadata: string }) => {
      const newAsset = new Asset(args);
      return await newAsset.save();
    },
    updateAsset: async (_: any, args: { id: string; url?: string; type?: string; metadata?: string }) => {
      return await Asset.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteAsset: async (_: any, args: { id: string }) => {
      return await Asset.findByIdAndRemove(args.id);
    }
  },
  Asset: {
    metadata: async (asset: any) => {
      return await Metadata.findById(asset.metadata);
    }
  }
};
