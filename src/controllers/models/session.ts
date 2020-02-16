import mongoose, { Schema } from 'mongoose';

class Session {
    Schema = mongoose.Schema;

    SessionSchema = new Schema({
        _id : {type: String, required: true},
        expires : {type: Date, required: true},
        lastModified : {type: Date},
        session: {type: Object, required: false},
      }, {collection: 'session'});

      sessionModel: any;

      constructor() {
        this.sessionModel = mongoose.model("Session", this.SessionSchema);
      }

      get model() {
          return this.sessionModel;
      }
}

export const sessionModel = new Session();