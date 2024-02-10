// src/modules/assets/models/Asset.ts
import mongoose, { Document, Schema } from 'mongoose';

export enum MediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    AUDIO = "AUDIO",
    DOCUMENT = "DOCUMENT",
  }


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
  tags: string[];
}

const AssetSchema: Schema = new Schema({
    url: { type: String, required: true },
    type: { type: String, enum: Object.values(MediaType), required: true },
    metadata: [{ key: String, value: String }],
    filename: { type: String, required: true },
    size: { type: Number },
    tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.model<IAsset>('Asset', AssetSchema);
