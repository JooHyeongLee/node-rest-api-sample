import mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  email: String,
  password: String
}, {collection: 'member'});

var Member = mongoose.model("Member", MemberSchema);
export {Member}
