const mongoose = require("mongoose");
// Khai báo route Mongodb
//1.1  định dạng kittySchema
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;

//   const cat = new Kitten({ name: "con lon nay" });
//   cat.save();
