const Customor = require("../models/costurmer");

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

module.exports = {
  createCosturmerService,
  createArrayCustomersService,
};
