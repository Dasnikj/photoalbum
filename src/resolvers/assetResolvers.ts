// Remove the import statement for 'MediaType'
import { Resolvers } from '../generated/graphql'; // Adjust the import path based on your project structure
import Asset, { IAsset } from '../models/Asset'; // Ensure the import matches your model path and interface
import { MediaType } from '../generated/graphql'; // Ensure this import if you're using the generated enum

export const assetResolvers: Resolvers = {
  Query: {
    assets: async () => await Asset.find({}),
    asset: async (_, { id }) => {
      const asset = await Asset.findById(id).lean();
      if (!asset) {
        throw new Error('Asset not found');
      }
      return {
        ...asset,
        id: asset._id.toString(),
        type: asset.type as unknown as MediaType,
      };
    },
  },
  Mutation: {
    addAsset: async (_, { input }) => {
      const newAsset = new Asset(input);
      await newAsset.save();
      if (!newAsset) {
        throw new Error('Asset not created');
      }

      return {
        ...newAsset.toObject(),
        id: newAsset._id.toString(), // Ensure 'id' matches the GraphQL schema
      };
    },
    updateAsset: async (_, { id, input }) => {
      const updatedAsset = await Asset.findByIdAndUpdate(id, {id, ...input}, { new: true }).lean();
      if (!updatedAsset) {
        throw new Error('Asset not found');
      }
      return updatedAsset ? { ...updatedAsset, id: updatedAsset._id.toString() } : null;
    },
    deleteAsset: async (_, { id }) => {
      const result = await Asset.findByIdAndDelete(id);
      if (!result) {
        throw new Error('Asset not found');
      }
      return true;
    },
  },
};

export default assetResolvers;
