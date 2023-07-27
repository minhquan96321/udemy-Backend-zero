const mongoose = require("mongoose");
// Khai báo route Mongodb
//1.1  định dạng kittySchema
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    addresses: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
const Customor = mongoose.model("Customor", customerSchema);

module.exports = Customor;
