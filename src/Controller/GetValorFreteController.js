const { GetValor } = require("../Api/GetValor")

async function GetValorFreteController(req, res){

    let init = new Date().getTime()
    let finish = '';
    let total = '';
    console.log("POST -> Recebendo comando -> "+ JSON.stringify(req.body))
    let result = await GetValor(req.body.cepOrigem, req.body.cepDestino);
    if(result){
        finish = new Date().getTime()
        total = finish - init
        result.time = total
        console.log("Success POST - send data -> " + JSON.stringify(result) + "\n")
        res.contentType("application/json");
        res.send(JSON.stringify(result))
    }else{
        let error = {status: 404, error: false}
        finish = new Date().getTime()
        total = finish - init
        error.time = total
        console.log("Error POST - send data -> " + JSON.stringify(error) + "\n")
        res.contentType("application/json");
        res.send(JSON.stringify(error))
    }
}

module.exports = {
    GetValorFreteController
}