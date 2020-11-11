const { GetValor } = require("../Api/GetValor")

async function GetValorFreteController(req, res){

    let result = await GetValor(req.body.cepOrigem, req.body.cepDestino);
    if(result){
        res.contentType("application/json");
        res.send(JSON.stringify(result))
    }else{
        res.contentType("application/json");
        res.send(JSON.stringify({status: 404, error: false}))
    }
}

module.exports = {
    GetValorFreteController
}