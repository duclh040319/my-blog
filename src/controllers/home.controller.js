const { Post } = require("../models/Post");
const { multipleMongooseToObject } = require("../utils/mongoose");
class HomeController {
  home(req, res, next) {
    Post.find({})
      .then((posts) => {
        return res.render("home", {
          title: "Home",
          posts: multipleMongooseToObject(posts),
        });
      })
      .catch(next);
  }
}

module.exports =  new HomeController();
