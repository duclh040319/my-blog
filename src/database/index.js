const mongoose = require("mongoose");
function connect() {
  mongoose
    .connect(
      "mongodb+srv://duclh:kdXrIf2uGXwfVCmG@cluster0.fhqqxqm.mongodb.net/blog"
    )
    .then(() => {
      console.log(">>> Connected to db <<<");
    })
    .catch((err) => {
      console.log(">>> Something went wrong!!! <<<");
    });
}

module.exports = { connect };
