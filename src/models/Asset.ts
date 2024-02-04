// src/models/Asset.ts
import mongoose, { Document, Schema } from 'mongoose';
import { MediaType } from '../generated/graphql'; // Ensure this import if you're using the generated enum



interface IMetadata {
  key: string;
  value: string;
}

export interface IAsset extends Document {
  url: string;
  type: MediaType;
  metadata: IMetadata[];
  filename: string;
  size: number;
  createdAt: string;
  modifiedAt: string;
  tags: string[];
}

const AssetSchema: Schema = new Schema({
  url: { type: String, required: true },
  type: { type: String, enum: MediaType, required: true },
  metadata: [{ key: String, value: String }],
  filename: { type: String, required: true },
  size: { type: Number },
  createdAt: { type: String },
  modifiedAt: { type: String },
  tags: [{ type: String }]
});

export default mongoose.model<IAsset>('Asset', AssetSchema);
