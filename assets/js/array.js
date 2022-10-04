const carrosDOM = document.querySelector("#carros")

const veiculos = [
    "chevorlet", 
    "Ford", 
    "Fiat",
     "VW", 
     "Honda", 
     "Toyota", 
     "Hyundai"
    ];
//adiciona ao final do array
    veiculos.push ("BMW", "Mercedes");

//adiciona no inicio do array 
    veiculos.unshift ("Audi");

// removendo o inicio do array
    const primeiro = veiculos.shift();
    console.log("remove o primeiro elemento do array ", primeiro);

// removendo o final do array
    const ultimo = veiculos.pop();
    console.log("remove o último elemento do array ", ultimo);

//removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemnto do array
const removidos = veiculos.splice(1, 2);

//removendo e adiconando elementos
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>`;
});

/////////////////////////////////////////////////

// splice - remove e adiciona elementos
const nbaTeams = [
    "Warriors",
    "Raptors",
    "Lakers",
    "Celtics",
    "Bucks",
    "76ers"
    ];

//slice - retorna um novo array, o primeiro parametro é opcional , e começa em zero.
//o pultimo parametro determina até onde deve ser filtrado, porém excluído este úlmtimo elemento. 
const newNba = nbaTeams.splice(-1);

console.log(nbaTeams.slice(3, 5));
console.log(newNba,"ultimo");

// slice - retorna um novo array

////////////////////////////////////////////////////////////////////////

//map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Juliana da Cruz";
const nameArray = name.split("  ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");

console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const CelticsMap = nbaTeams.map(procuraCeltic); // retorna um novo array, mapeando e buscando no array anterior
const CelticsFilter = nbaTeams.filter(procuraCeltic); //retorna um novo array procura do começo  ao fim do array anterior, que retornou true para a função usada.
const CelticsFind = nbaTeams.find(procuraCeltic); //retorna a primeira ocorrencia de uma busca com o parametroque a função determinou.

