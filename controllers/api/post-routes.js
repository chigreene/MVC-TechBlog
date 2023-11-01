const router = require("express").Router();
const { Comments, Posts } = require("../../models");
const withAuth = require("../../utils/auth");
// import middleware

// get post and comment by id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: ["userName", "comment", "createdAt"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("singlePost", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post comment to specific post by id
router.post("/:id/comment", withAuth, async (req, res) => {
  try {
    const userName = req.session.userName;

    const commentData = await Comments.create({
      comment: req.body.comment,
      userName: userName,
      post_id: req.params.id,
    });
    // do i need req.session.save() here
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

// post a comment
router.post("/", withAuth, async (req, res) => {
  try {
    const userName = req.session.userName;

    const postData = await Posts.create({
      title: req.body.title,
      content: req.body.content,
      userName: userName,
    });
    res.status(200).json(postData);
    console.log(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No project found for this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No project found for this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
