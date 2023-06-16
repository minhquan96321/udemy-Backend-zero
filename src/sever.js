// xử lý
require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;

// lấy ra sử dụng
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const connection = require("./config/database");
const Kitten = require("./models/Kitten");

// comfig req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
// comfig temlate engine
configViewEngine(app);

// Khai báo route
app.use("", webRouter);

// test connection MONGODB connection

const cat = new Kitten({ name: "Học nhiều quá đi" });
cat.save();

(async () => {
  try {
    // Kiểm tra lỗi trước khi chạy
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error: " + error);
  }
})();

// simple query

// hiển thị views
// app.listen(port, hostname, () => {
//   console.log(`Example app listening on port ${port}`);
// });
