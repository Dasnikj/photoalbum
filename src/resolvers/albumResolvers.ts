// src/resolvers/albumResolvers.ts
import { Resolvers } from '../generated/graphql';
import Album from '../models/Album';

export const albumResolvers: Resolvers = {
  Query: {
    albums: async () => await Album.find({}),
    album: async (_, { id }) => await Album.findById(id),
  },
  Mutation: {
    addAlbum: async (_, { title, description, assets }) => {
      const newAlbum = new Album({ title, description, assets });
      await newAlbum.save();
      return { ...newAlbum.toObject(), id: newAlbum._id.toString() }; // Convert to plain object and ensure `id` field
    },
    updateAlbum: async (_, { id, title, description, assets }) => {
      return await Album.findByIdAndUpdate(id, { title, description, assets }, { new: true });
    },
    deleteAlbum: async (_, { id }) => {
      await Album.findByIdAndDelete(id);
      return true;
    },
  },
};
