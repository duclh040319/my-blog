const express = require("express");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = 8080;

const { route } = require("./routes");

const { connect } = require("./database");
connect();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, '/public')))
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a,b) => a + b
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));


route(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
