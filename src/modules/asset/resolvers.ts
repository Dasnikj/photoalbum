import Asset from "./models/Asset";
import {AssetModule} from  './generated-types/module-types';



export const assetResolvers: AssetModule.Resolvers = {
    Query: {
        assets: async () => await Asset.find({}),
        asset: async (_: any, { id }: any) => {
            const asset = await Asset.findById(id).lean();
            if (!asset) {
                throw new Error('Asset not found');
            }
            return {
                ...asset,
                id: asset._id.toString(),
                tags: asset.tags.map((tag: any) => tag.toString()), // Convert tags to string array
            };
        }
    },
    Mutation: {
        addAsset: async (_: any, { input }: any) => {
            const newAsset = new Asset(input);
            await newAsset.save();
            if (!newAsset) {
                throw new Error('Asset not created');
            }
            return {
                ...newAsset.toObject(),
                id: newAsset._id.toString(),
                tags: newAsset.tags.map((tag: any) => tag.toString()), // Convert tags to string array
            };
        },
        updateAsset: async (_, { id, input }) => {
            const updatedAsset = await Asset.findByIdAndUpdate(id, {id, ...input}, { new: true }).lean();
            if (!updatedAsset) {
                throw new Error('Asset not found');
            }
            return updatedAsset ? {
                ...updatedAsset,
                id: updatedAsset._id.toString(),
                tags: updatedAsset.tags.map((tag: any) => tag.toString()), // Convert tags to string array
            }: null;
        },
        deleteAsset: async (_: any, { id }: any) => {
            const result = await Asset.findByIdAndDelete(id);
            if (!result) {
                throw new Error('Asset not found');
            }
            return true;
        },
    },
    Asset: {
        async metadata(parent: any) {
            return parent.metadata.map((meta: any) => meta);
        }
    },
    Metadata: {
        __isTypeOf: (obj: any) => obj.key && obj.value
    },
  };
  
