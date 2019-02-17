const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
