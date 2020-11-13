const controllers = require('./controllers_user')

module.exports = router => {
    router.post('/v1/api/user', controllers.create)
}
