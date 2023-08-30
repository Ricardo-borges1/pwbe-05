function calcular (valorVenda, codigoResposta){

    let valor = valorVenda
    let codigo = codigoResposta
    let resposta
    let parcela
    let novoPreco

    if (codigo == 1){
        
        novoPreco = valor - ( valor * (8 / 100))
        resposta = `R$:${valor} será cobrado à vista com 8% de desconto = R$:${novoPreco.toFixed(2).replace('.', ',')}`
        
    }else if (codigo == 2){
        
        novoPreco = valor - ( valor * (4 / 100))
        resposta = `R$:${valor} será cobrado à vista com 4% de desconto = ${novoPreco.toFixed(2).replace('.', ',')}`

    }else if (codigo == 3){

        parcela = valor / 2
        resposta = `R$:${valor} será parcelado em 2x de ${parcela.toFixed(2).replace('.', ',')}`
    
    }else{

        novoValor = valor + ( valor * (8 / 100) )
        parcela = novoPreco / 4
        resposta = `R$:${valor} acrescido em 8% será parcelado em 4x de ${parcela.toFixed(2).replace('.', ',')}`

    }

    return resposta

}
module.exports ={
    calcular
}