// Trabalhando com JavaScript em um arquivo externo.
const nome = "Fiap";
console.log(nome, "chamando variável criado com  var");
//nome = "Avanade";

escreve("exemplo de função nominal");

//função nominal - udf  - 
function escreve(titulo){
//alert(titulo);
}

// Existem 4 formas de criar uma função em JavaScript 

// função nominal - sofre hoisting>>>(ele joga a var para cima quando chamada)
function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

// escopo, orientação a objetos. 

mudaTitulo("vai São Paulo");

//expreção de função - Function Expression
//função anonima (não tem nome )

const mudaTitulo2 = function(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
};

mudaTitulo2("Trocando Subtitulo");

// arrow function - É uma função  criada em ES6 ou ES2015
// não existe o this. dentro de uma function.
// não existe metodo construtor
// sintaxe mais simples e mais pratica.
const relogio =()=>{
    const date = new Date();
     mudaTitulo2(date.toLocaleTimeString());
};

setInterval(relogio, 1000);

