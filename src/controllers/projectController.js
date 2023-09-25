const {
  createProjectService,
  getProjectService,
} = require("../services/ProjectSevices");

module.exports = {
  postCreateProject: async (req, res) => {
    let projects = await createProjectService(req.body);
    return res.status(200).json({
      EC: 0,
      data: projects,
    });
    //return res.send("Thành công rồi con mợ mầy ");
  },
  getAllProject: async (req, res) => {
    // lấy page với limit
    let result = await getProjectService(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
    // return res.send("Lấy ra thành công ahihi");
  },
};
