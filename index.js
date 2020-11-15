const express = require("express")
const app = express()
const cors = require('cors')
const { router }  = require("./src/routes")
const port = process.env.PORT || 8080;
const wokeDyno = require('woke-dyno')
const uri = 'https://api-frete-calculo.herokuapp.com/'

app.use(cors())
app.use(router)
app.use(express.json())

app.listen(port, () =>{
    wokeDyno({
        url: uri,
        interval: 3600000
    }).start()
    console.log("Connectado on port ->", port);
})

