const homeRoute = require('./home.route')
const postRoute = require('./post.route')

function route(app) {
    app.use('/posts', postRoute)
    app.use('/', homeRoute)
}

module.exports = {route}