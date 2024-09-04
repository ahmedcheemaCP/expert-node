const Dealer = require("../models/dealer");
const Customer = require("../models/customer");
exports.addCustomer = async (req, res) => {
  try {
    const exist = await Dealer.findOne({ email: "dealer1@dealer.com" });
    console.log(req);
    if (exist) {
      const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        createdBy: exist.email,
      });
      console.log("Saving");
      await customer.save();
      res.json("Customer Created Successfully");
    } else {
      res.json("Error In Customer Creation");
    }
  } catch (err) {
    res.json(err);
  }
};
// FUNCTION TO GET CUSTOMER
exports.getCustomer = async (req, res) => {
  try {
    const dealer = await Dealer.find();
    res.json(dealer);
  } catch (err) {
    res.json(err);
  }
};
// FUNCTION TO GET CUSTOMER OF SPECIFIC DEALER
exports.getCustomerofDealer = async (req, res) => {
  try {
    const dealer = await Dealer.findOne({ email: req.body.email });
    const customer = await Customer.findMany({ createdBy: dealer.email });
    res.json(customer);
  } catch (err) {
    res.json(err);
  }
};
