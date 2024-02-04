# PHOTO ALBUM

```md
photoalbum-project/
├── src/
│   ├── modules/
│   │   ├── album/
│   │   │   ├── models/
│   │   │   │   └── Album.ts          # Mongoose model for Album
│   │   │   ├── schema.graphql        # GraphQL schema definitions for Album
│   │   │   ├── resolvers.ts          # Resolvers specific to Album
│   │   │   └── index.ts              # Exports Album module's typeDefs and resolvers
│   │   │
│   │   ├── asset/
│   │   │   ├── models/
│   │   │   │   ├── Asset.ts          # Mongoose model for Asset
│   │   │   │   └── Metadata.ts       # Mongoose model for Metadata
│   │   │   ├── schema.graphql        # GraphQL schema definitions for Asset
│   │   │   ├── resolvers.ts          # Resolvers specific to Asset
│   │   │   └── index.ts              # Exports Asset module's typeDefs and resolvers
│   │   │
│   │   ├── [OtherModules]/           # Future modules follow the same structure
│   │   │   └── ...
│   │
│   ├── utils/
│   │   └── db.ts                     # Utility for MongoDB connection
│   │
│   └── index.ts                      # Main entry point for the Apollo Server
│
├── node_modules/                     # Project dependencies
│
├── .env                              # Environment variables
├── .gitignore                        # Specifies intentionally untracked files to ignore
├── package.json                      # Project metadata and dependencies
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation

```