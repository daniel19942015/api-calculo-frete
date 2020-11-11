const express = require("express")
const router = express.Router()
const controller = require("./Controller/GetValorFreteController")
const { index } = require('./Controller/index')

router.get("/", index)
router.post("/frete", controller.GetValorFreteController)

module.exports = {
    router
}

