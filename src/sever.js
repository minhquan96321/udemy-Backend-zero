// xử lý
require("dotenv").config();
const express = require("express");
// inposted
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;

// comfig temlate engine
configViewEngine(app);

// Khai báo route
app.use("/v1", webRouter);

// hiển thị views
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
