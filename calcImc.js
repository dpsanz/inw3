const prompt = require('prompt-sync')()

function getUserInfo(){
    let peso = prompt("Digite seu peso (kg): ")
    let altura = prompt("Digite sua altura (m): ") 

    return { 
        pesoDoUsuario: peso, 
        alturaDoUsuario: altura
    }
}

function calcImc(
    pesoInformado=0, 
    alturaInformada=0   
){
    return pesoInformado/alturaInformada**2 
}

function main(){
    let userData = getUserInfo()
    let peso = userData.pesoDoUsuario
    let altura = userData.alturaDoUsuario
    let resultado = calcImc(peso,altura)

    if(resultado < 18){
        console.log(`Seu IMC é ${resultado}, e você está abaixo `)}
    else if(resultado>18 && resultado<23.9){
        console.log(`Seu IMC é ${resultado}, e você está normal`)}
    else if(resultado> 24 && resultado<29.9){
        console.log(`Seu IMC é ${resultado}, e você está levemente acima do peso`)}
    else if(resultado>30 && resultado<34.9){
        console.log(`Seu IMC é ${resultado}, e você tem Obesidade grau 1`)}
    else if(resultado>35 && resultado<39.9){
        console.log(`Seu IMC é ${resultado}, e você tem Obesidade grau 2`)}
    else{
        console.log(`Seu IMC é ${resultado}, e você provavelmente vai morrer D:`)
    }
    console.log(`Seu IMC é ${resultado}`)
}
main()