// src/models/Album.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IAlbum extends Document {
  title: string;
  description?: string;
  assets: mongoose.Types.ObjectId[];
}

const AlbumSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }]
});

export default mongoose.model<IAlbum>('Album', AlbumSchema);
