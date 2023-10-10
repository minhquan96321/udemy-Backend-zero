const mongoose = require("mongoose");
// Thư viện có thể xóa không mất giữ liệu
const mongoose_delete = require("mongoose-delete");
// Khai báo route Mongodb
//1.1  định dạng kittySchema
const loginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlegth: 4,
      maxlegth: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlegth: 10,
      maxlegth: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlegth: 6,
    },
    admin : {
        type : Boolean,
        default: false,
    }
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
loginSchema.plugin(mongoose_delete, {
  overrideMethods: "all",
});

const LoginName = mongoose.model("admin", loginSchema);

module.exports = LoginName;
