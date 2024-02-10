import mongoose, { Schema, Document } from 'mongoose';
import { IAsset } from '../../asset/models/Asset';
// refactor to use the Asset model

export interface IAlbum extends Document {
    name: string;
    description: string;
    assets: IAsset[]; // Assuming Asset IDs are stored
    tags: String[];
}

const albumSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }], // Reference to Asset model
    tags: [{ type: String }],
}, { timestamps: true });

const Album = mongoose.model<IAlbum>('Album', albumSchema);

export default Album;