const sequelize = require('../config/connection');
const Posts = require('../models/index')

const commentData = [
    {
        author: "Dave G",
        comment: "You are awesome!"
    },
    {
        author: "Harely K",
        comment: "I agree."
    }
]

const seedComments = async () => {
    await sequelize.sync({ force: true });
    await Posts.bulkCreate(commentData);
    process.exit(0);
}

module.exports = seedComments;