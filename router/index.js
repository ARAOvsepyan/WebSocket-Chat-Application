const Router = require('express')
const router = new Router()
const messageRouter = require('./messageRouter')

router.use('/message', messageRouter)

module.exports = router