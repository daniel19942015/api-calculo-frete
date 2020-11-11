const express = require("express")
const router = express.Router()
const controller = require("./Controller/GetValorFreteController")
router.get("/", controller.GetValorFreteController)

module.exports = {
    router
}

