const {
  createTaskService,
  getTaskService,
  putTaskService,
  deleteTaskService,
} = require("../services/TaskSevices");

module.exports = {
  postCreateTask: async (req, res) => {
    let task = await createTaskService(req.body);
    return res.status(200).json({
      EC: 0,
      data: task,
    });
    //return res.send("Yêu em quá đi ");
  },
  getFetchTask: async (req, res) => {
    let result = await getTaskService(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  putTask: async (req, res) => {
    let result = await putTaskService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleteTask: async (req, res) => {
    let { id } = req.body;
    let result = await deleteTaskService(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
