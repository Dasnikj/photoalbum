import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';
import { join } from 'path';
import mongoose from 'mongoose';
import resolvers from './resolvers'; // Adjust the path as per your resolvers setup
import connectDB from './utils/db'; // MongoDB connection utility

dotenv.config();

async function startApolloServer() {
  // Initialize Express
  const app = express();

  // Read GraphQL schema file
  const typeDefs = readFileSync(join(__dirname, 'schemas', 'schema.graphql'), 'utf-8');

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }) // Context setup if needed
  });

  await server.start();
  
  // Connect to MongoDB
  await connectDB();

  // Apply Apollo Middleware to Express
  server.applyMiddleware({ app });

  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer().catch((error) => {
  console.error('Failed to start the server', error);
});
