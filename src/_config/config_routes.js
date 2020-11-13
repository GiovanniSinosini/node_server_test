const authRoutes = require('../features/auth/routes_auth')
const userRoutes = require('../features/user/routes_user')

module.exports = router => {
    authRoutes(router)
    userRoutes(router)
}