let result = []
let option = ''
function triangleArea(base, altura){
    return base*altura/2
} 

function rectangleArea(base, altura){
    return base*altura
}

function squareArea(base){
    return base*base
}

function areaTrapeze(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}

function circleArea(raio){
    return (raio*raio)*3,14
}


while(option !== 6){
    option = prompt(`
    escolha a opcao que voce eseja calcular: 
    1- area do triangulo
    2- area do retangolo
    3- area o quadrado
    4- area do trapezio
    5-area do ciculo
    6- sair`)

switch(option){
    case '1':
        console.log(triangleArea(prompt('digite a area do triangulo:'))
)
        break
        case '2': 
        console.log(rectangleArea(prompt('digite a area do retangolo:')))
        break
        case '3':
            console.log(squareArea(prompt('digite a area do quadrado:')))
        break
        case '4':
            console.log(areaTrapeze(prompt('digite a area do trapezio:'))) 
        break
        case '5':  
        console.log(circleAre(prompt('digite a area do circulo:')))  
        break
        
    }
}