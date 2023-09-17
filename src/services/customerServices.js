const Customor = require("../models/costurmer");
// Thưu viên tối ưu sql
const aqp = require("api-query-params");

const createCosturmerService = async (customerData) => {
  console.log(">>>> Checkk : ", customerData);
  try {
    let result = await Customor.create({
      name: customerData.name,
      addresses: customerData.addresses,
      email: customerData.email,
      phone: customerData.phone,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const createArrayCustomersService = async (arr) => {
  try {
    let result = await Customor.insertMany(arr);
    return result;
  } catch (err) {
    console.log("err >>>", err);
    return null;
  }
};

const getAllCustomersServer = async (limit, page, name, querySting) => {
  try {
    let result = "";
    if (limit && page) {
      // phân trang nào
      let offset = (page - 1) * limit;
      const { filter, skip } = aqp(querySting);
      // Xóa phần tử trong ojected
      delete filter.page;
      console.log("Checkkk >>>", filter);

      result = await Customor.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customor.find({});
    }
    return result;
  } catch (err) {
    console.log("err >>>", err);
    return null;
  }
};

const putUpdateCustomersServer = async (id, name, email, addresses) => {
  try {
    let result = await Customor.updateOne(
      { _id: id },
      { name, email, addresses }
    );
    return result;
  } catch (err) {
    console.log("err >>>", err);
    return null;
  }
};

const deleteCustomersServer = async (id) => {
  try {
    let result = await Customor.deleteById(id);
    return result;
  } catch (err) {
    console.log("err >>>", err);
    return null;
  }
};

const deleteArrayCustomerServices = async (id) => {
  try {
    let result = await Customor.deleteMany({ _id: { $in: id } });
    return result;
  } catch (err) {
    console.log("err >>>", err);
    return null;
  }
};

module.exports = {
  createCosturmerService,
  createArrayCustomersService,
  getAllCustomersServer,
  putUpdateCustomersServer,
  deleteCustomersServer,
  deleteArrayCustomerServices,
};
