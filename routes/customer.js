const express = require("express");
const router = express();
const customer = require("../controllers/c_customer");
router.post("/", customer.addCustomer);
// FUNCTION TO GET CUSTOMER
router.get("/", customer.getCustomer);
// FUNCTION TO GET CUSTOMER OF SPECIFIC DEALER
router.get("/specific", customer.getCustomerofDealer);
module.exports = router;
