const mongoose = require("mongoose");
// Thư viện có thể xóa không mất giữ liệu
const mongoose_delete = require("mongoose-delete");
// Khai báo route Mongodb
//1.1  định dạng kittySchema
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addresses: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true, // CreateAt, UpdateAt
    // statics: {
    //   findByHoiDanIT(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);
//Override all models
customerSchema.plugin(mongoose_delete, {
  overrideMethods: "all",
});

const Customor = mongoose.model("Customor", customerSchema);

module.exports = Customor;
