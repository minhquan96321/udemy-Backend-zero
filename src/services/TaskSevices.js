const Task = require("../models/duan_tank");
const aqp = require("api-query-params");

module.exports = {
  createTaskService: async (data) => {
    if (data.type === "EMPTY-TASK") {
      let result = await Task.create(data);
      return result;
    }
  },
  getTaskService: async (data) => {
    let page = data.page;
    let { filter, limit, tasktion } = aqp(data);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Task.find(filter).skip(offset).limit(limit).exec();
    return result;
  },
  putTaskService: async (data) => {
    try {
      let result = await Task.updateOne({ _id: data.id }, { ...data });
      return result;
    } catch (e) {
      return null;
    }
  },
  deleteTaskService: async (id) => {
    try {
      let result = await Task.deleteById(id);
      return result;
    } catch (e) {
      return null;
    }
  },
};
