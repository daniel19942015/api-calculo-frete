let request = require('request');
let xml2js = require('xml2js');


function GetValor(cepOrigem, cepDestino){
    try {
        
        let params = {
            'nCdEmpresa': '',
            'sDsSenha': '',
            'sCepOrigem': cepOrigem,
            'sCepDestino': cepDestino,
            'nVlPeso': '5',
            'nCdFormato': '1',
            'nVlComprimento': '16',
            'nVlAltura': '5',
            'nVlLargura': '15',
            'nVlDiametro': '0',
            'sCdMaoPropria': 's',
            'nVlValorDeclarado': '200',
            'sCdAvisoRecebimento': 'n',
            'StrRetorno': 'xml',
            'nCdServico': '40010'
        };
        
        let url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx';
    
        let options = {
            'uri': url,
            'method': 'GET',
            'qs': params
        };
    
        return new Promise((resolve, reject) =>{
            request(options, function(error, response, body) {
                if (!error) {
                    if(response.statusCode === 200){
                        let parser = new xml2js.Parser({'async': true, 'attrkey': '@', 'explicitArray': false});
                        parser.parseString(body, function (err, xml) {
                            if(!err){
                                resolve(xml)
                            }else{
                                reject(err)
                            }
                        });
                    }else{
                        reject(response.statusCode);
                    }
                }else{
                    reject(error)
                }
            });
        })
    } catch (error) {
        console.log("Houve um erro")
        return false;
    }   
}

module.exports = {
    GetValor
}