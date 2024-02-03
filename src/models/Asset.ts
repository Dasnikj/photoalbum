// src/models/Asset.ts
import mongoose, { Document, Schema } from 'mongoose';

enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  DOCUMENT = 'DOCUMENT'
}

interface IAsset extends Document {
  url: string;
  type: MediaType;
  metadata: mongoose.Types.ObjectId;
}

const AssetSchema: Schema = new Schema({
  url: { type: String, required: true },
  type: { type: String, enum: Object.values(MediaType), required: true },
  metadata: { type: Schema.Types.ObjectId, ref: 'Metadata' }
});

export default mongoose.model<IAsset>('Asset', AssetSchema);
