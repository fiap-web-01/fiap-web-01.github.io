const areasNacionais = ['Azul', 'Gol','Latam']

const airCompanies = [
    ...areasNacionais,
    "Delta",
    "United Airlines",
    "Emirates",
    "Qatar",
    "Tap",
]

console.log(airCompanies);

// atribuição por desestruturação.
// 0 - Azul
// 1 - Gol 
// 2 - Latam
// 3 - Delta


// desestruturação de array
const [azul, voeGol, Latam, Delta, ...internacionais] = airCompanies;

console.log(Delta, "verificando a variavel delta");
console.log(internacionais, "Verificando a váriavel");

// Object Roletion Map - ORM - tabela SQL ou documento noSQL - transforma em objetos. 
//hibernate - fazia isso no java
//NodeJS tb usa ORM - typeORM (excelente para definição de estruturas de tabelas-DDL) - Prisma(manipular os dados)

// desestrutação de objetos 
const user = {
    name: "juliana Cruz",
    email: "newjully@gmail.com",
    password: "123456"

}

const {password, ...data} = user;

console.log(data, "retorna dados do API");


//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort


// Grandes areas do java Script  - dominou esses assintos vc dominou a linguagem JavaScript
//Funções
//Array
//Eventos
//Assincronos
//Objetos
//Controle de Fluxo Estrutura e loops 

// não importa qual o evento a sintaxe é sempre a mesma:
// quem.addEventListener("evento", função); - quem é o elemento o que vai receber o evento

const body = document.querySelector("body");
body.style.width ="100%"
body.style.height = "100vh"

body.addEventListener("mouseover", (event) => {
    body.style.backgroundColor = '#d4d4d4'
    console.log("executou o evento");
});
