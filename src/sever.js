// xử lý
require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;
// Thư viên load ảnh
const fileUpload = require("express-fileupload");

// lấy ra sử dụng
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");

const connection = require("./config/database");
const { MongoClient } = require("mongodb");
// config file upload
// default options
app.use(fileUpload());

// comfig req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
// comfig temlate engine
configViewEngine(app);

// Khai báo route
app.use("", webRouter);
app.use("/v1/api", apiRouter);

// test connection MONGODB connection
(async () => {
  try {
    // Kiểm tra lỗi trước khi chạy
    // using mongoose
    await connection();

    //using mongodb driver
    const url = process.env.DB_HOST_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("customors");

  //   {
  //     id: 1,
  //     province :"Vinh",
  //     country : {
  //       "VietNam",
  //       code : 100
  //     }
  //   },
  //   {
  //     id: 2,
  //     province :"Dien Chau",
  //     country : {
  //       "VietNam",
  //       code : 100
  //     }
  //   }

  //   collection.insertOne({ name: "QuanCao",
  //     address : [ 1 ,2]
  // });


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
