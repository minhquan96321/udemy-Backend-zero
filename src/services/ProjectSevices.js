const Project = require("../models/duan_project");
const aqp = require("api-query-params");

module.exports = {
  createProjectService: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      // Thêm thằng con vào thằng cha
      // Thêm mảng người dùng
      let myproject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myproject.usersInfor.push(data.usersArr[i]);
      }
      let newresult = await myproject.save();
      // find project by id
      return newresult;
    }
    if (data.type === "REMOVE-USERS") {
      let myproject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myproject.usersInfor.pull(data.usersArr[i]);
      }
      let newresult = await myproject.save();
      return newresult;
    }
    if (data.type === "ADD-TASKS") {
      let myproject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.taskArr.length; i++) {
        myproject.tasks.push(data.taskArr[i]);
      }
      let newresult = await myproject.save();
      return newresult;
    }
    return null;
  },
  getProjectService: async (data) => {
    // phân trang và phiêu muốn lấy ra trị
    const page = data.page;
    const { filter, limit, population, tasktion } = aqp(data);
    // console.log("CHECKKK : ", limit);
    // console.log("CHECKKK : ", filter);
    delete filter.page;
    //console.log("CHECKKK 2222222 : ", filter);
    let offset = (page - 1) * limit;
    let result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
  putProjectService: async (data) => {
    try {
      let result = await Project.updateOne({ _id: data.id }, { ...data });
      return result;
    } catch (erro) {
      return null;
    }
  },
  deleteProjectService: async (id) => {
    try {
      let result = await Project.deleteById(id);
      return result;
    } catch (erro) {
      return null;
    }
  },
};
