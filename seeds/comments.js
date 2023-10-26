const sequelize = require('../config/connection');
const {Comments} = require('../models/index')

const commentData = [
  {
    userName: "Dave G",
    comment: "You are awesome!",
    post_id: 1,
  },
  {
    userName: "Harely K",
    comment: "You Rock!",
    post_id: 1,
  },
  {
    userName: "Harely K",
    comment: "You Rock!",
    post_id: 1,
  },
  {
    userName: "Harely K",
    comment: "You Rock!",
    post_id: 2,
  },
];

const seedComments = async () => {
    await Comments.bulkCreate(commentData);
}

module.exports = seedComments;