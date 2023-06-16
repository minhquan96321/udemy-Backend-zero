const mongoose = require("mongoose");
// Khai báo route Mongodb
//1.1  định dạng kittySchema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const User = mongoose.model("user", userSchema);

module.exports = User;

//   const cat = new Kitten({ name: "con lon nay" });
//   cat.save();
