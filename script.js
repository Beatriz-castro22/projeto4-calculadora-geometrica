let result = []
let option = ''

while(option !== 6){
    option = prompt(`
    escolha a opcao que voce eseja calcular: 
    1- area do triangulo
    2- area do retangolo
    3- area o quadrado
    4- area do trapzio
    5-area do ciculo
    6- sair`)

switch(option){
    case '1':
        function triangleArea(base, altura){
            return base*altura/2
        } 
        console.log(triangleArea(prompt()
        ))
        break
        case '2': 
        function rectangleArea(base, altura){
            return base*altura
        }
        console.log(rectangleArea(prompt()))
        break
        case '3':
        function squareArea(base){
            return base*base
        }
        console.log(squareArea(prompt()))
        break
        case '4':
            function areaTrapeze(baseMaior, baseMenor, altura) {
                return (baseMaior + baseMenor) * altura / 2
            }
    
    }
}