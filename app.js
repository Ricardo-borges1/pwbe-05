/****************************************************************************************************************************************************
* Objetivo: Ajustar o preço com desconto de uma loja usando os códigos
* Data: 30/08/2023
* Autor: Ricardo Borges do Amaral
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var calculoDesconto = require('./modulos/calcular')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o valor da venda: ', function(valorVenda){

    let valor = valorVenda.replace(",", ".").replace(".", ",")

    console.log ("As opções de códigos são as seguintes:")
    console.log ("-----------------------------------------------")
    console.log ("Código 1 - À vista, com 8% de desconto")
    console.log ("Código 2 - À vista, com 4% de desconto")
    console.log ("Código 3 - Em 2x, preço normal sem juros")
    console.log ("Código 4 - Em 4x, preço ascrescido de 8%")
    console.log ("-----------------------------------------------")

    entradaDeDados.question('Digite o código [1 - 2 - 3 - 4] : ', function(codigoResposta){

        let codigo = codigoResposta

        if (valor == '' || codigo == '')

            console.log('ERRO: É necessário informar um valor ou um código válido')

        else if (isNaN(codigo))

            console.log('ERRO: O código tem que ser é um NÚMERO entre 1 e 4')

        else if (Number(codigo) > 4 || Number(codigo) < 1)

            console.log('ERRO: É necessário informar um código entre 1 e 4')

        else if (isNaN(valor))

            console.log('ERRO: É necessário informar um valor que seja válido')

        else{

            valor = Number(valor)
            codigo = Number(codigo)

            let resposta =  calculoDesconto.calcular(valor, codigo)

            console.log(resposta)

            entradaDeDados.close()

        }
    
    })

})