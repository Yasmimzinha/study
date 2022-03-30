//criar um aplicativo de frases movitivacionais

// declaracao da função
// function statement
function createPhrases() {

    console.log('estudar é muito bom')
    console.log('Paciencia e persistencia')
    console.log('Revisao é mae do aprendizado')
}

// executar a funcao
// rodar, chamar, invocar
// execute, run, call, invoke 

createPhrases()

console.log('fim do programa')


//function expression
//function anonymous

//parametros (parameters)
const sum = function (number1, number2) {
    console.log(number1 + number2) 
    total = number1 + number2 
    return total
}

let number1 = 34
let number2= 25 

sum(number1,number2) // arguments = 59

sum(2,3)// = 5

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


//function scope 

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
     return subject

}
console.log(subject)
console.log(createThink(subject))

// function hoisting

//sayMyname();

//function sayMyname() {
//console.log('Yasmim')
    
//}

//arrow function 

const sayMyname = (name) => { //ou sayMyname(name)

    console.log(name)
}

sayMyname('Yasmim')


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}

const yasmim = new Person("yasmim")
const teddd = new Person("teddd")
console.log(yasmim.walk())
console.log(teddd.walk())

/* 

Type conversion (typecasting) vs Type coersion

   *Alteracao de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5)

//Manipulando Strings e Numeros 

//Transformar String em numero e numero em string

let string= '123'
console.log(Number(string))
let number=321
console.log(String(number))

//Manipulando Strings e Numeros 

//tranfrome letras minusculas em maiusculas. Faça o contrario disso tambem

let word = "Progamar é muito legall"
console.log(word.toUpperCase()) // ou "toLowerCase" para transformar de maiscula para



for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
        console.log(i)
  
}