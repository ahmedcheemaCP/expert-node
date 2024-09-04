const express = require("express");
const router = express();
const dealer = require("../controllers/c_dealer");

// FUNCTION TO ADD DEALER
router.post("/", dealer.addDealer);
// FUNCTION TO VIEW EMPLOYEE
router.get("/", dealer.getDealer);
module.exports = router;
