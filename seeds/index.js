const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPosts')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    
    await seedBlogPost();

    process.exit(0)
}

seedAll();