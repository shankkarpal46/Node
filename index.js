let calculator = require('./calculator')
var p = require('prompt-sync')()
let choice = Number(p('Enter your choice:'))
console.log("You have selected one:-",choice)


switch(choice){
    case 1:
        console.log(calculator.sum(4,5));
        break

    case 2:
        console.log(calculator.sum(4,5));
        break

    case 3:
        console.log(calculator.sum(4,5));
        break

    default:
        console.log("Invalid Selection");
        
}