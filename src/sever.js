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

// comfig temlate engine
configViewEngine(app);

// Khai báo route
app.use("/v1", webRouter);

// test connection
// simple query


// hiển thị views
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
