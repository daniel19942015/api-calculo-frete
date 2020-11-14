const { GetValor } = require("../Api/GetValor")

async function GetValorFreteController(req, res){

    console.log("POST -> Recebendo comando -> "+ req.body)
    let result = await GetValor(req.body.cepOrigem, req.body.cepDestino);
    if(result){
        console.log("Sucess POST - send data")
        res.contentType("application/json");
        res.send(JSON.stringify(result))
    }else{
        console.log("Error POST - send data")
        res.contentType("application/json");
        res.send(JSON.stringify({status: 404, error: false}))
    }
}

module.exports = {
    GetValorFreteController
}