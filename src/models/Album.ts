// src/models/Album.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IAsset } from './Asset';

export interface IAlbum extends Document {
  title: string;
  description: string;
  assets: IAsset['_id'][];
  tags: string[];
  createdAt: string;
  modifiedAt: string;
  modifiedBy: string;
}

const AlbumSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],
  tags: [{ type: String }],
  createdAt: { type: String },
  modifiedAt: { type: String },
  modifiedBy: { type: String }
});

export default mongoose.model<IAlbum>('Album', AlbumSchema);
