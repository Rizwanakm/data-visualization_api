import { Schema, model, Document } from "mongoose";

export interface IData extends Document {
  value: number;
  timestamp: Date;
}

const DataSchema = new Schema<IData>({
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default model<IData>("Data", DataSchema);
