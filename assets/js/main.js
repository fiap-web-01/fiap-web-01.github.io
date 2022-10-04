// Trabalhando com JavaScript em um arquivo externo.
//const nome = "Fiap";
//console.log(nome, "chamando variável criado com  var");
//nome = "Avanade";

//escreve("exemplo de função nominal");

//função nominal - udf  - 
//function escreve(titulo){
//alert(titulo);
//}


// Existem 4 formas de criar uma função em JavaScript 


//expreção de função - Function Expression
// função nominal - sofre hoisting>>>(ele joga a var para cima quando chamada)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/
function mudaTitulo(target,novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
}

mudaTitulo("h1","vai São Paulo");         // escopo, orientação a objetos. 

const phrases = ["A vida e bela", "A vida é curta", "A vida e uma dadiva"]  //cria uma array
let i =0;                                                     //define a variálvel
setInterval(()=>{                                            //arrow function 
    mudaTitulo("h1",phrases[i])
    i++;                                                    //incremento
    if(i > 2){                                              //função i quando maio que 2 volta para  0
        i = 0;
    }
}, 4000);                                                   //o tempo que deve efetuar a troca 
                                            


const mudaTitulo2 = function(novoTitulo){                       //modelo de expressão nominal
    document.querySelector("h2").innerHTML = novoTitulo;
};
mudaTitulo2("Trocando Subtitulo");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/

const relogio =()=>{                                           // Modelo função anonima 
    const date = new Date();                             // chamar o relogio no lugar do titulo 2
     mudaTitulo2(date.toLocaleTimeString());
};
setInterval(relogio, 1000);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/
/*
const frases = ["Isso é você que esta falando!", "Fato!", "E você ai perdendo tempo"];
const mudaFrase = (elem, frases, x) => {
    let total = 0;
    setInterval(() => {
      document.querySelector(elem).innerHTML =
        frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
      console.log(total);
    }, x * 1000);
  };
mudaFrase("h2", frases, 4);
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SOLUÇÃO DO PROFESSOR //
/*
const phrases = ["A vida e bela 2", "A vida é curta 1 ", "A vida e uma dadiva 3"]  //cria uma array
const mudaPhrases =(alvo, texto, tempo) =>{
  let total = 2;
  setInterval(()=>{                                            //arrow function 
    document.querySelector(alvo).innerHTML =
    texto[total >= texto.length - 1 ? (total = 0) : (total +=1)];
    }, tempo *1000;
}                                                     //define a variálvel

mudaPhrase ("h1", frases, 4);
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


