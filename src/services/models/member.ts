import { Schema, model, Document, Model } from 'mongoose';

// TODO: Schema 를 클래스로 객체 생성 시 overwrite 에러 발생하는 것 고쳐보기
// var Schema = mongoose.Schema;
declare interface Info extends Document{
  name?: string;
  email: string;
  password: string;
  profile_url: string;
  phone?: string;
  message?: string;
  course_enquiry?: string;
  creation_date?: Date;
}

export interface MemberModel extends Model<Info> {};

export class Member {

  private _model: Model<Info>;

  constructor() {
      const schema =  new Schema({
          name: { type: String, required: true },
          email: { type: String, required: true },
          phone: { type: String },
          message: { type: String },
          course_enquiry: { type: String },
          creation_date: { type: Date, default: Date.now }
      },{collection: 'member'});

      this._model = model<Info>('Member', schema);
  }

  public get model(): Model<Info> {
      return this._model
  }
}


/* var MemberSchema = new Schema({
  email: {type: String},
  password: String
}, {collection: 'member'});

var Member = mongoose.model<Info>("Member", MemberSchema); */
// export {Member}
