const sequelize = require('../config/connection');
const {Posts} = require('../models/index')

const postData = [
  {
    title: "My first blog post",
    userName: "Chris G",
    content:
      "Welcome to my blog. Here were are going to discuss all thing Web Development.",
    createdAt: new Date(),
  },
  
];

const seedBlogPosts = async () => {
    await Posts.bulkCreate(postData);
};

module.exports = seedBlogPosts;