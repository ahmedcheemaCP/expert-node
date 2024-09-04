const Dealer = require("../models/dealer");
const Admin = require("../models/admin");
exports.addDealer = async (req, res) => {
  try {
    const exist = await Admin.findOne({ email: "admin@admin.com" });
    console.log(req);
    if (exist) {
      const dealer = new Dealer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      console.log("Saving");
      await dealer.save();
      res.json("Dealer Created Successfully");
    } else {
      res.json("Error In Dealer Creation");
    }
  } catch (err) {
    res.json(err);
  }
};
// FUNCTION TO GET EMPLOYEE
exports.getDealer = async (req, res) => {
  try {
    const dealer = await Dealer.find();
    res.json(dealer);
  } catch (err) {
    res.json(err);
  }
};
