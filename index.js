const express = require("express")
const app = express()
const cors = require('cors')
const { router }  = require("./src/routes")
const port = 3000 || process.env.PORT;

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () =>{
    console.log("Connectado on port ->", port);
})

