// Remove the import statement for 'MediaType'
import { Resolvers } from '../generated/graphql'; // Adjust the import path based on your project structure
import Asset, { IAsset } from '../models/Asset'; // Ensure the import matches your model path and interface
import { MediaType } from '../generated/graphql'; // Ensure this import if you're using the generated enum

export const assetResolvers: Resolvers = {
  Query: {
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
    addAsset: async (_, { url, type, metadata }) => {
      const newAsset = new Asset({ url, type, metadata });
      await newAsset.save();
      return {
        ...newAsset.toObject(),
        id: newAsset._id.toString(), // Ensure 'id' matches the GraphQL schema
      };
    },
    updateAsset: async (_, { id, url, type, metadata }) => {
      const updatedAsset = await Asset.findByIdAndUpdate(
        id,
        { url, type, metadata },
        { new: true, runValidators: true }
      ).lean();
      if (!updatedAsset) {
        throw new Error('Asset not found');
      }
      return {
        ...updatedAsset,
        id: updatedAsset._id.toString(),
      };
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
