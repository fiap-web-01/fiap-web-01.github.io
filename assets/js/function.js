// diferenças entre arrow function e funções nominais  ou expressões de função 

const resultado = document.querySelector("#resultado");
let myFunc1 ={
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);

    },
};

// chamando a função 
myFunc1.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
    );

// Explicar Spread operator(...), destructuring assignment
   /**  let myFunc2 ={
        // showArguments(){
         //   resultado.innerHTML = arguments;
         //    console.log(arguments);
    
        },
    };
    */

    myFunc2.showArguments(
        "Vai São Paulo",
        "Full-Stack Developer",
        "React",
        "NodeJS",
        "TypeScript"
        );

        let user = {
            name: "Juliana Cruz",
            usandoArrow:() => {
                console.log("Meu nome é  ", this.name, "Arrow Function");
            },
            usandoNominal() {
                console.log("Meu nome é  ", this.name, "Arrow Function");
            },
        };
        user.usandoArrow();
        user.usandoNominal();