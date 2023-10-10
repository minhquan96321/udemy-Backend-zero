const { uploadSingleFile } = require("../services/fileServices");
// Valition
const Joi = require("joi");

const {
  createCosturmerService,
  createArrayCustomersService,
  getAllCustomersServer,
  putUpdateCustomersServer,
  deleteCustomersServer,
  deleteArrayCustomerServices,
} = require("../services/customerServices");

// C2: Tạo người dùng
// {key : value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, email, phone, addresses, description } = req.body;

    // Valition  hihihihihi
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),

      addresses: Joi.string(),

      // Cấu hình có thể điền vào
      phone: Joi.string.pattern(new RegExp("^[0-9]{8,11}$")),

      description: Joi.string(),

      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return error;
    } else {
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
    }
  },
  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomersService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },
    getAllCustomers: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let result = "";

    // Làm phân trang
    if (limit && page) {
      result = await getAllCustomersServer(limit, page, name, req.query);
    } else {
      result = await getAllCustomersServer();
    }
    return res.status(200).json({
      EC: 0,
      data: result,
    });
    // return res.send("Ok single ");
  },
  putUpdateCustomers: async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let addresses = req.body.addresses;
    // let id = req.body.id;
    let { id, name, email, addresses } = req.body;

    let result = await putUpdateCustomersServer(id, name, email, addresses);
    return res.status(200).json({
      EC: 0,
      data: result,
    });

    // return res.send("Ok single 4545");
  },
  DeleteCustomers: async (req, res) => {
    let { id } = req.body;
    let result = await deleteCustomersServer(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  DeleteAPluginCustomer: async (req, res) => {
    let { id } = req.body;
    let result = await deleteCustomersServer(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  DeleteArrayCustomer: async (req, res) => {
    let id = req.body.customerid;
    console.log(id);
    let customermany = await deleteArrayCustomerServices(id);
    return res.status(200).json({
      EC: 0,
      data: customermany,
    });
  },
};
