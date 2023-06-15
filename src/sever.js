//1.11111111 phần sql quan hệ
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

// comfig req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
// comfig temlate engine
configViewEngine(app);

// Khai báo route
app.use("", webRouter);

// test connection
// simple query

// hiển thị views
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});


//1.2222222222222222222 MongoDB server
