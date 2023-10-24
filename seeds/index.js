const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPosts')
const seedComments = require('./comments')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    
    await seedBlogPost();

    await seedComments();

    process.exit(0)
}

seedAll();