const router = require("express").Router();
const { Comments, Posts } = require("../../models");

// import middleware

router.get("/:id", async (req, res) => {
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

router.post("/:id/comment", async (req, res) => {
  try {
      const userName = req.session.userName;

    const commentData = await Comments.create({
      title: req.body.title,
      comment: req.body.comment,
      user_name: userName,
      post_id: req.params.id,
    });
    // do i need req.session.save() here
    res.status(200).json(commentData);
      console.log(commentData);
      console.log("sesion ID", req.session.userName);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

module.exports = router;
