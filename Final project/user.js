/**
 * 用户信息
 */
var mongoose = require('./mongoose.js'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
username : { type: String },
userpwd: {type: String},
// userage: {type: Number},
// logindate : { type: Date}
});

module.exports = mongoose.model('User',UserSchema);
