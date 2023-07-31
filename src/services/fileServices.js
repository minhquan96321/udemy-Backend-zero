const { count } = require("console");
const path = require("path"); // ghi file : fs :fle system

const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

  // lưu ảnh vào => public/images/upload
  // remeber to create the upload folder first
  // let uploadPath = __dirname + fileObject.name;
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  //console.log("Check :", fileObject.name);

  // Chế biến ảnh khỏi trùng tên ảnh
  // lấy extension : tên mở rộng
  let extName = path.extname(fileObject.name);
  // lấy image's name (witthout extension) : ngăn cách với extension
  let baseName = path.basename(fileObject.name, extName);
  // Tạo tên file path : eg: / upload/ your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      //path: "link-image",
      path: finalName,
      error: null,
    };
  } catch (error) {
    console.log(">>> check error: ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFile = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "/public/images/upload");
    let resultArr = [];
    let cont = 0;
    for (let i = 0; i < filesArr.length; i++) {
      let extName = path.extname(fileArr[i].name);

      let baseName = path.basename(fileArr[i].name, extName);

      let finalName = `${baseName}-${Data.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;
      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          //path: "link-image",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        count++;
      } catch (error) {
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: null,
        });
      }
      return {
        countSuccess: count,
        detail: resultArr,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
