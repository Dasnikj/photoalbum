import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';
import path, { join } from 'path';
import connectDB from './utils/db'; // MongoDB connection utility
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'; // Import mergeTypeDefs
import { loadFilesSync } from '@graphql-tools/load-files'; // Import loadFilesSync

dotenv.config();

async function startApolloServer() {
  // Initialize Express
  const app = express();

  // Connect to MongoDB
  await connectDB();

  // Load and merge GraphQL type definitions and resolvers from the modules
  const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, 'modules/**/schema.graphql')));
  const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, 'modules/**/resolvers.ts')));

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }) // Context setup if needed
  });

  await server.start();

  // Apply Apollo Middleware to Express
  server.applyMiddleware({ app: app as express.Application });

  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer().catch((error) => {
  console.error('Failed to start the server', error);
});
