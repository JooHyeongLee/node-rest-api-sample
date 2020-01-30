import mongoose from 'mongoose';

var Schema = mongoose.Schema;
declare interface Info extends Document{
  title: string;
  password?: string;
  count: number;
  types: string
  creation_date?: Date;
}

// export interface ChattingModel extends Model<Info> {};

/* export class Chatting {

  private _model: Model<Info>;

  constructor() {
      const schema =  new Schema({
          title: { type: String, required: true },
          types: { type: String, required: true },
          password: { type: String },
          count: { type: Number },
          creation_date: { type: Date, default: Date.now }
      },{collection: 'chatting'});

      this._model = model<Info>('Chatting', schema);
  }

  public get model(): Model<Info> {
      return this._model
  }
} */

var ChattingSchema = new Schema({
  title: { type: String, required: true },
  types: { type: String, required: true },
  password: { type: String },
  count: { type: Number },
  creation_date: { type: Date, default: Date.now },
  useYN: { type: String }
}, {collection: 'chatting'});

var Chatting = mongoose.model("Chatting", ChattingSchema); 
export {Chatting}