// src/resolvers/albumResolvers.ts
import { Resolvers } from '../generated/graphql';
import Album from '../models/Album';

export const albumResolvers: Resolvers = {
  Query: {
    albums: async () => await Album.find({}),
    album: async (_, { id }) => await Album.findById(id),
  },
  Mutation: {
    addAlbum: async (_, { input }) => {
      // Directly destructure properties from 'input', adhering to the generated type
      const newAlbum = new Album(input);
      await newAlbum.save();
      if (!newAlbum) {
        throw new Error('Album not created'); // Consider using a custom error message
      }
      // Assuming '_id' to 'id' conversion for GraphQL
      return { ...newAlbum.toObject(), id: newAlbum._id.toString() }; // Convert to plain object and ensure `id` field
    },
    updateAlbum: async (_, { id, input }) =>{
      const updatedAlbum = await Album.findByIdAndUpdate(id, {id,...input}, { new: true }).lean();
      if (!updatedAlbum) {
        throw new Error('Album not found'); // Consider using a custom error message
      }
      return updatedAlbum ? { ...updatedAlbum, id: updatedAlbum._id.toString() } : null;
    },
    deleteAlbum: async (_, { id }) => {
      await Album.findByIdAndDelete(id);
      return true; // Consider checking if the deletion was successful
    },
  },
};
