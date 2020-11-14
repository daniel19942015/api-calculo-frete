const { GetValor } = require("../Api/GetValor")

async function GetValorFreteController(req, res){

    console.log("POST -> Recebendo comando -> "+ JSON.stringify(req.body))
    let result = await GetValor(req.body.cepOrigem, req.body.cepDestino);
    if(result){
        console.log("Success POST - send data -> " + JSON.stringify(result) + "\n")
        res.contentType("application/json");
        res.send(JSON.stringify(result))
    }else{
        let error = {status: 404, error: false}
        console.log("Error POST - send data -> " + JSON.stringify(error) + "\n")
        res.contentType("application/json");
        res.send(JSON.stringify(error))
    }
}

module.exports = {
    GetValorFreteController
}