const controllers = require('./controllers_auth')

module.exports = router => {     // configuration of authentication routes
    router.post('/v1/api/auth', controllers.auth)  //when accessing this path - run this function
}
