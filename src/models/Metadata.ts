// src/models/Metadata.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IMetadata extends Document {
  filename: string;
  size?: number;
  createdAt: Date;
  modifiedAt?: Date;
  tags: string[];
}

const MetadataSchema: Schema = new Schema({
  filename: { type: String, required: true },
  size: { type: Number },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date },
  tags: [{ type: String }]
});

export default mongoose.model<IMetadata>('Metadata', MetadataSchema);
