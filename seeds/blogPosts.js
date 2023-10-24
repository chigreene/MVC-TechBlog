const sequelize = require('../config/connection');
const Posts = require('../models/index')

const postData = [
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
  },
];

const seedBlogPosts = async () => {
    await sequelize.sync({ force: true });
    await Posts.bulkCreate(postData);
    process.exit(0)
};

module.exports = seedBlogPosts;