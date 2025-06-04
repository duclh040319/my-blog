const { Post } = require("../models/Post");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
class PostController {
  post(req, res, next) {
    Post.find({})
      .then((posts) => {
        return res.render("post/store", {
          posts: multipleMongooseToObject(posts),
        });
      })
      .catch((err) => {
        return res.redirect("/");
      });
  }

  create(req, res, next) {
    return res.render("post/create");
  }

  add(req, res, next) {
    const post = new Post(req.body);
    post
      .save()
      .then(() => {
        console.log(">>> Created new post <<<");
        return res.redirect("/posts");
      })
      .catch((err) => {
        console.log(">>> Error create new post <<<", err);
        return res.redirect("/posts/create");
      });
  }

  edit(req, res, next) {
    Post.findById({ _id: req.params.id })
      .then((post) => {
        return res.render("post/edit", {
          title: "Update",
          post: mongooseToObject(post),
        });
      })
      .catch(next);
  }

  update(req, res, next) {
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/posts"))
      .catch(next);
  }

  delete(req, res, next) {
    Post.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/posts"))
      .catch(next);
  }
}

module.exports = new PostController();
