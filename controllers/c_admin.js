// // FUNCTION TO ADD EMPLOYEE
// router.post("/", admin.addAdmin);
// // FUNCTION TO VIEW EMPLOYEE
// router.get("/", admin.getAdmin);

const Admin = require("../models/admin");

// FUNCTION TO ADD EMPLOYEE
exports.addAdmin = async (req, res) => {
  try {
    const adminExist = await Admin.findOne({ email: "admin@admin.com" });
    if (adminExist) {
      res.json("Admin Already Created");
    } else {
      const admin = new Admin({
        email: "admin@admin.com",
        password: "12345",
      });
      await admin.save();
      res.json("Admin Created Successfully");
    }
  } catch (err) {
    res.json(err);
  }
};
// FUNCTION TO GET EMPLOYEE
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
    res.json(admin);
  } catch (err) {
    res.json("Admin not created");
  }
};
