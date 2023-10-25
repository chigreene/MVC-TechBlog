const sequelize = require('../config/connection');
const {Posts} = require('../models/index')

const postData = [
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
  {
    title: "My first blog post",
    author: "Chris G",
    content:
      "asdfasdf asdfasld ;kfjas ld;kf jla;sd kjf;lask djf; laks jdflka sjdfl;ka js dl;fkjasl; dj fl;a skjdfl;ask j d f;lk jasdfa; slkdjf",
    createdAt: new Date(),
  },
];

const seedBlogPosts = async () => {
    await Posts.bulkCreate(postData);
};

module.exports = seedBlogPosts;