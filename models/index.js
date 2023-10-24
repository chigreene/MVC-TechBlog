const Posts = require('./blogPosts')
const Comments = require('./comments')

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
});

module.exports = { Posts, Comments };