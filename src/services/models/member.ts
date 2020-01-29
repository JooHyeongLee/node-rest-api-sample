import { Schema, model, Document, Model } from 'mongoose';

// TODO: Schema 를 클래스로 객체 생성 시 overwrite 에러 발생하는 것 고쳐보기
// FIXME: Schema 정의를 클래스 밖 전역변수로 선언

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

// export interface MemberModel extends Model<Info> {};
const schema =  new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String },
  course_enquiry: { type: String },
  creation_date: { type: Date, default: Date.now }
},{collection: 'member'});

export class Member {

  private _model: Model<Info>;
  
  constructor() {
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
