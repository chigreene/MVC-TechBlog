const sequelize = require('../config/connection');
const {Comments} = require('../models/index')

const commentData = [
  {
    userName: "Dave G",
    comment: "You are awesome, keep up the hard work!",
    post_id: 1,
  },
];

const seedComments = async () => {
    await Comments.bulkCreate(commentData);
}

module.exports = seedComments;