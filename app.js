const express = require("express");
const app = express();
require("./database.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
const AdminRoute = require("./routes/admin.js");
app.use("/api/admin", AdminRoute);
const DealerRoute = require("./routes/dealer.js");
app.use("/api/dealer", DealerRoute);
const CustomerRoute = require("./routes/customer.js");
app.use("/api/customer", CustomerRoute);

const start = (async) => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
