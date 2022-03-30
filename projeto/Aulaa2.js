//Variaveis

var clima = "Quente"
clima = "frio"

console.log(clima)

/* -O js é uma lingaguem fracamente tipada 
e dinamica.

-Variaveis nao precisam ter um tipo de 
previamente definido.

-Podemos mudar o conteudo da variavel.

*/ 

/* Scope

* Escopo determina a visibilidade de alguma
variavel no Js

*/

//#Block Statement 

//Vamos iniciar um bloco 
{
    // aqui dentro é um bloco e posso colocar qualquer codigo
    
}//aqui fechamos o bloco


/* var

var é globar e poderá funcionar fora de um
escopo de bloco */

console.log('>existe x antes do bloco? ' , x)

{
    var x = 0
}

console.log('>existe x depois do bloco?' , x)

// Variaveis e tipos de dados 
//declaraçao 

var name = 'Yasmim' 

// assignment or atribuicao de valores 
 
 name= "Yasmim"

//que tipo de dado foi colocado na variavel
console.log(name)

// agrupamento de declaracoes 

let age = 12 
let isHuman = true  


//multiplos argumentos na funcao
//console.log(name, age, isHuman )


//escrita de texto + variaveis

// concatenando valores
console.log('A ' + name + ' tem ' + age + ' anos ')

// interpolando valores com template literals or template string
console.log(`A ${name} tem ${age} anos`)

// Object 

const person = {

    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

//Array 

const animals = [

  'Lion',
  'Money',
  'Dog'
]
 
//acessar valores dentro do Array

console.log(animals.length)
console.log(animals[0]) 

//Exercicio 1: Declare uma variavel de nome weight

let weight;

//Que tipo de dado é a variavel acima?
console.log(typeof weight) 

/*  

   3. Declare uma variavel e atribua o valores para cada uma dos dados:

   *name: String 
   * age: Number (integer)
   * stars: Number (float)(numero quebrado)
   * isSubscribed: Boolean
   
   */

   //let name = "Yasmim"
   //let age = 12
   //let stars = 5.7
   //let isSubscribed = true

   // 4. A variavel student abaixo é de que tipo de dados?
      
    //console.log(typeof student)

     /*
     4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

     4.2 Mostre no console a seguinte mensagem:

     <name> de idade <age> pesa <weight> kg.

    */
let student= {
    name: "Yasmim",
    age: 12,
    weight: 49,
    isSubscribed: true
}
     
 console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
 

