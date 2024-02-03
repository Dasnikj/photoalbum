// src/resolvers/albumResolvers.ts
import Album from '../models/Album';
import Asset from '../models/Asset';

export const albumResolvers = {
  Query: {
    albums: async () => {
      return await Album.find().populate('assets');
    },
    album: async (_: any, args: { id: string }) => {
      return await Album.findById(args.id).populate('assets');
    }
  },
  Mutation: {
    addAlbum: async (_: any, args: { title: string; description?: string; assets: string[] }) => {
      const newAlbum = new Album(args);
      return await newAlbum.save();
    },
    updateAlbum: async (_: any, args: { id: string; title?: string; description?: string; assets?: string[] }) => {
      return await Album.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteAlbum: async (_: any, args: { id: string }) => {
      return await Album.findByIdAndRemove(args.id);
    }
  }
};
