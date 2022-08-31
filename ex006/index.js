
/*
= igual ------ se  a=b ---- se  a for igual a b é verdadeiro

=== identico ----- se a===b ---- se a for identico a b é verdadeiro


!== nao identico----- se a!==b ---- se a for identico a b é verdadeiro 


!= diferente ----- se a!=b ---- se a for diferente a b é verdadeiro 

< maior que ------- se a>b ----- se a for maior que b é verdadeiro 

> menor que  ------ se a<b ---- se a for menor que b é verdadeiro 


>= menor ou igual ------ se a>=b  se a for menor e igual  a b é verdadeiro


>= maior ou igual ------ se a>=b  se a for maior e igual  a b é verdadeiro



*/


// console.log(a>=b)


const a = 2
const b = 2

console.log(a === b && a <= b)


//V e V = V

console.log(a===b && a > b)

//V e F = F


/*
TABELA DO &&
 true e true = verdadeiro

 true e false = falso

 false e true = false 
 
 false e true = false

 false e false = false

TABELA DO OU (||)

true ou true = verdadeiro 

true ou false = true

false ou true = true

false ou false = false


TABELA DO (NOT) inverte valores
quando for colocado em ! entre pararentes e for verdadeiro se tornara falso
quando for colocado em ! entre pararentes e for falso se tornara verdadeiro




  

*/
console.log(a === b || a <= b)
// V ou V = V

console.log( a===b || a < b)
// V ou F = verdadeiro

console.log (a>b || a === b)
// F ou V = verdadeiro 

console.log(a>b || a< b)
// F ou F = F


console.log(!(a ===b)) //false 

console.log (a===b) //true 



