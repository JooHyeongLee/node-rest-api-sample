import mongoose, { Schema } from 'mongoose';

declare interface Info extends Document{
  title: string;
  password?: string;
  count: number;
  types: string
  creation_date?: Date;
}

class Chatting {
    Schema = mongoose.Schema;

    ChattingSchema = new Schema({
        title: { type: String, required: true },
        types: { type: String, required: true },
        password: { type: String },
        count: { type: Number },
        creation_date: { type: Date, default: Date.now },
        useYN: { type: String }
      }, {collection: 'chatting'});

      chattingModel: any;

      constructor() {
        this.chattingModel = mongoose.model("Chatting", this.ChattingSchema);
      }

      get model() {
          return this.chattingModel;
      }
}

export const chattingModel = new Chatting();