const sequelize = require('../config/connection');
const {Comments} = require('../models/index')

const commentData = [
    {
        author: "Dave G",
        comment: "You are awesome!",
        post_id: 1
    },
    {
        author: "Harely K",
        comment: "You Rock!",
        post_id: 2
    },
]

const seedComments = async () => {
    await Comments.bulkCreate(commentData);
}

module.exports = seedComments;