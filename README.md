# PHOTO ALBUM

```md
photoalbum-project/
│
├── src/
│   ├── models/
│   │   ├── Album.ts       # Mongoose model for Album
│   │   ├── Asset.ts       # Mongoose model for Asset
│   │   └── Metadata.ts    # Mongoose model for Metadata
│   │
│   ├── resolvers/
│   │   ├── albumResolvers.ts  # Resolvers specific to Album
│   │   ├── assetResolvers.ts  # Resolvers specific to Asset
│   │   └── index.ts           # Combining all resolvers
│   │
│   ├── schemas/
│   │   └── schema.graphql     # GraphQL schema definitions
│   │
│   │
│   ├── utils/
│   │   └── db.ts              # Utility for MongoDB connection
│   │
│   └── index.ts               # Main entry point for the Apollo Server
│
├── node_modules/              # Project dependencies
│
├── .env                       # Environment variables
├── .gitignore                 # Specifies intentionally untracked files to ignore
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation

```