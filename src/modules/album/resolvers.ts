import Album, {IAlbum} from "./models/Album";
import Asset from "../asset/models/Asset";
import { AlbumModule } from './generated-types/module-types';
import { AssetModule } from '../asset/generated-types/module-types';


export const albumResolvers: AlbumModule.Resolvers = {
    Query: {
        albums: async () => await Album.find({}),
        album: async (_: any, { id }: any) => {
            const album = await Album.findById(id).lean();
            if (!album) {
                throw new Error('Album not found');
            }
            return {
                ...album,
                id: album._id.toString(),
                assets: album.assets.map((asset: any) => asset.toString()), // Convert assets to string array
                tags: album.tags.map((tag: any) => tag.toString()), // Convert tags to string array
            };
        }
    },
    Mutation: { 
        addAlbum: async (_: any, { input }: any) => {
            const newAlbum = new Album(input);
            await newAlbum.save();
            if (!newAlbum) {
                throw new Error('Album not created');
            }
            return {
                ...newAlbum.toObject(),
                id: newAlbum._id.toString(),
                assets: newAlbum.assets.map((asset: any) => asset.toString()), // Convert assets to string array
            };
        },
        updateAlbum: async (_, { id, input })=> {
            const updatedAlbum = await Album.findByIdAndUpdate(id, {id, ...input}, { new: true }).lean();
            if (!updatedAlbum) {
                throw new Error('Album not found');
            }
            return updatedAlbum ? {
                ...updatedAlbum,
                id: updatedAlbum._id.toString(),
                assets: updatedAlbum.assets.map((asset: any) => ({
                    ...asset,
                    id: asset._id.toString(),
                    tags: asset.tags.map((tag: any) => tag.toString()), // Convert tags to string array
                })), // Convert assets to string array
                tags: updatedAlbum.tags.map((tag: any) => tag.toString()), // Convert tags to string array
            }: null;
        },
        deleteAlbum: async (_: any, { id }: any) => {
            const result = await Album.findByIdAndDelete(id);
            if (!result) {
                throw new Error('Album not found');
            }
            return true;
        },
    },
    Album: {
        async assets(parent: IAlbum) {
            const assets = await Asset.find({ _id: { $in: parent.assets } });
            return assets.map((asset: any) => ({
                ...asset.toObject(),
                id: asset._id.toString(),
                tags: asset.tags.map((tag: any) => tag.toString()), // Convert tags to string array
            }));
        }
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
    