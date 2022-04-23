const {Message} = require('../models/models')

class MesaageController {
    // Отправка сообщения
    async create(req, res) {
        const {username, text} = req.body

        const message = await Message.create({username, text})

        res.json(message)
    }

    // Получение всех сообщений
    async get(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit

        const message = await Message.findAndCountAll({limit, offset})
        
        return res.json(message)     
    }

}

module.exports = new MesaageController()