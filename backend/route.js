const express = require('express')
const router = express.Router()
const model = require('./model')

        

    
router.post('/signup', async (req, res) => {
    try {

        const data = req.body
        const { username, email, password } = data
        if (!(username || email || password)) return res.status(400).send({ status: false, message: "username/email/password must be present" })

        let saved = await model.create(data)
        res.status(201).send({ status: true, message: saved })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

})
module.exports = router