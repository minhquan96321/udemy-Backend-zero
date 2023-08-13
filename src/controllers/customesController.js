const { uploadSingleFile } = require("../services/fileServices");
const { createCosturmerService } = require("../services/customerServices");

// C2: Tạo người dùng
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, email, phone, addresses, description } = req.body;

    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }

    let customerData = {
      name,
      email,
      phone,
      addresses,
      description,
      image: imageUrl,
    };

    let customer = await createCosturmerService(customerData);

    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
};
