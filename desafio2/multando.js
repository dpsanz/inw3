const prompt = require('prompt-sync')()

function getUserInfo(){
    let speed = prompt("Type the car speed: ")
    let ticket = 100

    return { 
        carSpeed: speed,
        speedingTicket: ticket
    }
}

function ticketCalc(
    carSpeed=0, 
    ticket=100
){
    return (carSpeed-60)*ticket
}

function main(){
    let userData = getUserInfo()
    let speed = userData.carSpeed
    let ticket = userData.speedingTicket
    let result = ticketCalc(speed,ticket)

    if(speed > 60){
        console.log(`You are going above speed limit and you've got a speeding ticket, its value is ${result}`)}
}
main()