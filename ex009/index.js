// anatomia do while (laços de repetição)

//while em ingles significa enquanto

//enquanto essa condição que esta dentro dos parantes for verdadeira executa esse bloco de execução = while é basicamente isso... porem quando a execução for falsa ele vai parar de executar o bloco


// while (condicao){
// <bloco de execucao></bloco>
//
//}

let a  = 10
let b  = 15

while (a < b ){
    console.log('in crementando a variavel a ' + a)
    a++;

}

// do {
 // bloco de execucao
//} while (condicao)

// o do while executa e depois testa

// e o while vai testar depois executar

var i = 1

do {

    console.group('entrou '+ i)
    i++
}while (i <= 5)